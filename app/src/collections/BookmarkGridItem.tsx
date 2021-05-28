import {GridItem, GridItemProps} from "@chakra-ui/react";
import {Center} from "@chakra-ui/layout";
import React from "react";


function BookmarkGridItem({children, ...rest}: GridItemProps) {

	return (
		<GridItem {...rest} h="full">
			<Center height="100%">
				{children}
			</Center>
		</GridItem>
	)
}

export default BookmarkGridItem;