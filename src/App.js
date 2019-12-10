import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import Navbar from './components/Navbar';
import Search from './components/Search';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Search/>
      </div>
    </BrowserRouter>
  );
}

export default App;
