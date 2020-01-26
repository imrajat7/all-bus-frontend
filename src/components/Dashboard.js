import React,{Component} from 'react';
import {Redirect} from 'react-router-dom'


class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state={
            token: localStorage.getItem('token'),
        }
    }

    render(){
        return(
            <div>

            </div>
        )
    }
}

export default Dashboard;