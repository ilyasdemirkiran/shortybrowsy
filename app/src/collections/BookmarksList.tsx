import {HStack, SimpleGrid} from "@chakra-ui/layout";
import React, {useCallback, useEffect, useMemo, useState} from "react";
import {useParams} from "react-router";
import FolderItem from "./FolderItem";
import BookmarkItem from "./BookmarkItem";
import BookmarkToolbar from "./BookmarkToolbar";
import {Button, Grid, GridItem} from "@chakra-ui/react";
import BookmarkShortcutKey from "./BookmarkShortcutKey";
import {useHotkeys} from "react-hotkeys-hook";

export interface BookmarksListProps {
}

function BookmarksList(props: BookmarksListProps) {
	const {id} = useParams<{ id: string | undefined }>();
	const [bookmarks, setBookmarks] = useState<chrome.bookmarks.BookmarkTreeNode[] | null>();
	const parentId = useMemo(() => (bookmarks && bookmarks[0]) && bookmarks[0].parentId, [bookmarks]);

	const childrenLength = useMemo(() => {
		if (bookmarks && bookmarks[0] && bookmarks[0].children) {
			return bookmarks[0].children.length;
		}

		return 0;
	}, [bookmarks]);

	const [pageNumber, setPageNumber] = useState<number>(0);

	const totalPageNumber = useMemo(() => {
		setPageNumber(0);

		return Math.ceil(childrenLength / 4);
	}, [childrenLength]);

	const children: chrome.bookmarks.BookmarkTreeNode[] = useMemo(() => {
		if (bookmarks && bookmarks[0] && bookmarks[0].children) {
			return bookmarks[0].children.slice(pageNumber * 4, (pageNumber * 4) + 4)
		}

		return []
	}, [pageNumber, bookmarks]);

	const decreasePageNumber = useCallback(() => setPageNumber(prev => prev - 1), []);
	const increasePageNumber = useCallback(() => setPageNumber(prev => prev + 1), []);
	const cannotGoPreviousPage: boolean = useMemo(() => (totalPageNumber === 0 || pageNumber === 0), [totalPageNumber, pageNumber]);
	const cannotGoNextPage: boolean = useMemo(() => (pageNumber >= totalPageNumber - 1), [totalPageNumber, pageNumber]);

	// Previous page via hotkey
	useHotkeys("q", () => {
		if (!cannotGoPreviousPage) {
			decreasePageNumber();
		}
	}, [cannotGoPreviousPage, decreasePageNumber, bookmarks]);

	// Next page via hotkey
	useHotkeys("e", () => {
		if (!cannotGoNextPage) {
			increasePageNumber();
		}
	}, [cannotGoNextPage, increasePageNumber, bookmarks]);

	useEffect(() => {
		if (id) {
			chrome.bookmarks.getSubTree(id, results => setBookmarks(results));
		} else {
			chrome.bookmarks?.getTree(setBookmarks);
		}
	}, [id]);

	let onDeleteBookmarkNode = useCallback((bookmarkId: string) => {
		chrome.bookmarks.remove(bookmarkId);
		setBookmarks(null);
	}, [setBookmarks]);

	return (
		<SimpleGrid spacingY={2} padding={2}>
			<BookmarkToolbar bookmarkTitle={bookmarks && bookmarks[0].title} bookmarkId={id} parentId={parentId}/>
			{
				children.map((child, index) => {
					if (child.url) {
						return <BookmarkItem bookmarkNode={child} keys={`${index + 1}`}
						                     onDeleteBookmarkNode={onDeleteBookmarkNode}/>
					} else {
						return <FolderItem folderNode={child} keys={`${index + 1}`}/>
					}
				})
			}
			<Grid templateColumns="repeat(4, 1fr)" gap={2} w="full">
				<GridItem colSpan={2}>
					<HStack p={1}>
						<Button disabled={cannotGoPreviousPage} onClick={() => decreasePageNumber()} w="full">Previous
							Page</Button>
						<BookmarkShortcutKey keys="q" showIcon={false}/>
					</HStack>
				</GridItem>
				<GridItem colSpan={2}>
					<HStack p={1}>
						<Button disabled={cannotGoNextPage} onClick={() => increasePageNumber()} w="full">Next Page</Button>
						<BookmarkShortcutKey keys="e" showIcon={false}/>
					</HStack>
				</GridItem>

			</Grid>
		</SimpleGrid>
	)
}

export default BookmarksList;