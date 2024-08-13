import { PublicClientApplication, Configuration } from "@azure/msal-browser";

const msalConfig: Configuration = {
    auth: {
        clientId: "YOUR_CLIENT_ID", 
        authority: "https://login.microsoftonline.com/YOUR_TENANT_ID", 
        redirectUri: "http://localhost:3000", 
    },
};

export const msalInstance = new PublicClientApplication(msalConfig);
