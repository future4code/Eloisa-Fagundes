import React from 'react'
import axios from 'axios'
import ListaDeCidades from './Components/ListaDeCidades'


baseUrl = "https://www.metaweather.com/api/location"
function App() {
  return (
    <div className="App">
<ListaDeCidades />
    </div>
  );
}

export default App;
