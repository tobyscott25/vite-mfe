import { Routes, Route } from "react-router-dom";
import { ChakraProvider, Box, Text } from "@chakra-ui/react";

import { Home } from "./Home";
import { NotFound } from "./NotFound";
import { TheButton } from "./TheButton";
import { FunctionComponent } from "react";

interface Props {
  username?: string;
}

const AppRoot: FunctionComponent<Props> = (props): JSX.Element => {
  return (
    <ChakraProvider>
      <Box>
        <Text fontSize={"xl"}>Child app</Text>
        {props.username ? (
          <Text>Logged in as: {props.username}</Text>
        ) : (
          <Text>Not logged in</Text>
        )}
        <Routes>
          <Route index element={<Home />} />
          <Route path="button" element={<TheButton />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Box>
    </ChakraProvider>
  );
};

export default AppRoot;
