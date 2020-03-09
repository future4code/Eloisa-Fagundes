import React from 'react'
import axios from 'axios'
import ListaDeCidades from './Components/ListaDeCidades'



const baseUrl = "https://www.metaweather.com//api/location/(woeid)/(date)/"

function App() {
  return (
    <div className="App">
<ListaDeCidades />
    </div>
  );
}

export default App;
