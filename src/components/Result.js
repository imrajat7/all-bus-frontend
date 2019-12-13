import React,{Component} from 'react';
import axios from 'axios';
import bus from '../assets/bus.gif'
import no_bus_found from '../assets/no_bus.png'
import DatePicker from "react-datepicker";
import {Button, ButtonToolbar} from 'react-bootstrap';
import BookingModal from '../components/BookingModal'

const containerStyle = {
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: '3%'
}

const cardStyle = {
    border: '1px solid rgba(220,220,220)',
    margin: '8px',
    borderRadius: "0px",
    color: 'rgba(70,70,70)',
    backgroundColor: 'rgba(250,250,250)'
}

const cardBodyStyle = {
    fontSize: "20px",
    fontWeight: "400"
}

const buttonStyle = {
    float: 'right'
}

const cardTitleStyle = {
    fontSize: "25px",
    fontWeight: "550"
}

class Result extends Component{

    constructor(props){
        super(props);
        this.state = {
            source: (this.props.location.state!==undefined)?(this.props.location.state.source):(""),
            destination: (this.props.location.state!==undefined)?(this.props.location.state.destination):(""),
            date: (this.props.location.state!==undefined)?(this.props.location.state.date):(""),
            picker: (this.props.location.state!==undefined)?(this.props.location.state.picker):(Date.now()),
            buses: [],
            found: false,
            bookingModalShow: false
        }
    }

    componentDidMount(){
        axios.post('http://all-bus.herokuapp.com/search/',{
            source: this.state.source,
            destination: this.state.destination,
            date: this.state.date
        }).then(res=>{
            this.setState({
                buses: res.data.buses,
                found:true
            })
        })
    }

    handleChange = (e)=>{
        let data = e.target.value.toLowerCase();
        this.setState({ 
            [e.target.name]: data
        })
    }

    handleDateChange = (e)=>{
        if(e!=null){
            let d = e.getDate();
            let m = e.getMonth()+1;
            let y = e.getFullYear();
            let date = (d + '-' + m + '-' + y).toString();
            this.setState({
                date: date,
                picker:e
            })
        }
    }

    bookingModalClose = ()=>{
        this.setState({
            bookingModalShow: false
        })
    }

    handleBook = (id)=>{
        this.setState({
            bookingModalShow: true
        })
        alert(id);
    }

    handleModify = (e)=>{
        e.preventDefault();
        this.setState({
            found: false
        })
        axios.post('http://all-bus.herokuapp.com/search/',{
            source: this.state.source,
            destination: this.state.destination,
            date: this.state.date
        }).then(res=>{
            this.setState({
                buses: res.data.buses,
                found:true
            })
            console.log(this.state)
        })
    }

    render(){
        
        if(!this.state.found){
            return (
                <div className="conatiner" style={containerStyle}>
                    <img src={bus} alt="loading gif" style={{height:"300px", width:"auto"}}/>
                    <h2 style={{marginTop:"5%"}}>Please Wait...</h2>
                </div>
            )
        }
        else{
            const {buses} = this.state;
            const busList = buses.length ? (
                buses.map(bus=>{
                    return(
                        <div className="card" style={cardStyle} key={bus._id}>
                            <div className="card-body" style={cardBodyStyle}>
                                <span className="card-title" style={cardTitleStyle}>{bus.name}</span>
                                <button key={bus._id} className="btn btn-primary" onClick={()=>{this.handleBook(bus._id)}} style={buttonStyle}>Book</button>
                                <BookingModal show={this.state.bookingModalShow} onHide={this.bookingModalClose} />
                                &nbsp; &nbsp;
                                <br></br>
                                <span>{bus.departure}</span>
                                <span> to </span>
                                <span>{bus.arrival}</span>
                                <br></br>
                                <span> {bus.source}</span>
                                <span> to </span>
                                <span>{bus.destination}</span>
                                <br></br>
                                <span style={{fontWeight:"500",fontSize:"22px"}}>₹{bus.price}</span>
                            </div>
                        </div>
                    )
                })
        ):(
            <div className="container" style={containerStyle}>
                <img src={no_bus_found} alt="no_bus_found"></img>
            </div>
        )

        return(
            <div className="container-fluid">
                <div style={{backgroundColor:"gray",minHeight:"60px",height:"auto",width:"auto",boxSizing:"border box",translateX:""}}>
                    <form className="form-inline" onSubmit={this.handleModify}>
                        <div className="form-group">
                            <input type="text" name="source" value={this.state.source} onChange={this.handleChange} className="form-control"  placeholder="Source"/>
                        </div>
                        <div className="form-group">
                            <input type="text" name="destination" value={this.state.destination} onChange={this.handleChange} className="form-control" placeholder="Destination"/>
                        </div>
                        <div className="form-group">
                            <DatePicker selected={this.state.picker} onSelect={this.handleDateChange} onChange={this.handleDateChange} className="form-control" placeholderText="Pick date"/>
                        </div>
                        <button type="submit" className="form-control btn btn-default">Modify</button>
                    </form>
                </div>
                <div className="container">
                    {busList}
                </div>
                <p className="text-center">{this.state.buses.length} buses found</p>
            </div>
        )
        }
    }
}
export default Result