import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Only suppress DevTools in production
if (import.meta.env.PROD && typeof window !== "undefined") {
  // @ts-expect-error - Suppressing DevTools hook for production
  window.__REACT_DEVTOOLS_GLOBAL_HOOK__ = window.__REACT_DEVTOOLS_GLOBAL_HOOK__ || {};
  // @ts-expect-error - Suppressing DevTools hook for production
  window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = () => {};
}

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found");

createRoot(rootElement).render(<App />);
