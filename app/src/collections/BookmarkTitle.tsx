import { Text } from "@chakra-ui/layout";
import _ from "lodash";

function BookmarkTitle(props: { title: string }) {
  const { title } = props;

  return (
    <Text>
      {_.truncate(title, { length: 16, omission: "..." })}
    </Text>
  )
}

export default BookmarkTitle;