import { FunctionComponent, ReactElement } from "react";
import { Box } from "@chakra-ui/react";

import CounterButton from "./components/CounterButton";

export const TheButton: FunctionComponent = (): ReactElement => {
  return (
    <Box>
      <CounterButton />
    </Box>
  );
};
