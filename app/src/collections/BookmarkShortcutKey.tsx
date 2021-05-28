import {HStack} from "@chakra-ui/layout";
import {MdKeyboardHide} from "react-icons/all";
import {Kbd} from "@chakra-ui/react";


function BookmarkShortcutKey({keys}: { keys: string }) {
	return (
		<HStack>
			<MdKeyboardHide color="gray.50" size={24}/>
			<Kbd>{keys}</Kbd>
		</HStack>
	)
}

export default BookmarkShortcutKey;