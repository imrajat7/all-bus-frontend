import React,{Component} from 'react';
import axios from 'axios';
import bus from '../assets/bus.gif'
import no_bus_found from '../assets/no_bus.png'
import DatePicker from "react-datepicker";

const containerStyle = {
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: '3%'
}

class Result extends Component{
    constructor(props){
        super(props);
        this.state ={
            source: this.props.location.state.source,
            destination: this.props.location.state.destination,
            date: this.props.location.state.date,
            picker: this.props.location.state.picker,
            buses: [],
            found: false
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
            if(buses.length){
                
            }
            const busList = buses.length ? (
                buses.map(bus=>{
                    return(
                        <div className="card" style={{margin:"5px"}} key={bus._id}>
                            <div className="card-body">
                                <span className="card-title">{bus.name}</span>
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