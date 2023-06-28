import React, { useState } from 'react';

const TagSearchBar = ({ tags, handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    handleSearch(e.target.value);
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
