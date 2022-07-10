import React from "react";
import { AppBar, Box, Toolbar } from "@mui/material";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";
import { WelcomeWithName } from "./WelcomeWithName";
import { SignInSignOutButton } from "./SignInSignOutButton";

export const NavBar = () => {
  return <Box sx={{ flexGrow: 1 }}>
    <AppBar position="sticky">
      <Toolbar>
        <Link component={RouterLink} to="/" color="inherit" variant="h6" sx={{ flexGrow: 1 }}>
          Graph Subscriber
        </Link>
        <WelcomeWithName />
        <SignInSignOutButton />
      </Toolbar>
    </AppBar>
  </Box>
}
