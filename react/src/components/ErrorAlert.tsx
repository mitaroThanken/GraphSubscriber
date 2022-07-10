import React from "react";
import { Alert, AlertTitle } from "@mui/material";
import { MsalAuthenticationResult } from "@azure/msal-react";

export const ErrorAlert: React.FC<MsalAuthenticationResult> = ({ error }) => {
  return <Alert severity="error">
    <AlertTitle>
      {error ? error.message : "Unknown error"}
    </AlertTitle>
    {(error !== null) && (process.env.NODE_ENV !== "production")
      ? error.errorCode
      : ""}
  </Alert>
}
