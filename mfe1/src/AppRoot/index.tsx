import { Routes, Route } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";

import { Home } from "./Home";
import { NotFound } from "./NotFound";
import { TheButton } from "./TheButton";

function AppRoot() {
  return (
    // <BrowserRouter>
    <Box>
      <Text fontSize={"xl"}>Child app</Text>
      <Routes>
        <Route index element={<Home />} />
        <Route path="button" element={<TheButton />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Box>
    // </BrowserRouter>
  );
}

export default AppRoot;
