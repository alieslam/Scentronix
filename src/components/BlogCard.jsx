"use client";
import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import CustomTypography from "./CustomTypography";
import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ blogData }) {
  return (
    <Link
      href={`/blog/${encodeURIComponent(blogData.blogName)}/${blogData.uid}`}
    >
      <Card
        className="flex flex-wrap sm:max-w-full lg:h-80 mb-4  bg-white bg-opacity-50"
        elevation={0}
      >
        <Image
          width={1024}
          height={768}
          alt={""}
          src={blogData.thumbnail}
          className="sm:max-w-full md:object-cover md:object-center lg:max-w-sm lg:max-h-full"
          onError={(event) => event.target.removeAttribute("src")}
        />
        <CardContent className="flex-1">
          <h3>{blogData.blogName}</h3>
          <p className="hidden sm:block max-h-48 md:max-h-36">
            {blogData.blogText}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
