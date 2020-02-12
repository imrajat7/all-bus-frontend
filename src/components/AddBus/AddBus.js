import React,{useState} from 'react';
import {useSelector} from 'react-redux';
import jwt from 'jsonwebtoken';
import './AddBus.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Axios from 'axios';
import {store} from '../../index';
import { Redirect } from 'react-router-dom';

function AddBus(){

    const token = useSelector(state=>state.token);

    const decoded = jwt.decode(token);
    // console.log(decoded);

    const [name, setname] = useState("");
    const [drivernum, setdrivernum] = useState("");
    const [source, setsource] = useState("");
    const [destination, setdestination] = useState("");
    const [date, setdate] = useState("");
    const [utcdate, setutcdate] = useState(new Date());
    const [seats, setseats] = useState("");
    const [price, setprice] = useState("");
    const [departure, setdeparture] = useState("");
    const [arrival, setarrival] = useState("")

    const handleDateChange = (e)=>{
        if(e!=null){
            let d = e.getDate();
            let m = e.getMonth()+1;
            let y = e.getFullYear();
            let date = (d + '-' + m + '-' + y).toString();
            setutcdate(e);
            setdate(date);
        }
    }

    const handleChange = (e)=>{
        switch(e.target.name){
            case 'name':
                setname(e.target.value);
                break;
            case 'drivernum':
                setdrivernum(e.target.value);
                break;
            case 'source':
                setsource(e.target.value);
                break;
            case 'destination':
                setdestination(e.target.value);
                break;
            case 'seats':
                setseats(e.target.value);
                break;
            case 'price':
                setprice(e.target.value);
                break;
            case 'departure':
                setdeparture(e.target.value);
                break;
            case 'arrival':
                setarrival(e.target.value);
                break;
            default:

        }
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        Axios.post('https://all-bus.herokuapp.com/bus/',{
            name: name,
            drivernum: drivernum,
            source: source,
            destination: destination,
            date: date,
            seats: seats,
            price: price,
            departure: departure,
            arrival: arrival,
        },{headers: {'authorization': "Bearer " + token, 'Accept': 'application/json', 'Content-Type':'application/json'}})
        .then(res=>{
            if(res.data.message){
                alert('Bus created');
            }
            window.location= '/addbus';
        })
        .catch(err=>{
            console.log(err);
        })

    }
    
    if(useSelector(state=>state.token)){
        return(
            <div className="container-fluid addbus-outer-div">
                <h1 style={{textAlign:'center',marginTop: '20px'}}>Add Bus</h1>
                <div className="col-lg-8 col-sm-8 col-md-6 mx-auto card p-4">
                    <form onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                            <label htmlFor="name"><b> Bus Name</b></label>
                            <input type="text" name="name" onChange={handleChange} className="form-control" placeholder="Enter Bus Name" required/>
                            {/* <small className="form-text text-muted">We will never share your email with anyone else.</small> */}
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="password"><b>Driver Contact Number:</b></label>
                                <input type="text" name="drivernum" onChange={handleChange} className="form-control" placeholder="Enter Password" required/>
                            </div>
                        </div>
                        
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="source"><b>Source</b></label>
                                <input type="text" name="source" onChange={handleChange} className="form-control" placeholder="Enter Source" required/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="destination"><b>Destination</b></label>
                                <input type="text" name="destination" onChange={handleChange} className="form-control" placeholder="Enter Destination" required/>
                            </div>
                        </div>
    
                        <form className="form-row">
                            <div className="form-group">
                                <label htmlFor="destination"><b>Select Date:</b></label><br></br>
                                <DatePicker selected={utcdate} onSelect={handleDateChange} onChange={handleDateChange} className="form-control" placeholderText="Pick Date:"/>
                            </div>
                        </form>
                        
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="seats"><b>Seats</b></label>
                                <input type="text" name="seats" onChange={handleChange} className="form-control" placeholder="Enter Seats" required/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="email"><b>Price</b></label>
                                <input type="text" name="price" onChange={handleChange} className="form-control" placeholder="Enter Price" required/>
                            </div>
    
                        </div>
    
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="departure"><b>Departure</b></label>
                                <input type="text" name="email" onChange={handleChange} className="form-control" placeholder="Enter Departure Time" required/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="arrival"><b>Arrival</b></label>
                                <input type="text" name="email" onChange={handleChange} className="form-control" placeholder="Enter Arrival Time" required/>
                            </div>
    
                        </div>
                        
                        <div className="wrapper">
                            <button type="submit" className="btn btn-success">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }else{
        return <Redirect to="/"/>
    }
}

export default AddBus;