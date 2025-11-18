import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AllProviders } from "./context/AllProviders";

// ✅ Log environment variable BEFORE rendering
console.log("Base URL:", import.meta.env.VITE_API_URL);

console.log("app is running")

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AllProviders>
      <App />
    </AllProviders>
  </React.StrictMode>
);
