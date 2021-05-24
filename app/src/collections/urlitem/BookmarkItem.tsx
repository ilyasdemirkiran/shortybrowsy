import {useDisclosure} from "@chakra-ui/hooks";
import {Image} from "@chakra-ui/image";
import {HStack, Link, Text} from "@chakra-ui/layout";
import {useHotkeys} from "react-hotkeys-hook";
import {AiOutlineLink} from "react-icons/ai";
import BookmarkTitle from "../BookmarkTitle";
import BookmarkItemContainer from "../BookmarkItemContainer";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogOverlay,
  Button
} from "@chakra-ui/react";
import React from "react";
import {FocusableElement} from "@chakra-ui/utils";

export interface BookmarkItemProps {
  bookmarkNode: chrome.bookmarks.BookmarkTreeNode,
  keys: string,

  onDeleteBookmarkNode(id: string): void
}

function BookmarkItem({bookmarkNode, keys, onDeleteBookmarkNode}: BookmarkItemProps) {
  const {isOpen: isDeleteDialogOpen, onOpen: onDeleteDialogOpen, onClose: onDeleteDialogClose} = useDisclosure();
  const cancelRef = React.useRef<FocusableElement | null>(null)
  const deleteDenyRef = React.useRef(null)

  useHotkeys(`d+${keys}`, () => {
    !isDeleteDialogOpen && onDeleteDialogOpen();
  }, {filterPreventDefault: true});

  useHotkeys(keys, () => {
    // if (isOpen) {
    //   return;
    // }
    window.open(bookmarkNode?.url, "_blank");
  }, [bookmarkNode, keys]);


  if (!bookmarkNode.url) {
    return null;
  }

  return (
    <>
      <Link isExternal href={bookmarkNode.url}>
        <BookmarkItemContainer bg="gray.800" color="gray.50">
          <HStack>
            <Image boxSize="24px" src={`${new URL(bookmarkNode.url).origin}/favicon.ico`}/>
            <AiOutlineLink/>
            <BookmarkTitle title={bookmarkNode.title}/>
            <Text>{`${keys}`}</Text>
          </HStack>
        </BookmarkItemContainer>
      </Link>
      <Text>{keys}</Text>
      <AlertDialog motionPreset="slideInBottom"
                   leastDestructiveRef={cancelRef}
                   onClose={onDeleteDialogClose}
                   isOpen={isDeleteDialogOpen}
                   isCentered>
        <AlertDialogOverlay/>
        <AlertDialogContent>
          <AlertDialogBody>
            Are you sure to delete {`${bookmarkNode.title}`}?
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={deleteDenyRef} onClick={onDeleteDialogClose}>
              No
            </Button>
            <Button colorScheme="red" ml={3} onClick={() => onDeleteBookmarkNode(bookmarkNode.id)}>
              Yes
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>

      </AlertDialog>
    </>
  )
}

export default BookmarkItem;