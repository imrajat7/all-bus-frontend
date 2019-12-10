import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom'
import Navbar from './components/Navbar';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Route />

      </div>
    </BrowserRouter>
  );
}

export default App;
