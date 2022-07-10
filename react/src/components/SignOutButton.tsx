import React, { useState } from "react";
import { useMsal } from "@azure/msal-react";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";

export const SignOutButton = () => {
  const { instance } = useMsal();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleSignOut = () => {
    setAnchorEl(null);
    instance.logoutRedirect({
      postLogoutRedirectUri: "/"
    });
  }

  return <>
    <Button
      id="avatar-button"
      aria-controls={open ? "avatar-menu" : undefined}
      aria-haspopup="true"
      aria-expanded={open ? true : undefined}
      onClick={(ev) => open ? setAnchorEl(null) : setAnchorEl(ev.currentTarget)}>
      <Avatar />
    </Button>
    <Menu
      id="avatar-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={() => setAnchorEl(null)}
      MenuListProps={{
        "aria-labelledby": "avatar-button"
      }}
    >
      <MenuItem onClick={handleSignOut}>
        Sign Out
      </MenuItem>
    </Menu>
  </>
}
