  import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Result from './components/Result';
import Login from './components/Login';
import Dashboard from './components/Dashboard'
import AddBus from './components/AddBus/AddBus';
import TicketBooked from './components/TicketBooked';
import CheckPnrStatus from './components/Pnr/Pnr';
import ContactUs from './components/ContactUs/ContactUs'
import NotFound from './components/NotFound/NotFound'
import SignUp from '../src/components/SignUp/SignUp';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/result' component={Result}/>
            <Route path='/login' component={Login}/>
            <Route path='/dashboard' component={Dashboard}/>
            <Route path='/addbus' component={AddBus}/>
            <Route path='/ticketBooked' component={TicketBooked} />
            <Route path='/checkpnrstatus' component={CheckPnrStatus}/>
            <Route path='/contactus' component={ContactUs}/>
            <Route path='/signup' component={SignUp}/>
            <Route component={NotFound} />
          </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;
