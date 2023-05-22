import React from 'react';

function MapButton() {
  const handleClick = () => {
    const address = '101 Alameda Blvd NW Albuquerque, NM 87114'; 
    const mapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}`;
    window.open(mapsUrl, '_blank');
  };

  return (
    <button onClick={handleClick}>Open Maps</button>
  );
}

export default MapButton;
