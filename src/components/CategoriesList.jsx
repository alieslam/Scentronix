"use client";
import { Grid } from "@mui/material";
import React from "react";
import CategoryCard from "./CategoryCard";

export default function CategoriesList(props) {
  const { items } = props;
  return (
    <>
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
                <CategoryCard item={itm} />
              </Grid>
            );
          })}
      </Grid>
    </>
  );
}
