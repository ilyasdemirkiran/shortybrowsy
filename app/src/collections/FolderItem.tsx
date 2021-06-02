import {NavLink, useHistory} from "react-router-dom";
import {AiOutlineFolder} from "react-icons/ai";
import BookmarkTitle from "./BookmarkTitle";
import BookmarkChildrenNumber from "./BookmarkChildrenNumber";
import BookmarkItemContainer from "./BookmarkItemContainer";
import {useHotkeys} from "react-hotkeys-hook";
import {Mode, useAppContext} from "../App";
import BookmarkGridItem from "./BookmarkGridItem";
import BookmarkShortcutKey from "./BookmarkShortcutKey";

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
			<BookmarkItemContainer bg="gray.700" color="gray.50">
				<BookmarkGridItem colSpan={1} color="gray.900" boxShadow="sm" p={1}>
					<BookmarkShortcutKey keys={keys} showIcon={false}/>
				</BookmarkGridItem>
				<BookmarkGridItem colSpan={1}>
					<AiOutlineFolder size={24}/>
				</BookmarkGridItem>
				<BookmarkGridItem colSpan={3}>
					<BookmarkTitle title={folderNode.title}/>
				</BookmarkGridItem>
				<BookmarkGridItem colSpan={1}>
					<BookmarkChildrenNumber childrenNumber={folderNode.children?.length}/>
				</BookmarkGridItem>
			</BookmarkItemContainer>
		</NavLink>
	)
}

export default FolderItem;