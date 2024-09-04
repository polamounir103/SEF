import React from "react";
import { IoArrowUp } from "react-icons/io5";

function ScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="scroll-to-top grid place-content-center cursor-pointer" onClick={scrollToTop}>
      <IoArrowUp className="inline-block p-2 border-2 border-[#bf9b30] rounded-full" color="#f2f2f2" size={70} />
    </div>
  );
}

export default ScrollToTop;
