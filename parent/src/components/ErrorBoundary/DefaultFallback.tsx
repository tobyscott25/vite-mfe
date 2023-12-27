import { FunctionComponent } from "react";

const DefaultErrorFallback: FunctionComponent = (): JSX.Element => {
  return <div>A rendering error has been caught by the error boundary.</div>;
};

export default DefaultErrorFallback;
