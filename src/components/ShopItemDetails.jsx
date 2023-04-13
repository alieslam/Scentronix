"use client";
import Image from "next/image";
import React from "react";
import CustomTypography from "./CustomTypography";
import StarRating from "./StarRating";
import { Button } from "@mui/material";
import Reviews from "./Reviews";

export default function ShopItemDetails({ item }) {
  return (
    <div>
      <div className="flex flex-wrap md:flex-nowrap">
        <div className="px-8 pt-10 ">
          <Image
            width={1024}
            height={500}
            alt="This is a food for pic"
            src={item.image}
            className="max-w-full lg:max-w-lg"
          />
        </div>
        <div className="flex flex-col justify-between md:mr-8 px-8 pt-10 w-screen  md:whitespace-normal bg-white bg-opacity-50 mt-10 bg-opacity-30 rounded-md">
          <div>
            <CustomTypography
              variant="h2"
              className="truncate font-bold"
              component="h2"
            >
              {item.name}
            </CustomTypography>
            <StarRating value={item.ratings} />
            <CustomTypography
              className="text-gray-700 text-base h-30 leading-relaxed py-2"
              variant="body2"
              color="textSecondary"
              component="p"
            >
              {item.description}
            </CustomTypography>
            <CustomTypography
              className="text-right"
              variant="h2"
              color="textSecondary"
              component="h2"
            >
              {item.price && item.price.toFixed(2)} €
            </CustomTypography>
          </div>
          <div className="flex w-1/3 my-8 justify-center self-end">
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                alert("clicked");
              }}
              disabled={!item.stock}
              fullWidth
              className="bg-custom-brown"
            >
              Buy
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-white bg-opacity-50 mt-8 md:m-8 p-8 space-y-8 rounded-md">
        <CustomTypography variant="h2" color="textSecondary" component="h2">
          Reviews
        </CustomTypography>
        <Reviews reviews={item.reviews} className="px-8" />
      </div>
    </div>
  );
}
