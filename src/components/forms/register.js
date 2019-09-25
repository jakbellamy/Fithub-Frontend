import '../App.css';
import {React, Component} from 'react';
import {connect} from 'react-redux';
import API_AT from '.../constants.js';
import server from '.../server.js';

export default class Login extends Component {
    
    queryServer = (body) => {
        server.POST(API_AT(register), body)
        .then(res => {
            if(res.userName){
                localStorage.token = res.token,
                this.props.dispatch({type: 'LOG_IN', payload: res.username}),
                this.props.dispatch({type: 'HOME'})
            }   
        })
        .catch(error => {return error})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let body = {
            userName: e.target.username.value,
            password: e.target.password.value
        }
        this.queryServer(body)
    }

    render() {
        return (
            <div className="Login">
                <h1 className="Login-title">Login</h1>

                <form>
                <p className="Login-content">Username</p>
                <input className="Login-input" type="text" name = "username"/>
                
                <p className="Login-content">Password</p>
                <input className="Login-input" type="password" name = "password"/>
                <button className='Login-button' type="submit" name="login">Login</button>
                </form>

            </div>
        )
    }
}

export default connect()(Login)