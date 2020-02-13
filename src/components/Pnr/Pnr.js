import React,{useState} from 'react';
import './Pnr.css';

function Pnr(){
    const [ticketId, setticketId] = useState("");

    return(
        <div className='pnr-outer-div container'>
            <div className="col-sm-10 col-md-8 col-lg-6 mx-auto card pnr-inner-div">
                    <h2 style={{textAlign:"center"}}>Check PNR Status</h2>
                <input type="text" className="form-control" placeholder="Enter the booking ID:"/>
                <button>Fetch</button>
            </div>

        </div>
    )
}

export default Pnr;