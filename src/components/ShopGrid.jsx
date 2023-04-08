"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import ShopItemCard from "./ShopItemCard";

export default function ShopGrid({ items }) {
  return (
    <div
      className="flex max-w-full py-10"
    >
      <Grid
        className="justify-center"
        container
        rowSpacing={{ xs: 2, sm: 4, md: 6, lg: 6 }}
        columnSpacing={{ xs: 2, sm: 4, md: 6, lg: 6 }}
      >
        {items.length &&
          items.map((itm, index) => {
            return (
              <Grid key={itm + index} item className="w-full md:w-auto">
                <ShopItemCard shopItem={itm} />
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
}
