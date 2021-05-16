import { Button } from "@chakra-ui/button";
import { Center, HStack, Link, Text } from "@chakra-ui/layout";
import _ from "lodash";
import { AiOutlineLink } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import BookmarkTitle from "../BookmarkTitle";

export interface BookmarkItemProps {
  bookmarkNode: chrome.bookmarks.BookmarkTreeNode
}

function BookmarkItem(props: BookmarkItemProps) {
  const { bookmarkNode } = props;

  return (
    <Link isExternal href={bookmarkNode.url}>
      <Center bg="gray.700" color="gray.200" height={10} borderRadius={2}>
        <HStack>
          <AiOutlineLink />
          <BookmarkTitle title={bookmarkNode.title} />
          {/* <Kbd bgColor="gray.700">{`${keys}`}</Kbd> */}
        </HStack>
      </Center>
    </Link>
  )
}

export default BookmarkItem;