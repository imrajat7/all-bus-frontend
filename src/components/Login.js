import React,{useState} from 'react';
import Axios from 'axios';
import {useSelector , useDispatch} from 'react-redux';
import {signIn} from '../redux/actions/actions'
import { Redirect } from 'react-router-dom';
// import login_loading from '../assets/login_loading.gif'

function Login(){

    const [email,setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(state=>state.token);
    const [loading , setLoading] = useState(false);

    const handleChange = (e)=>{
        let data = e.target.value.toString();

        if(e.target.name==="email"){
            setEmail(data);
        }else if(e.target.name==="password"){
            setPassword(data);
        }
    }


    const handleSubmit = (e)=>{
        e.preventDefault();
        setLoading(true);
        Axios.post("https://all-bus.herokuapp.com/user/login",{
            email: email,
            password: password
        }).then(res=>{
            setLoading(false)
            if(res.data.message==='Auth successful'){
                localStorage.setItem('token',res.data.token);
                dispatch(signIn(res.data.token));
            }
        }).catch(err=>{
            setLoading(false)
            alert(err);
        })
    }


    if(isAuthenticated){
        return <Redirect to='/dashboard'/>
    }
    else if(loading)
    {
        return(
            <div>
                <h3 style={{display: 'flex',alignItems:'center',justifyContent:'center',height:'90vh'}}>Please Wait...</h3>
            </div>
        )
    }
    else{
        return(
            <div className="container-fluid login-background-div wrapper">
                <div className="col-lg-4 col-sm-8 col-md-6 mx-auto card p-4 login-form-outer-div">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email"><b>Email</b></label>
                            <input type="text" name="email" className="form-control" onChange={handleChange} placeholder="Enter Email" required/>
                            <small className="form-text text-muted">We will never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password"><b>Password</b></label>
                            <input type="password" name="password" className="form-control" onChange={handleChange} placeholder="Enter Password" required/>
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

export default Login