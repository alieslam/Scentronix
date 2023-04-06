"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Slide } from "@mui/material";
import useScrollTrigger from '@mui/material/useScrollTrigger';

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function ResponsiveAppBar(props) {
  const { children, appBarStyle, containerStyle } = props
  return (
    <HideOnScroll {...props}>
      <AppBar {...appBarStyle}>{children}</AppBar>
    </HideOnScroll>
  );
}
export default ResponsiveAppBar;
