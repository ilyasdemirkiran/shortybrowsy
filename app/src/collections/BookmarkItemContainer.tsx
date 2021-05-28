import {Grid, GridProps} from "@chakra-ui/react";


function BookmarkItemContainer({children, ...rest}: GridProps) {
	return (
		<Grid height={20} borderRadius={4} boxShadow="md" {...rest} w="full" gap={1} paddingX={1}
		      templateColumns="repeat(6, 1fr)">
			{children}
		</Grid>
	)
}

export default BookmarkItemContainer;

