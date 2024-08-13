import { Fragment } from "react";
import "./App.css";

import loadConfig from "./lib/configLoader";
import ChatPage from "./pages/chat/ChatPage";
import { ChatSessionProvider } from "./pages/chat/core/context/MessageContext";
const appName = process.env.VITE_APP_NAME || "eka2"; // This should be set to 'symbiosis' or 'eka2'
const config = loadConfig(appName);
import { Toaster } from "@/components/ui/toaster";
import LoginPage from "./pages/auth/LoginPage";
import { useMsalAuth } from "./pages/auth/core/hooks/auth";

function App() {
  const { isAuthenticated } = useMsalAuth();

  return (
    <Fragment>
      {isAuthenticated ? (
        <ChatSessionProvider>
          <Toaster />
          <ChatPage config={config} appName={appName} />
        </ChatSessionProvider>
      ) : (
        <LoginPage />
      )}
    </Fragment>
  );
}
export default App;
