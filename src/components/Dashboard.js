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
                <h2>
                    Hello
                </h2>
            </div>
        )
    }
}

export default Dashboard;