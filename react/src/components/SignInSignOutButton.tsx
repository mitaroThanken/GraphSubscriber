import React from "react";
import { InteractionStatus } from "@azure/msal-browser";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";

export const SignInSignOutButton = () => {
  const { inProgress } = useMsal();
  const isAuthenticated = useIsAuthenticated();

  if (isAuthenticated)
    return <SignOutButton />

  if ((inProgress !== InteractionStatus.Startup)
    && (inProgress !== InteractionStatus.HandleRedirect))
    return <SignInButton />

  return <></>
}
