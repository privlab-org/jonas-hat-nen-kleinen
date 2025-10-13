import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Suppress React DevTools suggestion in production
if (typeof window !== "undefined") {
  // @ts-expect-error - Suppressing DevTools hook for cleaner console
  window.__REACT_DEVTOOLS_GLOBAL_HOOK__ = window.__REACT_DEVTOOLS_GLOBAL_HOOK__ || {};
  // @ts-expect-error - Suppressing DevTools hook for cleaner console
  window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = () => {};
}

createRoot(document.getElementById("root")!).render(<App />);
