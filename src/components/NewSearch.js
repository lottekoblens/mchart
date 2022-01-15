import React from "react";
import { useState } from "react";
import data from "../data";

const getFilteredItems = (query, ingredient) => {
  if (!query) {
    console.log("test query");
    console.log(ingredient);
    return ingredient;
  }
  console.log("test test");
  return ingredient.filter((ingredient) => ingredient.name.includes(query));
};

export default function NewSearch() {
  const [query, setQuery] = useState("");

  const { ingredient } = data.children;
  console.log(ingredient);
  let filteredItems;

  const filterofzo = () => {
    filteredItems.filter((x) => {
      return <ul>{x.children.name.includes(query)}</ul>;
    });
  };

  const FilteredElements = (event) => {
    console.log("hoi", event.target.value);
    const filteredItems = getFilteredItems(event.target.value, ingredient);
    console.log(filteredItems);
    setQuery(filteredItems);
    filterofzo();
  };

  return (
    <div className="App">
      <label>Search</label>
      <input type="text" defaultValue="" />
      <button type="submit" onClick={FilteredElements}>
        Search
      </button>
    </div>
  );
}
