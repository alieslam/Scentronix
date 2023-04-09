"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import CustomTypography from "./CustomTypography";
import StarRating from "./StarRating";

export default function ShopItemCard({ shopItem }) {
  return (
    <Link href={`/${shopItem.uid}`}>
      <div className="rounded-sm flex flex-row md:flex-col cursor-pointer md:max-w-xs max-w-full w-full bg-custom-brown bg-opacity-20 bg-blur-sm backdrop-filter backdrop-blur-sm">
        <div className="w-1/3 md:w-full">
          <Image
            src={shopItem.image}
            width={500}
            height={500}
            className="object-cover h-60 rounded-sm"
            placeholder="blur"
            blurDataURL="/spinner.svg"
            alt="image is not available"
          ></Image>
        </div>
        <div className="p-4 w-2/3 md:w-full">
          <CustomTypography className="truncate font-bold" variant="h2" component="h2">{shopItem.name}</CustomTypography>
          <StarRating value={shopItem.ratings}/>
          <CustomTypography className="text-gray-700 text-base h-30 leading-relaxed py-2 overflow-hidden flex-shrink" variant="body2" color="textSecondary" component="p">
           {shopItem.description}
          </CustomTypography>
          <CustomTypography className="text-right" variant="h2" color="textSecondary" component="h2">
           {shopItem.price.toFixed(2)} €
          </CustomTypography>
        </div>
      </div>
    </Link>
  );
}
