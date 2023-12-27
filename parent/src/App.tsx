import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box, Flex, Text, Image } from "@chakra-ui/react";

import ErrorBoundary from "./components/ErrorBoundary";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

// Error Boundary only works with dynamically loaded components
const CounterButton = React.lazy(() => import("mfe1/CounterButton"));

function App() {
  return (
    <BrowserRouter>
      <Box width={500} mx={"auto"}>
        <Flex justifyContent={"space-around"}>
          <Image width={100} src={viteLogo} alt="Vite logo" />
          <Image width={100} src={reactLogo} alt="React logo" />
        </Flex>
        <Text fontSize={"2xl"}>Parent app</Text>
        <Routes>
          <Route index element={<Box>Visit /mfe1/*</Box>} />
          <Route
            path="mfe1/*"
            element={
              <>
                <ErrorBoundary>
                  <CounterButton label={"Hello MFE"} />
                </ErrorBoundary>
              </>
            }
          />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
