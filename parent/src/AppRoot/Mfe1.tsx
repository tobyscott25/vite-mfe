import React, { FunctionComponent, ReactElement } from "react";
import ErrorBoundary from "./components/ErrorBoundary";

// Error Boundary only works with dynamically loaded components
// const CounterButton = React.lazy(() => import("mfe1/CounterButton"));
const Mfe1AppRoot = React.lazy(() => import("mfe1/AppRoot"));

export const Mfe1: FunctionComponent = (): ReactElement => {
  return (
    <ErrorBoundary>
      <Mfe1AppRoot />
    </ErrorBoundary>
  );
};
