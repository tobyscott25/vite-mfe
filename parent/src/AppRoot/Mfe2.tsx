import { FunctionComponent, lazy, ReactElement, Suspense } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { loadDynamicRemote } from "../utils/loadDynamicRemote";

const DynamicRemoteApp = lazy(() => {
  return loadDynamicRemote(
    "http://localhost:5002/assets/remoteEntry.js",
    "mfe2",
    "./AppRoot"
  );
});

export const Mfe2: FunctionComponent = (): ReactElement => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <DynamicRemoteApp username="toby" />
      </Suspense>
    </ErrorBoundary>
  );
};
