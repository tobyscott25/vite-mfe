import { FunctionComponent, lazy, ReactElement, Suspense } from "react";
import ErrorBoundary from "./components/ErrorBoundary";

// Error Boundary only works with dynamically loaded components
const Mfe1AppRoot = lazy(() => import("mfe1/AppRoot"));

export const Mfe1: FunctionComponent = (): ReactElement => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <Mfe1AppRoot username="toby" />
      </Suspense>
    </ErrorBoundary>
  );
};
