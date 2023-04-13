"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import CustomTypography from "./CustomTypography";
import StarRating from "./StarRating";
import { CardContent } from "@mui/material";

export default function ShopItemCard({ shopItem }) {
  return (
    <Link href={`/${encodeURIComponent(shopItem.name)}/${shopItem.uid}`}>
      <div className="rounded-md flex flex-row md:flex-col cursor-pointer md:max-w-xs max-w-full w-full bg-white bg-opacity-50 bg-blur-sm backdrop-filter backdrop-blur-sm">
        <div className="w-1/3 md:w-full">
          <Image
            src={shopItem.image}
            width={500}
            height={500}
            className="object-cover h-44 sm:h-60 rounded-sm"
            placeholder="blur"
            blurDataURL="/spinner.svg"
            alt="image is not available"
          ></Image>
        </div>
        <CardContent className="p-4 w-2/3 md:w-full">
          <CustomTypography className="font-bold" variant="h3" component="h3">
            {shopItem.name}
          </CustomTypography>
          <StarRating value={shopItem.ratings} />
          <CustomTypography
            className="text-gray-700 text-base h-30 leading-relaxed py-2 overflow-hidden flex-shrink line-clamp-2 text-ellipsis"
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {shopItem.description}
          </CustomTypography>
          <CustomTypography
            className="text-right"
            variant="h2"
            color="textSecondary"
            component="h2"
          >
            {shopItem.price && shopItem.price.toFixed(2)} €
          </CustomTypography>
        </CardContent>
      </div>
    </Link>
  );
}
