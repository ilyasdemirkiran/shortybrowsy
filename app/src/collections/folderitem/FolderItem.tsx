import {NavLink, useHistory} from "react-router-dom";
import {AiOutlineFolder} from "react-icons/ai";
import {HStack} from "@chakra-ui/layout";
import BookmarkTitle from "../BookmarkTitle";
import BookmarkChildrenNumber from "../BookmarkChildrenNumber";
import {useHotkeys} from "react-hotkeys-hook";
import BookmarkItemContainer from "../BookmarkItemContainer";

export interface FolderItemProps {
  folderNode: chrome.bookmarks.BookmarkTreeNode
  keys: string
}

function FolderItem({folderNode, keys}: FolderItemProps) {
  const to = `/${folderNode.id}`;
  const history = useHistory();

  useHotkeys(
    keys,
    (event, handler) => {
      history.push(to);

    },
    [to, folderNode, keys]
  );

  return (
    <NavLink to={to}>
      <BookmarkItemContainer bg="gray.600" color="gray.50">
        <HStack h="full">
          <AiOutlineFolder/>
          <BookmarkChildrenNumber childrenNumber={folderNode.children?.length}/>
          <BookmarkTitle title={folderNode.title}/>
        </HStack>
      </BookmarkItemContainer>
    </NavLink>
  )
}

export default FolderItem;