import React from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

// Error Boundary only works with dynamically loaded components
const CounterButton = React.lazy(() => import("mfe1/CounterButton"));

function App() {
  return (
    <div>
      <div>
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>Parent app</h1>
      <ErrorBoundary>
        <CounterButton />
      </ErrorBoundary>
    </div>
  );
}

export default App;
