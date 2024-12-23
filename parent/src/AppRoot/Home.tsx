import { FunctionComponent, ReactElement } from "react";
import { Box, Text } from "@chakra-ui/react";

export const Home: FunctionComponent = (): ReactElement => {
  return (
    <Box>
      <Text fontSize={"lg"}>Parent app!</Text>
      <Text>Visit /mfe1/*</Text>
    </Box>
  );
};
