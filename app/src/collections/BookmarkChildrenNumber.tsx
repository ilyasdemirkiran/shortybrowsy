import { Square } from "@chakra-ui/layout";
import _ from "lodash";

function BookmarkChildrenNumber(props: { childrenNumber: number | undefined }) {
  if (_.isNil(props.childrenNumber)) {
    return null;
  }

  return (
    <Square size="25px" bg="gray.700" color="gray.200" borderRadius={2}>
      {`${props.childrenNumber}`}
    </Square>
  )
}

export default BookmarkChildrenNumber;