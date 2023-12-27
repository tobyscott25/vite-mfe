declare module "mfe1/CounterButton" {
  import { ComponentType } from "react";
  interface Props {
    label?: string;
  }
  const CounterButton: ComponentType<Props>;
  export default CounterButton;
}

declare module "mfe1/AppRoot" {
  import { ComponentType } from "react";
  const AppRoot: ComponentType;
  export default AppRoot;
}
