import '../../App.css';
import * as React from 'react'
import {Component} from 'react';
import {connect} from 'react-redux';
import {API_AT, loginErrorMsg} from '../../constants.js';
import {server, loginRequest} from '../../server.js';

class Login extends Component {
    handleSubmit = (e) => {
        e.preventDefault()
        let body = {
            username: e.target.username.value,
            password: e.target.password.value
        }
        fetch(API_AT('login'), {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        .then(res => res.json)
        .then(res => localStorage.setItem('token', res.token))
        .then(res => this.props.dispatch({type: 'LOG_IN', payload: body.username}))
        .then(res => this.props.dispatch({type: 'HOME'}))
        .then(console.log)
    }

    render() {
        return (
            <div className="Login">
                <h1 className="Login-title">Login</h1>
                <form onSubmit={e => this.handleSubmit(e)}>
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