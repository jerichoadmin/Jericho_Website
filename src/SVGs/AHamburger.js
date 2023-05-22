import React, { useState } from "react";
import "./AHamburger.css"; 

const AHamburger = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const pathData = isClicked
    ? "M4 4l16 16m0-16L4 20"
    : "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z";

  return (
    <svg viewBox="0 0 24 24" width="24" height="24" onClick={handleClick}>
      <path
        className={`hamburger-icon__path ${isClicked ? "is-active" : ""}`}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        d={pathData}
        />
    </svg>
  );
};

export default AHamburger;
