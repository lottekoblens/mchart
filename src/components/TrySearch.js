import React from 'react';
import ReactDOM from 'react-dom';
import Map from '../components/Map';

function TrySearch({ searchData }) {
  let textInput = React.createRef();
  // create a ref to store the textInput
  const FilteredElements = () => {
    const setKeyword = textInput.current.value.toLowerCase(); // use the textInput and set it to lowercase
    const newKeyword = setKeyword; // store the keyword in newKeyword
    searchData(newKeyword); // give newKeyword to searchData so it can be used in App.js
    ReactDOM.render(<Map />, document.getElementById('svg')); // rerender the chart so that the search can be executed
    // if this is not done then the search function will not work properly because the function highlightElement
    // in Map.js is only called once and needs to be called again when it has the keyword of the search input
  };

  return (
    <div className='search'>
      <link
        rel='stylesheet'
        href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
      ></link>
      <label>
        <i className='fa fa-search'></i>
      </label>
      <input type='text' ref={textInput} />
      {/* store the input in textInput so we can use it in the function FilteredElements */}
      <button onClick={FilteredElements}>SEARCH</button>
      {/* call the function FilteredElements when the button is clicked */}
    </div>
  );
}

export default TrySearch;
