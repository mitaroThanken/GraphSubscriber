import React, { useEffect, useState } from "react";
import { useMsal, useAccount } from "@azure/msal-react";
import { Typography } from "@mui/material";

export const WelcomeWithName = () => {
  const { accounts } = useMsal();
  const account = useAccount(accounts[0] || {});

  const [name, setName] = useState("");

  useEffect(() => {
    if (account && account.name) {
      setName(account.name);
    } else {
      setName("");
    }
  }, [account]);

  return name !== ""
  ? <Typography variant="h6">Welcome, {name}</Typography>
  : <></>
}
