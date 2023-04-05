"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";

function ResponsiveAppBar({children, appBarStyle, containerStyle}) {
  return (
    <AppBar {...appBarStyle}>
        {children}
    </AppBar>
  );
}
export default ResponsiveAppBar;
