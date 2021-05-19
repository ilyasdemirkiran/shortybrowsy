import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
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

  if (!bookmarkNode.url) {
    return null;
  }



  return (
    <Link isExternal href={bookmarkNode.url}>
      <Center bg="gray.700" color="gray.200" height={10} borderRadius={2}>
        <HStack>
          <Image src={`${new URL(bookmarkNode.url).origin}/favicon.ico`} />
          <AiOutlineLink />
          <BookmarkTitle title={bookmarkNode.title} />

          {/* <Kbd bgColor="gray.700">{`${keys}`}</Kbd> */}
        </HStack>
      </Center>
    </Link>
  )
}

export default BookmarkItem;