import {HStack} from "@chakra-ui/layout";
import {MdKeyboardHide} from "react-icons/all";
import {Kbd} from "@chakra-ui/react";


function BookmarkShortcutKey({keys, showIcon}: { keys: string, showIcon: boolean }) {
	return (
		<HStack>
			{showIcon && <MdKeyboardHide color="gray.50" size={24}/>}
			<Kbd>{keys}</Kbd>
		</HStack>
	)
}

export default BookmarkShortcutKey;