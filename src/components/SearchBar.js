import React, { useState } from "react";

const SearchBar = () => {
  const [keyword, setKeyword] = useState("");
  const BarStyling = {
    width: "20rem",
    background: "#F2F1F9",
    border: "none",
    padding: "0.5rem",
  };
  return (
    <input
      style={BarStyling}
      placeholder={"Search ingredient"}
      onChange={(e) => setKeyword(e.target.value)}
    />
  );
};

export default SearchBar;
