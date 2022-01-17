import React from "react";

function TrySearch({ searchData }) {
  const FilteredElements = (event) => {
    const setKeyword = event.target.value;
    searchData(setKeyword);
  };

  return (
    <div className="search">
      <label>Search</label>
      <input type="text" onChange={FilteredElements} />
    </div>
  );
}

export default TrySearch;
