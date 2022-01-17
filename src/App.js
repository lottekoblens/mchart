import Map from "./components/Map";
import Search from "./components/X-Search";
import data from "./data";
import SearchPage from "./components/X-SearchPage";
import NewLegend from "./components/NewLegend";
import NewSearch from "./components/NewSearch";
import ShowTooltip from "./components/ShowTooltip";
import TrySearch from "./components/TrySearch";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  // const handlechangeSearch = (keyword) => {
  //   try {
  //     setSearch(Search);
  //   } catch (error) {}
  // };
  // handlechangeSearch("hellloooooo");

  const handlechangeSearch = (keyword) => {
    setSearch(keyword); // set selection with the value of the radiobutton that is selected
    console.log(search);
  };

  return (
    <div className="App">
      <header>
        <h1>Morphological chart</h1>
      </header>
      <div className="flex">
        <div className="chart">
          <Map searchKeyword={search} />
          <NewLegend />
        </div>
        <div className="searchField">
          <TrySearch searchData={handlechangeSearch} />
          <ShowTooltip />
        </div>
      </div>
    </div>
  );
}

export default App;
