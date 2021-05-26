import {NavLink, useHistory} from "react-router-dom";
import {AiOutlineFolder} from "react-icons/ai";
import {HStack} from "@chakra-ui/layout";
import BookmarkTitle from "./BookmarkTitle";
import BookmarkChildrenNumber from "./BookmarkChildrenNumber";
import BookmarkItemContainer from "./BookmarkItemContainer";
import {useHotkeys} from "react-hotkeys-hook";
import {Mode, useAppContext} from "../App";

export interface FolderItemProps {
	folderNode: chrome.bookmarks.BookmarkTreeNode
	keys: string
}

function FolderItem({folderNode, keys}: FolderItemProps) {
	const to = `/${folderNode.id}`;
	const history = useHistory();
	let {mode} = useAppContext();

	useHotkeys(
		keys,
		() => {
			if (mode === Mode.OPEN) {
				history.push(to);
			}
		},
		[to, folderNode, keys, mode]
	);

	return (
		<NavLink to={to}>
			<BookmarkItemContainer bg="gray.600" color="gray.50">
				<HStack h="full">
					<AiOutlineFolder size={24}/>
					<BookmarkChildrenNumber childrenNumber={folderNode.children?.length}/>
					<BookmarkTitle title={folderNode.title}/>
				</HStack>
			</BookmarkItemContainer>
		</NavLink>
	)
}

export default FolderItem;