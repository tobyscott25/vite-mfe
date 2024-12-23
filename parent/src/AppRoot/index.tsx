import { Routes, Route } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";

import { NavBar } from "./components/NavBar";

import { Home } from "./Home";
import { NotFound } from "./NotFound";
import { Mfe1 } from "./Mfe1";
import { Mfe2 } from "./Mfe2";

function App() {
  return (
    <Flex minH={"100vh"} mx={"auto"}>
      <NavBar />
      <Box>
        <Routes>
          <Route index element={<Home />} />
          <Route path="mfe1/*" element={<Mfe1 />} />
          <Route path="mfe2/*" element={<Mfe2 />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Box>
    </Flex>
  );
}

export default App;
