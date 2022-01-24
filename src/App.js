import Map from './components/Map';
import NewLegend from './components/NewLegend';
import TrySearch from './components/TrySearch';
import Intro from './components/Intro';
import { useState } from 'react';

function App() {
  const [search, setSearch] = useState('');

  const handlechangeSearch = (keyword) => {
    setSearch(keyword); // set selection with the value of the radiobutton that is selected
  };

  return (
    <div className='App'>
      <header>
        <h1>MORPHOLOGICAL CHART FOR FUTURE BUILDERS</h1>
        <h3>
          Toolkit to find substitutes and understand where ingredients can be
          found to create new recipes
        </h3>
      </header>
      <Intro />
      <div className='flex'>
        <div className='chart'>
          <Map searchKeyword={search} />
        </div>
        <div className='searchField'>
          <TrySearch searchData={handlechangeSearch} />
        </div>
      </div>
      <NewLegend />
      <footer>
        <p>COPYRIGHT 2022 LOTTE KOBLENS, ZARA SCHRIEVER, LISA NIJMAN</p>
      </footer>
    </div>
  );
}

export default App;
