import React from 'react';
import './Search.css';

const Search = ({onInputChange, search}) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for a Movie..."
        className="search"
        onChange={onInputChange}
        onKeyPress={search}
      />
    </div>
  );
}

export default Search;