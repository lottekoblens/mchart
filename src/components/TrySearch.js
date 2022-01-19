import React, { useRef } from "react";
import ReactDOM from "react-dom";
import Map from "../components/Map";

function TrySearch({ searchData }) {
  let textInput = React.createRef();
  const FilteredElements = (event) => {
    console.log(textInput.current.value);
    const setKeyword = textInput.current.value.toLowerCase();
    const newKeyword = setKeyword;
    searchData(newKeyword);
    ReactDOM.render(<Map />, document.getElementById("map"));
  };

  return (
    <div className="search">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <label>
        <i className="fa fa-search"></i>
      </label>
      <input type="text" ref={textInput} />
      <button onClick={FilteredElements}>Search</button>
    </div>
  );
}

export default TrySearch;
