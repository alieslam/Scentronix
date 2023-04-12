import Image from "next/image";
import Link from "next/link";
import React from "react";
import CustomTypography from "./CustomTypography";

export default function CategoryCard(props) {
  const { item } = props;
  return (
    <div className="rounded-sm flex flex-col cursor-pointer max-w-xs bg-white bg-opacity-70">
      <Link href={`/recipes/${item.key}`}>
        <div className="w-full p-2">
          <Image
            src={item.image}
            width={500}
            height={500}
            className="object-cover h-60 rounded-sm"
            placeholder="blur"
            blurDataURL="/spinner.svg"
            alt="image is not available"
          ></Image>
        </div>
        <div className="p-4 w-full">
          <CustomTypography className="font-bold" variant="h3" component="h3">
            {item.key}
          </CustomTypography>
        </div>
      </Link>
    </div>
  );
}