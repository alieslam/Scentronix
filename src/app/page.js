import Image from "next/image";
import { Inter } from "next/font/google";
import * as React from "react";
import ShopGrid from "@/components/ShopGrid";

const inter = Inter({ subsets: ["latin"] });

async function getShopItems() {
  const res = await fetch("http://localhost:3000/shopData.json", {
    cache: "no-cache",
  }); // TODO: replace this dummy call with a regular fetching query

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return await res.json();
}

export default async function Home() {
  const items = await getShopItems();
  return <ShopGrid items={items} />;
}
