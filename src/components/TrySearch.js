import React from "react";

function TrySearch() {
  const FilteredElements = (event) => {
    console.log("hoi", event.target.value);
  };

  return (
    <div className="App">
      <label>Search</label>
      <input type="text" onChange={FilteredElements} />
    </div>
  );
}

export default TrySearch;
