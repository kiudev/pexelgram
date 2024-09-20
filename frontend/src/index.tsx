import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import SearchContextProvider from "./context/searchContext";

const rootEl = document.getElementById("root");
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <SearchContextProvider>
        <App />
      </SearchContextProvider>
    </React.StrictMode>
  );
}
