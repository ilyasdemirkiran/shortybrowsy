import {useDisclosure} from "@chakra-ui/hooks";
import {Image} from "@chakra-ui/image";
import {Link, Text} from "@chakra-ui/layout";
import {AiOutlineLink} from "react-icons/ai";
import BookmarkTitle from "./BookmarkTitle";
import BookmarkItemContainer from "./BookmarkItemContainer";
import {Kbd, Modal, ModalContent, ModalOverlay, SimpleGrid} from "@chakra-ui/react";
import React from "react";
import {useHotkeys} from "react-hotkeys-hook";
import {Mode, useAppContext} from "../App";
import BookmarkGridItem from "./BookmarkGridItem";

export interface BookmarkItemProps {
	bookmarkNode: chrome.bookmarks.BookmarkTreeNode,
	keys: string,

	onDeleteBookmarkNode(id: string): void
}

function BookmarkItem({bookmarkNode, keys, onDeleteBookmarkNode}: BookmarkItemProps) {
	let {mode} = useAppContext();
	const {isOpen: isDeleteModalOpen, onOpen: openDeleteModal, onClose: closeDeleteModal} = useDisclosure();

	useHotkeys(keys, () => {
		if (mode === Mode.OPEN) {
			window.open(bookmarkNode?.url, "_blank");
		}
		if (mode === Mode.EDIT) {

		}
		if (mode === Mode.DELETE) {
			openDeleteModal();
		}
	}, [keys, bookmarkNode, mode, openDeleteModal, isDeleteModalOpen, closeDeleteModal]);

	if (!bookmarkNode.url) {
		return null;
	}

	return (
		<>
			<Link isExternal href={bookmarkNode.url}>
				<BookmarkItemContainer bg="gray.800" color="gray.50">
					<BookmarkGridItem colSpan={1}>
						<Image objectFit="fill" boxSize="24px" src={`${new URL(bookmarkNode.url).origin}/favicon.ico`}/>
					</BookmarkGridItem>
					<BookmarkGridItem colSpan={1}>
						<AiOutlineLink size={24}/>
					</BookmarkGridItem>
					<BookmarkGridItem colSpan={3}>
						<BookmarkTitle title={bookmarkNode.title}/>
					</BookmarkGridItem>
					<BookmarkGridItem colSpan={1} color="gray.900" boxShadow="sm" p={1}>
						<Kbd bg="gray.50">{keys}</Kbd>
					</BookmarkGridItem>
				</BookmarkItemContainer>
			</Link>
			<Modal isOpen={isDeleteModalOpen} onClose={closeDeleteModal} isCentered closeOnOverlayClick>
				<ModalOverlay/>
				<ModalContent>
					<SimpleGrid p={2} spacingY={2} borderRadius={1}>
						<Text>{`${bookmarkNode.title}`}</Text>
					</SimpleGrid>
				</ModalContent>
			</Modal>
		</>
	)
}

export default BookmarkItem;

