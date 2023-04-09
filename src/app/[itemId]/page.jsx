import ShopItemDetails from "@/components/ShopItemDetails";
import React from "react";

async function getItemDetails(itemId) {
  const res = await require("../../../public/shopData.json"); // TODO: replace this dummy call with a regular fetching query
  const item = {
    ...res.find((itm) => itm.uid === itemId),
  };
  res.ok = true; // TODO: remove this line as it is just added for passing the response status check
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
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

