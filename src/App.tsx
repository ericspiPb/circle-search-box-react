import React from 'react';

import './App.css';
import CircleSearchBox from './components/circle-search-box/circle-search.component';

function App() {
  function handleSearch(value: string) {
    console.log(value + ' clicked');
  }

  return (
    <div className="App">
      <CircleSearchBox onSearch={handleSearch}/>
    </div>
  );
}

export default App;
