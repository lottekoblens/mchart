import React from "react";
import Card from "./X-Card";

function SearchList({ filteredIngredients }) {
  const filtered = filteredIngredients.map((ingredient) => (
    <Card key={ingredient.children.name} ingredient={ingredient} />
  ));
  return <div>{filtered}</div>;
}

export default SearchList;
