import { Button, ChakraProvider } from "@chakra-ui/react";
import { FunctionComponent, useState } from "react";

export const CounterButton: FunctionComponent = (): JSX.Element => {
  const [state, setState] = useState(0);
  return (
    <ChakraProvider>
      <Button
        colorScheme={"blue"}
        variant={"outline"}
        onClick={() => setState((s) => s + 1)}
      >
        Counter button: {state}
      </Button>
    </ChakraProvider>
  );
};

export default CounterButton;
