import React,{Component} from 'react';
import logo from '../assets/logo.png';

class Navbar extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <a href="/#" className="navbar-brand">
                    <img src={logo} alt="all-bus-logo" height="40" width="100" style={{marginLeft: "20px"}}/>
                </a>
                <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarMenu">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarMenu">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a href="/#" className="nav-link">Users</a>
                        </li>
                        <li className="nav-item">
                            <a href="/#" className="nav-link">Profile</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar