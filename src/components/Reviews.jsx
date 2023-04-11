import React from "react";
import ReviewCard from "./ReviewCard";

export default function Reviews(props) {
  const { className, reviews } = props;
  return (
    <>
      {reviews && reviews.length ? (
        <>
          {reviews.map((review, index) => {
            return <ReviewCard key={review.name + index} review={review} />;
          })}
        </>
      ) : (
        <div className="">No reviews at the moment.</div>
      )}
    </>
  );
}
