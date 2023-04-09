import React from "react";
import CustomTypography from "./CustomTypography";
import StarRating from "./StarRating";

export default function ReviewCard(props) {
  const { review } = props;
  return (
    <div className="px-8 mb-4">
      <div className="flex space-x-2">
        <CustomTypography variant="h3" component="h3" color="textSecondary">
          {review.name}
        </CustomTypography>
        <StarRating value={review.rating} />
      </div>
      <div className="px-8">
        <CustomTypography variant="body2" component="p" className="text-gray-700 text-base h-30 leading-relaxed py-2">
          {review.reviewText}
        </CustomTypography>
      </div>
    </div>
  );
}
