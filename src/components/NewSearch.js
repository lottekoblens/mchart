import React from "react";
import { useState } from "react";
import data from "../data";

const getFilteredItems = (query, ingredient) => {
  if (!query) {
    return ingredient;
  }
  return ingredient.filter((ingredient) => ingredient.name.includes(query));
};

export default function NewSearch() {
  const [query, setQuery] = useState("");

  const { ingredients } = data;
  const { ingredient } = data.children;
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
  };

  return (
    <div className="App">
      <label>Search</label>
      <input type="text" defaultValue="" onChange={FilteredElements} />
      {filterofzo}
    </div>
  );
}
