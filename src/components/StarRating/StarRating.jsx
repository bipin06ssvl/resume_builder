/* eslint-disable react/prop-types */
import React, { useState } from "react";

const StarRating = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(5);

  return (
    <div className="flex gap-1">
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <span
            key={index}
            onClick={() => setRating(starValue)}
            className={`cursor-pointer text-[28px] ${
              starValue <= rating ? "text-[#0096ff]" : "text-gray-400"
            }`}
          >
            ★
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
