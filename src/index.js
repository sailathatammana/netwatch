import React from "react";
import ReactDOM from "react-dom/client";

//Project Files
import App from "./App";
import { UserProvider } from "./state/UserProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
);
