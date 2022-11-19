import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Auth0Provider
        domain="https://dev-gznzoc56rjalxx1w.us.auth0.com"
        clientId="qBUyc9LLkj6E6BNe9bg2mksyO31FYmPX"
        redirectUri={window.location.origin}
    >
        <App />
    </Auth0Provider>
);
