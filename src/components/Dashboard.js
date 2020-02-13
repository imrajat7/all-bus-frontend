import React from 'react';
import {Redirect} from 'react-router-dom'
import { useSelector } from 'react-redux';


function Dashboard(){

    const isAuthenticated = useSelector(state=> state.token);

    if(!isAuthenticated){
        return(
            <Redirect to="/login" />
        )
    }else{
        return(
            <div>
                I m Dashboard
            </div>
        )
    }
}

export default Dashboard;