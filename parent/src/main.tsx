import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import AppRoot from "./AppRoot";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider>
      <AppRoot />
    </ChakraProvider>
  </StrictMode>
);
