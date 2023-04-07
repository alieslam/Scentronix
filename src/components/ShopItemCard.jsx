"use client";
import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import CustomTypography from "./CustomTypography";
import Image from "next/image";
import Link from "next/link";

const styles = {
  card: {
    borderRadius: 8,
    boxShadow:
      "0px 8px 10px -5px rgba(0,0,0,0.2), 0px 16px 24px 2px rgba(0,0,0,0.14), 0px 6px 30px 5px rgba(0,0,0,0.12)",
    height: 200,
    background: "yellow",
    flexWrap: "wrap",
  },
  media: {
    objectFit: "cover",
  },
  content: {
    flex: "1 0",
    width: "min-content",
  },
};

export default function ShopItemCard({ shopItem }) {
  return (
    <div className="cursor-pointer  sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group">
      <Link href={`/${shopItem.uid}`}>
        <Image
          src={shopItem.image}
          width={200}
          height={200}
          className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
          style={{
            maxWidth: "100%",
            height: "200px",
            objectFit: "cover",
          }}
          placeholder="blur"
          blurDataURL="/spinner.svg"
          alt="image is not available"
        ></Image>
        <div className="p-2">
          <h2 className="truncate text-lg font-bold">{shopItem.name}</h2>
        </div>
      </Link>
    </div>
  );
}
