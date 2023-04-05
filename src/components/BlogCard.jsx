"use client";
import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import CustomTypography from "./CustomTypography";

const styles = {
  card: {
    display: "flex",
    marginBottom: 16,
    // borderRadius: 16,
    // boxShadow:
    //   "0px 8px 10px -5px rgba(0,0,0,0.2), 0px 16px 24px 2px rgba(0,0,0,0.14), 0px 6px 30px 5px rgba(0,0,0,0.12)",
    minHeight: 400,
    maxHeight: 600,
    background: "transparent",
    flexWrap: "wrap",
  },
  media: {
    minWidth: 400,
    maxWidth: 400,
    minHeight: 400,
    maxHeight: 400,
    borderRadius: "16px 16px 16px 16px",
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
      <CardMedia
        style={styles.media}
        image={blogData.thumbnail}
        title={blogData.thumbnail}
      />
      <CardContent style={styles.content}>
        <CustomTypography gutterBottom variant="h5" component="h2">
          {blogData.blogName}
        </CustomTypography>
        <CustomTypography
          variant="body2"
          color="textSecondary"
          noWrap={false}
        >
          {blogData.blogText}
        </CustomTypography>
      </CardContent>
    </Card>
  );
}
