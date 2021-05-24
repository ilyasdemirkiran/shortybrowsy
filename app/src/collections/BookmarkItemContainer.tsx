import {AbsoluteCenterProps} from "@chakra-ui/react";
import {Center} from "@chakra-ui/layout";


function BookmarkItemContainer({children, ...rest}: AbsoluteCenterProps) {

  return (
    <Center height={20} borderRadius={4} boxShadow="md" {...rest}>
      {children}
    </Center>
  )
}

export default BookmarkItemContainer;

