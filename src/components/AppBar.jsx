"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Collapse, Slide } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import RecipesSubBar from "./RecipesSubBar";
import { useScrollDirection } from "@/hooks/scrollHook";

function ResponsiveAppBar(props) {
  const { children, appBarStyle, route } = props;
  const scrollDirection = useScrollDirection();
  return (
    <>
      {/* <HideOnScroll {...props}> */}
      <div
        className={`sticky ${
          scrollDirection === "down" ? "-top-28" : "top-0"
        } h-28 transition-all duration-500 z-10`}
      >
        <AppBar {...appBarStyle}>{children}</AppBar>
        {route.includes("recipes") && <RecipesSubBar />}
      </div>
      {/* </HideOnScroll> */}
    </>
  );
}
export default ResponsiveAppBar;
