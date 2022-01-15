import React, { useState } from "react";
import Scroll from "./X-Scroll";
import SearchList from "./X-SearchList";

function Search({ details }) {
  const [searchField, setSearchField] = useState("");

  const filteredIngredients = details.children.filter((ingredient) => {
    return (
      ingredient.name.toLowerCase().includes(searchField.toLowerCase()) ||
      ingredient.base.toLowerCase().includes(searchField.toLowerCase())
    );
  });

  const handleChange = (event) => {
    setSearchField(event.target.value);
    console.log(searchField);
  };

  function searchList() {
    return (
      <Scroll>
        <SearchList filteredIngredients={filteredIngredients} />
      </Scroll>
    );
  }

  return (
    <section className="garamond">
      <div className="navy georgia ma0 grow">
        <h2 className="f2">Search your course</h2>
      </div>
      <div className="pa2">
        <input
          className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
          type="search"
          placeholder="Search People"
          onChange={handleChange}
        />
      </div>
      {searchList()}
    </section>
  );
}

export default Search;
