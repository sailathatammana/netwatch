import React from "react";
import ReactDOM from "react-dom";

//Project Files
import App from "./App";
import { UserProvider } from "./state/UserProvider";
import { AuthProvider } from "state/AuthProvider";
import { ContentProvider } from "state/ContentProvider";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <UserProvider>
        <ContentProvider>
          <App />
        </ContentProvider>
      </UserProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
