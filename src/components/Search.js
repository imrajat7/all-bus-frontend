import React,{Component} from 'react';
import '../app.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Redirect } from 'react-router-dom';

class Search extends Component{
    constructor(props){
        super(props)
        this.state ={
            source: "",
            destination: "",
            date: "",
            picker :"",
            redirect: false
        }
    }

    componentDidMount(){
        let e = new  Date();
        let d = e.getDate();
        let m = e.getMonth()+1;
        let y = e.getFullYear();
        let date = (d + '-' + m + '-' + y).toString();
        this.setState({
            date: date,
            picker:e
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

    handleSubmit = (e)=>{
        e.preventDefault();
        if(this.state.source===""||this.state.destination===""){
            alert('Source or Destination cannot be empty!')
        }else{
            this.setState({
                redirect: true
            })
            console.log(this.state);
        }
    }

    render(){
        if(this.state.redirect){
            return <Redirect to={{pathname:'/result', state:{
                source: this.state.source,
                destination: this.state.destination,
                date:this.state.date,
                picker:this.state.picker}}}/>
        }
        else{
            return(
                <div className="container text-center div-inner-bg">
                    <form className="form-inline custom" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                        <input type="text" name="source" onChange={this.handleChange} className="form-control"  placeholder="Source"/>
                        </div>
                        <div className="form-group">
                        <input type="text" name="destination" onChange={this.handleChange} className="form-control" placeholder="Destination"/>
                        </div>
                        <div className="form-group">
                            <DatePicker selected={this.state.picker} onSelect={this.handleDateChange} onChange={this.handleDateChange} className="form-control" placeholderText="Pick date"/>
                        </div>
                        <button type="submit" className="form-control btn btn-default">Fetch</button>
                    </form>
                </div>
            )
        }
    }
}

export default Search