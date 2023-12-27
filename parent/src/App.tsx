import React from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";

import ErrorBoundary from "./components/ErrorBoundary";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

// Error Boundary only works with dynamically loaded components
const CounterButton = React.lazy(() => import("mfe1/CounterButton"));

function App() {
  return (
    <Box width={500} mx={"auto"}>
      <Flex justifyContent={"space-around"}>
        <Image width={100} src={viteLogo} alt="Vite logo" />
        <Image width={100} src={reactLogo} alt="React logo" />
      </Flex>
      <Text fontSize={"2xl"}>Parent app</Text>
      <ErrorBoundary>
        <CounterButton label={"Hello MFE"} />
      </ErrorBoundary>
    </Box>
  );
}

export default App;
