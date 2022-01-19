import Map from "./components/Map";
import NewLegend from "./components/NewLegend";
import ShowTooltip from "./components/ShowTooltip";
import TrySearch from "./components/TrySearch";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");

  const handlechangeSearch = (keyword) => {
    setSearch(keyword); // set selection with the value of the radiobutton that is selected
    console.log(keyword);
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
        </div>
      </div>
    </div>
  );
}

export default App;
