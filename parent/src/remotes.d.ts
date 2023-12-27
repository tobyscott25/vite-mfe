declare module "mfe1/CounterButton" {
  import { ComponentType } from "react";
  interface Props {
    label?: string;
  }
  const CounterButton: ComponentType<Props>;
  export default CounterButton;
}
