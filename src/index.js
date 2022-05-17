import React from "react";
import ReactDOM from "react-dom/client";

//Project Files
import App from "./App";
import { UserProvider } from "./state/UserProvider";
import { AuthProvider } from "state/AuthProvider";
import { TitleProvider } from "state/TitleProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <UserProvider>
        <TitleProvider>
          <App />
        </TitleProvider>
      </UserProvider>
    </AuthProvider>
  </React.StrictMode>
);
