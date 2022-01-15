import React, { useState, useEffect } from "react";
import SearchBar from "./X-SearchBar";
import CountryList from "./X-CountryList";

const SearchPage = (props) => {
  const [input, setInput] = useState("");
  const [countryListDefault, setCountryListDefault] = useState();
  const [countryList, setCountryList] = useState();

  const fetchData = async () => {
    return await fetch("../data.js").then((data) => {
      setCountryList(data);
      setCountryListDefault(data);
    });
  };

  const updateInput = async (input) => {
    const filtered = countryListDefault.filter((ingredient) => {
      return ingredient.children.name
        .toLowerCase()
        .includes(input.toLowerCase());
    });
    setInput(input);
    setCountryList(filtered);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <SearchBar input={input} onChange={updateInput} />
      <CountryList countryList={countryList} />
    </>
  );
};

export default SearchPage;
