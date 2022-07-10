import React from "react";
import { NavBar } from "./NavBar";

export const PageLayout: React.FC<{ children: React.ReactNode }> = (props) => {
  return <>
    <NavBar />
    {props.children}
  </>
}
