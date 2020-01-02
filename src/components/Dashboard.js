import React,{Component} from 'react';
import {Redirect} from 'react-router-dom'


class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state={
            token: this.checkForNull(this.props.location.state)
        }
    }

    checkForNull(something){
        if(something.token===undefined){
            return "";
        }else{
            return something;
        }
    }
    render(){
        if(!this.state.token){
            return <Redirect to={{pathname:'/login'}}/>
        }else{
            return(
                <div>
                    {this.state.token}
                </div>
            )
        }
    }
}

export default Dashboard;