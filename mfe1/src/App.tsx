import { Box, Text } from "@chakra-ui/react";

import CounterButton from "./components/CounterButton";

function App() {
  return (
    <Box>
      <Text fontSize={"xl"}>Child app</Text>
      <Text>PotterDB API URL: {import.meta.env.VITE_POTTERDB_API_URL}</Text>
      <CounterButton />
    </Box>
  );
}

export default App;
