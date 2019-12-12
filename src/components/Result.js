import React,{Component} from 'react';
import axios from 'axios';
import bus from '../assets/bus.gif'
import no_bus_found from '../assets/no_bus.png'


class Result extends Component{
    constructor(props){
        super(props);
        this.state ={
            source: this.props.location.state.source,
            destination: this.props.location.state.destination,
            date: this.props.location.state.date,
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
    render(){
        if(!this.state.found){
            return (
                <div className="conatiner" style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",marginTop:"2%"}}>
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
                        <div className="card" key={bus._id}>
                            <div className="card-body">
                                <span className="card-title">{bus.name}</span>
                            </div>
                        </div>
                    )
                })
        ):(
            <div className="" style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",marginTop:"3%"}}>
                <img src={no_bus_found} alt="no_bus_found"></img>
            </div>
        )

        return(
            <div className="container">
                {busList}
                <p className="text-center">{this.state.buses.length} buses found</p>
            </div>
        )
        }
    }
}
export default Result