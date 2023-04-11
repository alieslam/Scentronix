import ShopItemDetails from "@/components/ShopItemDetails";
import React from "react";

async function getItemDetails(itemId) {
  const res = await fetch("http://localhost:3000/shopData.json"); // TODO: replace this dummy call with a regular fetching query
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  const item = {
    ...data.find((itm) => itm.uid === itemId),
  };
  return item;
}

export async function generateMetadata({ params }) {
  const product = await getItemDetails(params.itemId);
  return { title: product.name, description: product.name }
}

export default async  function ShopItem(props) {
  const {params} = props;
  const shopItem =await  getItemDetails(params.itemId);
  return (
   <ShopItemDetails item={shopItem}/>
  );
}

