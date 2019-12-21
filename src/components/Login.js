import React,{Component} from 'react';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <div className="container-fluid login-background-div wrapper">
                <div className="col-lg-4 col-sm-8 col-md-6 mx-auto card p-4 login-form-outer-div">
                    <form>
                        <div className="form-group">
                            <label for="username"><b>Username</b></label>
                            <input type="text" className="form-control" placeholder="Enter Username"/>
                            <small className="form-text text-muted">We will never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label for="password"><b>Password</b></label>
                            <input type="password" className="form-control" placeholder="Enter Password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" />
                        </div>
                        
                        <div className="wrapper">
                            <button className="btn btn-success">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login