import { Routes, Route } from "react-router-dom";
import { Box, Flex, Text, Image } from "@chakra-ui/react";

import { Home } from "./Home";
import { Mfe1 } from "./Mfe1";
import { NotFound } from "./NotFound";

import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  return (
    <Box width={500} mx={"auto"}>
      <Flex justifyContent={"space-around"}>
        <Image width={100} src={viteLogo} alt="Vite logo" />
        <Image width={100} src={reactLogo} alt="React logo" />
      </Flex>
      <Text fontSize={"2xl"}>Parent app</Text>
      <Routes>
        <Route index element={<Home />} />
        <Route path="mfe1/*" element={<Mfe1 />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Box>
  );
}

export default App;
