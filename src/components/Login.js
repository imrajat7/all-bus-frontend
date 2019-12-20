import React,{Component} from 'react';

const formStyle = {
    background: 'orange',
    margin:'auto'
}

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <div className="container">
                <form className="col-lg-6 col-sm-10 col-md-8 mx-auto">
                    <div className="form-group">
                        <label for="username">Username</label>
                        <input type="text" className="form-control" placeholder="Enter Username"/>
                        <small className="form-text text-muted">We will never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label for="password">Password</label>
                        <input type="password" className="form-control" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" />
                    </div>
                    <button>Login</button>
                </form>
            </div>
        )
    }
}

export default Login