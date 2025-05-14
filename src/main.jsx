import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { DictionaryProvider } from "./contexts/DictionaryContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DictionaryProvider>
      <App />
    </DictionaryProvider>
  </StrictMode>
);
