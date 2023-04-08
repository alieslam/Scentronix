"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ShopItemCard({ shopItem }) {
  return (
    <Link href={`/${shopItem.uid}`}>
      <div className="rounded-lg flex flex-row md:flex-col cursor-pointer md:max-w-xs max-w-full w-full bg-custom-brown bg-opacity-20 bg-blur-sm backdrop-filter backdrop-blur-sm">
        <div className="w-1/3 md:w-full">
          <Image
            src={shopItem.image}
            width={500}
            height={500}
            className="object-cover h-40 rounded-lg"
            placeholder="blur"
            blurDataURL="/spinner.svg"
            alt="image is not available"
          ></Image>
        </div>
        <div className="p-4 w-2/3 md:w-full">
          <h2 className="truncate text-lg font-bold">{shopItem.name}</h2>
          <p className="line-clamp-4 flex-wrap">descriptionasdkajsdhjashdkjasdasdasdasdasdasdjs</p>
        </div>
      </div>
    </Link>
  );
}
