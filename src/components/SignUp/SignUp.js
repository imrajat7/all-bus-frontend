import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';

function SignUp(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleChange = (e)=>{
        let data = e.target.value.toString();

        switch(e.target.name){
            case "name":
                setName(data)
                break;
            case "email":
                setEmail(data);
                break;
            case "password":
                setPassword(data);
                break;
            default:

        }
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        //eslint-disable-next-line
        const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
        
        if(validEmailRegex.test(email)){
            if(password.length<8){
                alert("password length is less than 8");
            }else{
                // alert('ok');
                Axios.post("https://all-bus.herokuapp.com/user/signup",{
                    name: name,
                    email: email,
                    password: password,
                }).then(res=>{
                    
                }).catch(err=>{
                    // console.log(err);
                });
            }
        }else{
            alert('Email is not valid');
        }
    }

    return(
        <div className="container-fluid wrapper login-background-div">
            <div className="col-lg-4 col-sm-8 col-md-6 mx-auto card p-4">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name"><b>Name</b></label>
                            <input type="text" name="name" onChange={handleChange} className="form-control"placeholder="Enter Full Name" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email"><b>Email</b></label>
                        <input type="text" name="email" onChange={handleChange} className="form-control"placeholder="Enter Email" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password"><b>Password</b></label>
                        <input type="password" name="password" onChange={handleChange} className="form-control" placeholder="Enter Password" required/>
                    </div>

                    <div className="row" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                        <div className="wrapper" style={{marginRight: '6px'}}>
                            <button type="submit" className="btn btn-primary">SignUp</button>
                        </div>
                    </div>
                </form>
                <div className="wrapper" style={{marginTop: '10px'}}>
                        <Link to='/login'>
                            <button className="btn btn-success">Login</button>
                        </Link>
                </div>
            </div>
        </div>
    )
}

export default SignUp;