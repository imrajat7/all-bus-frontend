import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Result from './components/Result';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/result' component={Result}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
