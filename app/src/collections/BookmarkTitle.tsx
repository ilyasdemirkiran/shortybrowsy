import {Text} from "@chakra-ui/layout";
import _ from "lodash";

function BookmarkTitle(props: { title: string }) {
	const {title} = props;

	return (
		<Text w="full" px={1}>
			{_.truncate(title, {length: 36, omission: "..."})}
		</Text>
	)
}

export default BookmarkTitle;