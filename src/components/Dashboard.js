import React from 'react';
import {Redirect} from 'react-router-dom'
import { useSelector } from 'react-redux';
import AddBus from './AddBus/AddBus';


function Dashboard(){

    const isAuthenticated = useSelector(state=> state.token);

    if(!isAuthenticated){
        return(
            <Redirect to="/login" />
        )
    }else{
        return(
            <div>
                <AddBus />
            </div>
        )
    }
}

export default Dashboard;