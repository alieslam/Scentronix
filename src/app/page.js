import Image from "next/image";
import { Inter } from "next/font/google";
import * as React from "react";
import ShopGrid from "@/components/ShopGrid";

const inter = Inter({ subsets: ["latin"] });

async function getShopItems() {
  const res = await require("../../public/shopData.json"); // TODO: replace this dummy call with a regular fetching query
  res.ok = true; // TODO: remove this line as it is just added for passing the response status check

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res;
}

export default async function Home() {
  const items = await getShopItems();
  return <ShopGrid items={items} />;
}
