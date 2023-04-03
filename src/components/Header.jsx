import React from "react";
import MenuItem from "./MenuItem";
import { AiFillShop } from "react-icons/ai";
import { BiFoodMenu } from "react-icons/bi";
import { AiOutlineRead } from "react-icons/ai";
import { AiFillInfoCircle } from "react-icons/ai";

export default function Header() {
  return (
      <div className="flex justify-center my-6 sm:mx-auto">
        <MenuItem title="SHOP" address="/" Icon={AiFillShop} />
        <MenuItem title="RECIPES" address="/recipes" Icon={BiFoodMenu} />
        <MenuItem title="BLOG" address="/blog" Icon={AiOutlineRead} />
        <MenuItem title="ABOUT" address="/about" Icon={AiFillInfoCircle} />
      </div>
  );
}
