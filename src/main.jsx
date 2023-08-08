import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  ChakraProvider,
  ColorModeProvider,
  useColorMode,
  Button,
} from "@chakra-ui/react";

const ThemeToggler = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button onClick={toggleColorMode}>
      Modo {colorMode === "light" ? "oscuro" : "claro"}
    </Button>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeProvider
        options={{
          initialColorMode: "light",
          useSystemColorMode: false,
        }}
      >
        <ThemeToggler />
        <App />
      </ColorModeProvider>
    </ChakraProvider>
  </React.StrictMode>
);
