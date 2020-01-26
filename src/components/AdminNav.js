import React,{Component} from 'react';
import logo from '../assets/logo.png';
import {Link} from 'react-router-dom'

class AdminNav extends Component{

    handleClick= (e)=>{
        localStorage.setItem('token','null');
    }
    render(){
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
                            <Link to="/" className="nav-link">AddBus</Link>
                        </li>
                        <li className="nav-item">
                            <a href="/#" className="nav-link">Logout</a>
                        </li>
                        <li className="nav-item">
                            {this.handleClick}
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default AdminNav