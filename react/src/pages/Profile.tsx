import React from "react";
import { InteractionType } from "@azure/msal-browser";
import { MsalAuthenticationTemplate } from "@azure/msal-react";
import { Paper } from "@mui/material";
import { ErrorAlert } from "../components/ErrorAlert";
import { Loading } from "../components/Loading";
import { loginRedirectRequest } from "../config/msalConfig";

const ProfileContent = () => {
  return <Paper>
    WIP
  </Paper>
}

export const Profile = () => {
  return <MsalAuthenticationTemplate
    interactionType={InteractionType.Redirect}
    authenticationRequest={loginRedirectRequest}
    errorComponent={ErrorAlert}
    loadingComponent={Loading}
  >
    <ProfileContent />
  </MsalAuthenticationTemplate>
}
