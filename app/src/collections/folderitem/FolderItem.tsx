import { NavLink } from "react-router-dom";
import { AiOutlineFolder } from "react-icons/ai";
import { Center, HStack, Text } from "@chakra-ui/layout";
import _ from "lodash";
import BookmarkTitle from "../BookmarkTitle";
import BookmarkChildrenNumber from "../BookmarkChildrenNumber";

export interface FolderItemProps {
  folderNode: chrome.bookmarks.BookmarkTreeNode
}

function FolderItem(props: FolderItemProps) {
  const { folderNode } = props;

  return (
    <NavLink to={`/${folderNode.id}`}>
      <Center bg="gray.200" color="gray.700" height={10} borderRadius={2}>
        <HStack>
          <AiOutlineFolder />
          <BookmarkChildrenNumber childrenNumber={folderNode.children?.length} />
          <BookmarkTitle title={folderNode.title} />
          {/* {`${folderNode.title} ${folderNode.children ? folderNode.children.length : 0}`} */}
        </HStack>
      </Center>
    </NavLink >
  )
}

export default FolderItem;