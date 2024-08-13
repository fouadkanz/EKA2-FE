import { useState, useEffect } from "react";
import { AuthenticationResult } from "@azure/msal-browser";
import { msalInstance } from "@/auth/msalConfig";

export const useMsalAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(true);

    useEffect(() => {
        msalInstance.handleRedirectPromise().then((response: AuthenticationResult | null) => {
            if (response) {
                msalInstance.setActiveAccount(response.account);
                setIsAuthenticated(true);
            }
        });
    }, []);

    const login = () => {
        msalInstance.loginRedirect();
    };

    const logout = () => {
        msalInstance.logoutRedirect();
    };

    return { isAuthenticated, login, logout };
};
