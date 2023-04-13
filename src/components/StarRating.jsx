import React from "react";
import { Rating } from "@mui/material";

export default function StarRating({ value }) {
  return (
    <div className="flex items-center">
      <Rating name="read-only" value={value} readOnly />
      <span>{value}</span>
    </div>
  );
}
