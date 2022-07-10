import React from "react";
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export const Home = () => {
  return <>
    <UnauthenticatedTemplate>
      <Typography variant="body1">
        Please sign in.
      </Typography>
    </UnauthenticatedTemplate>
    <AuthenticatedTemplate>
      <Button component={Link} to="/profile" variant="contained" color="primary">
        Request Profile Information
      </Button>
    </AuthenticatedTemplate>
  </>
}
