import Map from "./components/Map";
import Legend from "./components/Legend";
import Search from "./components/Search";
import data from "./data";
import SearchPage from "./components/SearchPage";
import NewLegend from "./components/NewLegend";
import NewSearch from "./components/NewSearch";

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
          <NewSearch />
        </div>
      </div>
      {/* <div className="tc bg-green ma0 pa4 min-vh-100">
      <Search details={data}/>
    </div> */}
    </div>
  );
}

export default App;
