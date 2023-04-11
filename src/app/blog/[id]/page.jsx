import CustomTypography from "@/components/CustomTypography";
import Image from "next/image";
import React from "react";
import { notFound } from "next/navigation";

const BlogDetailsStatus = {
  OK: "ok",
  MISSING_KEYS: "missing keys",
  MISSING_DATA: "missing Data",
};

const BlogPostTemplate = {
  uid: "id",
  blogName: "title",
  thumbnail: "url",
  blogText: "context",
  datetime: "it should be date object but leave it for now",
  status: "ok",
};

async function getBlogDetails(blogId) {
  const res = await fetch("http://localhost:3000/data.json"); // TODO: replace this dummy call with a regular fetching query
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  const blogDetails = checkBlogDetailsData({
    ...data.find((blg) => blg.uid === blogId),
    status: BlogDetailsStatus.MISSING_DATA,
  });
  return blogDetails;
}

export async function generateMetadata({ params }) {
  const blog = await getBlogDetails(params.id);
  return { title: blog.blogName, description: blog.blogText.substring(0,10)}
}

// TODO: The following function logic should be moved to utility or services directory where it's logic will help 
// for other data objects
function checkBlogDetailsData(blogDetails) {
  if (blogDetails && Object.keys(blogDetails).length) {
    if (
      Object.keys(blogDetails).length !== Object.keys(BlogPostTemplate).length
    ) {
      blogDetails.status = BlogDetailsStatus.MISSING_KEYS;
      return blogDetails;
    }
    const incomingBlogDetailsKeys = Object.keys(blogDetails);
    const expectedBlogDetailsKeys = Object.keys(BlogPostTemplate);

    const hasMissingKey = incomingBlogDetailsKeys.some(
      (key) => !expectedBlogDetailsKeys.includes(key)
    );
    if (hasMissingKey) {
      return (blogDetails.status = BlogDetailsStatus.MISSING_KEYS);
    }

    if (blogDetails.blogName && blogDetails.thumbnail && blogDetails.datetime) {
      blogDetails.status = BlogDetailsStatus.OK;
      return blogDetails;
    }
  } else {
    return { status: BlogDetailsStatus.MISSING_KEYS };
  }
}

export default async function BlogDetails(props) {
  const { params } = props;

  const blogDetails = await getBlogDetails(params.id);

  if(blogDetails.status !== BlogDetailsStatus.OK)
  {
    notFound();
  }

  return (
    <div className="flex flex-col max-w-full  my-16 justify-center items-center">
      {blogDetails.status === BlogDetailsStatus.OK ? (
        <>
          <div className="flex flex-col max-w-full space-y-8 justify-center items-center ">
            <div className="">
              <Image
                width={700}
                height={200}
                alt="This is a food for pic"
                src={blogDetails.thumbnail}
              />
            </div>
            <div className="my-16 px-8 justify-center items-center">
              <CustomTypography variant="h5" component="h2">
                {blogDetails.blogName}
              </CustomTypography>
            </div>
            <div className="flex max-w-full px-8">
              <CustomTypography
                variant="body2"
                color="textSecondary"
                noWrap={false}
              >
                {blogDetails.blogText}
              </CustomTypography>
            </div>
          </div>
        </>
      ) : (
        <h1>No Blog Details</h1>
      )}
    </div>
  );
}
