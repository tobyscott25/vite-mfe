import { Button, ChakraProvider } from "@chakra-ui/react";
import { FunctionComponent, useState } from "react";

interface Props {
  label?: string;
}

export const CounterButton: FunctionComponent<Props> = (props): JSX.Element => {
  const [state, setState] = useState(0);
  return (
    <ChakraProvider>
      <Button
        colorScheme={"blue"}
        variant={"outline"}
        onClick={() => setState((s) => s + 1)}
      >
        {props.label ?? "Counter button: "} {state}
      </Button>
    </ChakraProvider>
  );
};

export default CounterButton;
