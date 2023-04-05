import ResponsiveAppBar from "@/components/AppBar";
import RecipesSubBar from "@/components/RecipesSubBar";
import React from "react";

export default function Recipes() {
  return (
    <>
        <ResponsiveAppBar
          appBarStyle={{ position: "sticky", elevation: 0, sx: {  backgroundColor: '#FD5757' } }}
        >
          <RecipesSubBar />
        </ResponsiveAppBar>
        <div>Recipe</div>
    </>
  );
}
