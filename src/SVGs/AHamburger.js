import React from "react";
import "./AHamburger.css"; 

const AHamburger = (props) => {

  const {isOpen} = props;


  const pathData = isOpen
    ? "M4 4l16 16m0-16L4 20"
    : "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z";

  return (
    <svg viewBox="0 0 35 35" width="55" height="55" className="hamburg">
      <path
        className={`hamburger-icon__path ${isOpen ? "is-active" : ""}`}
        fill="url(#myGradient)"
        stroke="url(#myGradient)"
        strokeWidth="2"
        strokeLinecap="round"
        d={pathData}
        />
         <defs>
    <linearGradient id="myGradient" gradientTransform="rotate(90)">
      <stop offset="0%" stop-color="#DBBA4B" />
      <stop offset="40%" stop-color="#FB492C87" />
      <stop offset="100%" stop-color="#4FA673" />
    </linearGradient>
  </defs>
    </svg>
  );
};

export default AHamburger;
