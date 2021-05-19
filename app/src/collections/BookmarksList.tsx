import { Button } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Center, HStack, Kbd, Text, VStack, Link, SimpleGrid } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import FolderItem from "./folderitem/FolderItem";
import BookmarkItem from "./urlitem/BookmarkItem";

export interface BookmarksListProps {
}

function BookmarksList(props: BookmarksListProps) {
  const { id } = useParams<{ id: string | undefined }>();
  const [bookmarks, setBookmarks] = useState<chrome.bookmarks.BookmarkTreeNode[] | null>();

  useEffect(() => {
    if (id) {
      chrome.bookmarks.getSubTree(id, results => setBookmarks(results));
    } else {
      chrome.bookmarks?.getTree(setBookmarks);
    }
  }, [id]);

  return (
    <SimpleGrid spacingY={2} padding={2}>
      {
        bookmarks && (bookmarks[0].parentId ? (
          <NavLink to={`/${bookmarks[0].parentId}`}>
            <Center bg="gray.700" color="gray.200" height={10} borderRadius={2}>
              <HStack>
                <ArrowBackIcon />
                <Text>Back</Text>
                {/* <Kbd bgColor="gray.700">{`${keys}`}</Kbd> */}
              </HStack>
            </Center>
          </NavLink>
        ) : null)
      }
      {
        bookmarks && bookmarks[0].children?.map(child => {
          if (child.url) {
            return <BookmarkItem bookmarkNode={child} />
          } else {
            return <FolderItem folderNode={child} />
          }
        })
      }
    </SimpleGrid>
  )
}

export default BookmarksList;