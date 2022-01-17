import Map from "./components/Map";
import Search from "./components/X-Search";
import data from "./data";
import SearchPage from "./components/X-SearchPage";
import NewLegend from "./components/NewLegend";
import NewSearch from "./components/NewSearch";
import ShowTooltip from "./components/ShowTooltip";
import TrySearch from "./components/TrySearch";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Morphological chart</h1>
      </header>
      <div className="flex">
        <div className="chart">
          <Map />
          <NewLegend />
        </div>
        <div className="searchField">
          {/* <NewSearch /> */}
          <TrySearch />
          <ShowTooltip />
        </div>
      </div>
      {/* <div className="tc bg-green ma0 pa4 min-vh-100">
      <Search details={data}/>
    </div> */}
    </div>
  );
}

export default App;
