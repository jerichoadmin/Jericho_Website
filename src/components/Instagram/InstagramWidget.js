import React, { useEffect } from 'react';

const InstagramWidget = ({ beholdId }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://w.behold.so/widget.js";
    document.head.appendChild(script);

    return () => {
      // Cleanup: remove the script when the component unmounts
      document.head.removeChild(script);
    };
  }, []); // Empty dependency array to ensure the effect runs only once

  return <div data-behold-id={beholdId}></div>;
};

export default InstagramWidget;
