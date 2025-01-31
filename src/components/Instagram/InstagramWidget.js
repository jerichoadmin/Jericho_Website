import React, { useEffect } from 'react';

const InstagramWidget = ({ beholdId }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://w.behold.so/widget.js";
    document.head.appendChild(script);

    return () => {
     
      document.head.removeChild(script);
    };
  }, []); 

  return <div data-behold-id={beholdId}></div>;
};

export default InstagramWidget;
