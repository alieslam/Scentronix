"use client";
import { Grid } from "@mui/material";
import React from "react";
import RecipeCard from "./RecipeCard";

export default function RecipesGrid(props) {
  const { items, categoryId } = props;
  return (
    <div className="flex flex-col pt-28 space-x-4 h-screen">
      <Grid
        className="w-screen justify-center items-center"
        container
        rowSpacing={{ xs: 2, sm: 4, md: 6, lg: 6 }}
        columnSpacing={{ xs: 2, sm: 4, md: 6, lg: 6 }}
      >
        {items.length &&
          items.map((itm, index) => {
            return (
              <Grid key={itm + index} item>
                <RecipeCard item={itm} categoryId={categoryId} />
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
}
