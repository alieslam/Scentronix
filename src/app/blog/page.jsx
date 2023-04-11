import BlogCard from "@/components/BlogCard";
import React from "react";

async function getBlogPosts() {
  const res = await fetch("http://localhost:3000/data.json"); // TODO: replace this dummy call with a regular fetching query
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return await res.json();
}

export default async function Blog() {
  const data = await getBlogPosts();

  return (
    <div className="sm:px-24 sm:pt-16">
      {data.map((blg) => {
        return <BlogCard key={blg.blogName} blogData={blg} />;
      })}
    </div>
  );
}
