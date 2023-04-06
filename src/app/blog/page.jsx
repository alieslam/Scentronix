import BlogCard from "@/components/BlogCard";
import React from "react";

async function getBlogPosts() {
  const res = await require("../../../public/data.json"); // TODO: replace this dummy call with a regular fetching query
  res.ok = true; // TODO: remove this line as it is just added for passing the response status check

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res;
}

export default async function Blog() {
  const data = await getBlogPosts();

  return (
    <div className="px-24 pt-16">
      {data.map((blg) => {
        return <BlogCard key={blg.blogName} blogData={blg} />;
      })}
    </div>
  );
}
