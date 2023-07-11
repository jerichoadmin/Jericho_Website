import React, { useState } from 'react';
import './TagSearchBar.css'
import search from '../../Assets/search.png'



const TagSearchBar = ({ tags, handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <div className='search_container'>
      <div>
      <img src={search} className='search_img' alt=''/>
      </div>
      <input
      className='search_input'
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search Blogs"
      />
    </div>
  );
};

export default TagSearchBar;
