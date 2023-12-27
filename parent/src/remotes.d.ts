declare module "mfe1/AppRoot" {
  import { ComponentType } from "react";
  interface Props {
    username?: string;
  }
  const Mfe1AppRoot: ComponentType<Props>;
  export default Mfe1AppRoot;
}
