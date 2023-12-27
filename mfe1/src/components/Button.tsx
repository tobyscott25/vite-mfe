import { FunctionComponent, useState } from "react";

export const Button: FunctionComponent = (): JSX.Element => {
  const [state, setState] = useState(0);
  return (
    <div>
      <button onClick={() => setState((s) => s + 1)}>
        Child button: {state}
      </button>
    </div>
  );
};

export default Button;
