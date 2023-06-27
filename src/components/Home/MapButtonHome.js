import React from 'react';

function MapButtonHome() {
  const handleClick = () => {
    const address = '101 Alameda Blvd NW Albuquerque, NM 87114'; 
    const mapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}`;
    window.open(mapsUrl, '_blank');
  };

  return (
    <button onClick={handleClick} className='map_button_home'>Open Maps</button>
  );
}

export default MapButtonHome;
