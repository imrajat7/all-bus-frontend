import React,{Component} from 'react';
import Axios from 'axios';
import {Redirect} from 'react-router-dom';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
            token: "",
            redirect: false
        }
    }

    handleChange = (e)=>{
        let data = e.target.value.toString();
        this.setState({
            [e.target.name]: data
        })
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        Axios.post("https://all-bus.herokuapp.com/user/login",{
            email: this.state.email,
            password: this.state.password
        }).then(res=>{
            if(res.data.message==='Auth successful'){
                this.setState({
                    token: res.data.token,
                    redirect: true
                })
                localStorage.setItem('token',res.data.token);
            }
            // console.log(res.data);
        }).catch(err=>{
            alert('User not found!!!');
        })
    }

    render(){
        if(this.state.redirect){
            return <Redirect to={{pathname:'/dashboard',state:{
                email: this.state.email,
                token: this.state.token
            }}}/>
        }else{
            return(
                <div className="container-fluid login-background-div wrapper">
                    <div className="col-lg-4 col-sm-8 col-md-6 mx-auto card p-4 login-form-outer-div">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="email"><b>Email</b></label>
                                <input type="text" name="email" className="form-control" onChange={this.handleChange} placeholder="Enter Email" required/>
                                <small className="form-text text-muted">We will never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password"><b>Password</b></label>
                                <input type="password" name="password" className="form-control" onChange={this.handleChange} placeholder="Enter Password" required/>
                            </div>
                            
                            <div className="wrapper">
                                <button type="submit" className="btn btn-success">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            )
        }
    }
}

export default Login