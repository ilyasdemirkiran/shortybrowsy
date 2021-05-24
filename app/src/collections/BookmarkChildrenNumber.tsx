import {Square} from "@chakra-ui/layout";
import _ from "lodash";

function BookmarkChildrenNumber(props: { childrenNumber: number | undefined }) {
  if (_.isNil(props.childrenNumber)) {
    return null;
  }

  return (
    <Square size="24px" bg="gray.50" color="gray.900" borderRadius={2}>
      {`${props.childrenNumber}`}
    </Square>
  )
}

export default BookmarkChildrenNumber;