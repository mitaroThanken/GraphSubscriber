import React from "react";
import { useMsal } from "@azure/msal-react";
import { Button } from "@mui/material";
import { loginRedirectRequest } from "../config/msalConfig";

export const SignInButton = () => {
  const { instance } = useMsal();

  return <Button color="inherit" variant="outlined"
    onClick={() => instance.loginRedirect(loginRedirectRequest)}
  >
    Sign In
  </Button>
}
