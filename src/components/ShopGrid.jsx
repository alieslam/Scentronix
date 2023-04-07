"use client";
import Image from "next/image";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import ShopItemCard from "./shopItemCard";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  width: 50,
  height: 50,
}));

export default function ShopGrid({ items }) {
  return (
    <Box
      sx={{
        width: "100%",
        padding: 8,
      }}
    >
      <Grid container rowSpacing={6} columnSpacing={{ xs: 2, sm: 4, md: 6 }}>
        {items.length &&
          items.map((itm, index) => {
            return (
              <Grid key={itm.name + index} item sx={8}>
                <ShopItemCard shopItem={itm} />
              </Grid>
            );
          })}
      </Grid>
    </Box>
  );
}
