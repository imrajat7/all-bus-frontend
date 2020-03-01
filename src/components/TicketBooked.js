import React,{useState,useEffect} from 'react';
import ticketBooked from '../assets/ticketBooked.gif';
import {Redirect} from 'react-router-dom';

function TicketBooked(props){

    const [bookingId, setbookingId] = useState("");
    

    useEffect(()=>{
        setbookingId(555);
    },[]);

    if(bookingId===""){
        return(
            <div className="container" style={{display: 'flex',alignItems:'center', flexDirection: 'column', justifyContent:'center'}}>
                <img src={ticketBooked} alt='ticket booked gif' style={{height: '300px', width: 'auto'}}/>
                <h3>Congratulations Your ticket is booked and Your bookig Id is </h3>
                {bookingId}
            </div>
        )
    }else{
        return  <Redirect to='/'/>
    }
}

export default TicketBooked;