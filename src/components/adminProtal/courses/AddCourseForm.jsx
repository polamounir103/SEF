import React, { useState } from "react";

function AddCourseForm() {
  const [rating, setRating] = useState(-1);
  const [hoveredRating, setHoveredRating] = useState(-1);

  const handleStarHover = (index) => {
    setHoveredRating(index);
  };

  const handleStarClick = (index) => {
    setRating((prevRating) => (prevRating === index ? -1 : index));
  };

  const resetHoveredRating = () => {
    setHoveredRating(-1);
  };

  return (
    <div className="mt-5">
      <div className="rate-wrapper mx-auto">
        <>
          <ul onMouseLeave={resetHoveredRating}>
            {[...Array(5)].map((_, index) => {
              const isActive =
                index <= (hoveredRating !== -1 ? hoveredRating : rating);
              return (
                <button
                  key={index}
                  className={`star ${isActive ? "active" : ""}`}
                  onClick={() => handleStarClick(index)}
                  onMouseEnter={() => handleStarHover(index)}
                  onMouseLeave={resetHoveredRating} // Reset hover on mouse leave
                  aria-label={`Rate ${index + 1} star${index === 0 ? "" : "s"}`} // Accessibility
                >
                  ★
                </button>
              );
            })}
          </ul>
        </>
      </div>
    </div>
  );
}

export default AddCourseForm;
