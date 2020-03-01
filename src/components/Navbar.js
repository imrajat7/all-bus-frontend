import React from 'react';
import logo from '../assets/logo.png';
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux';
import {logOut} from '../redux/actions/actions'

function Navbar(){

    const dispatch = useDispatch();
    const isAuthenticated = useSelector(state=>state.token);
    
    const handleLogout = (e)=>{
        localStorage.removeItem('token');
        dispatch(logOut());
    }

    if(isAuthenticated){
        return(
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <Link to="/" className="navbar-brand">
                    <img src={logo} alt="all-bus-logo" height="40" width="100" style={{marginLeft: "20px"}}/>
                </Link>
                <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarMenu">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarMenu">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/dashboard" className="nav-link">Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/addbus" className="nav-link">Add Buses</Link>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }else{

        return(
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <Link to="/" className="navbar-brand">
                    <img src={logo} alt="all-bus-logo" height="40" width="100" style={{marginLeft: "20px"}}/>
                </Link>
                <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarMenu">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarMenu">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="nav-link">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/checkpnrstatus" className="nav-link">PNR Status</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contactus" className="nav-link">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar