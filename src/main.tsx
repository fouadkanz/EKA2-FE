import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Helmet } from "react-helmet";
const appName = process.env.VITE_APP_NAME || "EKA2";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "./components/ui/toaster.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Helmet>
      <title>{appName.toUpperCase()}</title>
    </Helmet>
    <BrowserRouter basename="/">
      <Toaster />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
