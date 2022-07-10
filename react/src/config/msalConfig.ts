import { Configuration, RedirectRequest } from "@azure/msal-browser";

export const msalConfig: Configuration = {
  auth: {
    clientId: "14b71fea-dc2b-4c8e-aaaf-b3d8e03e5054",
    authority: "https://login.microsoftonline.com/common",
    redirectUri: "https://test.test"
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: false
  }
};

export const loginRedirectRequest: RedirectRequest = {
  scopes: ["user.read"]
}
