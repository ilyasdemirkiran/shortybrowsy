import { Box, Center, Circle, Text } from "@chakra-ui/layout";
import _ from "lodash";

function BookmarkChildrenNumber(props: { childrenNumber: number | undefined }) {
  if (_.isNil(props.childrenNumber)) {
    return null;
  }

  return (
    <Circle size="25px" bg="gray.700" color="gray.200">
      {`${props.childrenNumber}`}
    </Circle>
  )
}

export default BookmarkChildrenNumber;