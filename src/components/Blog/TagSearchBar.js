import React, { useState } from 'react';

const TagSearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);

  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search tags..."
      />
    </div>
  );
};

export default TagSearchBar;

