import React,{useState} from 'react';
import './Pnr.css';
import Axios from 'axios';

function Pnr(){
    const [ticketId, setticketId] = useState("");
    const [pnrId, setpnrId] = useState("")
    const [pnrEmail, setPnrEmail] = useState("");
    const [pnrDate, setpnrDate] = useState("");
    const [pnrBus, setPnrBus] = useState("");
    const [pnrStatus, setpnrStatus] = useState("")

    const handleChange = (e)=>{
        setticketId(e.target.value);
    }

    const fetchResult = async ()=>{
        if(ticketId===""){
            alert('Please enter booking id');
            return;
        }

        try{
            let raw = await Axios.get('https://cors-anywhere.herokuapp.com/http://all-bus.herokuapp.com/booking/' + ticketId);
            let data = raw.data;
            console.log(data);
            setpnrId(data.booking._id);
            setPnrEmail(data.booking.email);
            setpnrDate(data.booking.date);
            setpnrStatus('Confirmed');
            let rawdetails = await Axios.get('http://all-bus.herokuapp.com/bus/' + data.booking.busId);
            let details = rawdetails.data;
            // console.log(details);
            setPnrBus(details.bus.name);
        }catch(err){
            alert(err)
        }
    }

    return(
        <div className='pnr-outer-div container'>
            <div className="col-sm-10 col-md-8 col-lg-6 card pnr-inner-div">
                <h2 style={{textAlign:"center"}}>Check PNR Status</h2>
                <input type="text" className="form-control" onChange={handleChange} placeholder="Enter the booking ID:"/>
                <button onClick={fetchResult}>Fetch</button>
            </div> 
            <br></br> <br></br>
            <h2>PNR Status:</h2>
            <div className="card continer pnr-result">
                <h4>BookingID: {pnrId}</h4>
                <h4>Email: {pnrEmail}</h4> 
                <h4>Date: {pnrDate}</h4>
                <h4>Bus Name: {pnrBus}</h4>
                <h4>Status: {pnrStatus}</h4>
            </div>
        </div>
    )
}

export default Pnr;