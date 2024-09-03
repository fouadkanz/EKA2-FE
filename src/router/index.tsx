import loadConfig from "@/lib/configLoader";
import LoginPage from "@/pages/auth/LoginPage";
import ChatPage from "@/pages/chat/ChatPage";
import Setting from "@/pages/setting/Setting";
import  { useState } from "react";
import { Route, Routes } from "react-router-dom";
const appName = process.env.VITE_APP_NAME || "eka2"; // This should be set to 'symbiosis' or 'eka2'

function Routers() {
  const config = loadConfig(appName);
  const [isAuthenticated, setisAuthenticated] = useState(false);
  console.log(isAuthenticated);
  return (
    <Routes>
      <Route
        path="/"
        element={<ChatPage config={config} appName={appName} />}
      />
      <Route
        path="/login"
        element={<LoginPage setisAuthenticated={setisAuthenticated} />}
      />
      <Route
        path="/setting"
        element={<Setting config={config} appName={appName} />}
      />
    </Routes>
  );
}

export default Routers;
