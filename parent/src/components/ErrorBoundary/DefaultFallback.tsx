import { FunctionComponent } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

const DefaultErrorFallback: FunctionComponent = (): JSX.Element => {
  return (
    <Flex justifyContent={"space-between"}>
      <Box></Box>
      <Box
        display={"inline-block"}
        alignItems={"center"}
        borderRadius="sm"
        p={10}
        px={20}
        backgroundColor="neutrals.20"
        color="accent.orange.500"
        my={30}
      >
        <Text
          fontFamily="Poppins"
          fontSize="sm"
          fontWeight="medium"
          role="heading"
          textAlign={"center"}
        >
          A rendering error has been caught by the error boundary.
        </Text>
      </Box>
      <Box></Box>
    </Flex>
  );
};

export default DefaultErrorFallback;
