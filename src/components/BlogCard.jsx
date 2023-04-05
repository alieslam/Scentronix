"use client";
import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import CustomTypography from "./CustomTypography";
import Image from "next/image";

const styles = {
  card: {
    display: "flex",
    marginBottom: 16,
    borderRadius: 0,
    // boxShadow:
    //   "0px 8px 10px -5px rgba(0,0,0,0.2), 0px 16px 24px 2px rgba(0,0,0,0.14), 0px 6px 30px 5px rgba(0,0,0,0.12)",
    minHeight: 400,
    maxHeight: 600,
    background: "transparent",
    flexWrap: "wrap",
  },
  media: {
    objectFit:'contain',
  },
  content: {
    flex: "1 0",
    minHeight: 300,
    maxHeight: 300,
  },
};

export default function BlogCard({ blogData }) {
  return (
    <Card style={styles.card} elevation={0}>
      {/* Switched from CardMedia to Image since Image handles the responsiveness */}
      <div className="flex justify-start items-start">
        <Image
          width={400}
          height={400}
          alt={""}
          src={blogData.thumbnail}
          style={styles.media}
          onError={(event) => event.target.removeAttribute("src")}
        />
      </div>
      <CardContent style={styles.content}>
        <CustomTypography variant="h5" component="h2">
          {blogData.blogName}
        </CustomTypography>
        <CustomTypography variant="body2" color="textSecondary" noWrap={false}>
          {blogData.blogText}
        </CustomTypography>
      </CardContent>
    </Card>
  );
}
