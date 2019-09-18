import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import '../App.css'

export default class Login extends Component {

    state = {
        username: '',
        password: '',
        flash: false
    }
    setInput = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    queryAuth = (e) => {
        e.preventDefault()
        fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })  
        })
        .then(res => res.json())
        .then(res => this.props.onLogin(res))
        .then(() => this.renderRedirect())
    }

    render() {
        return (
            <div className="Login">
                <h1 className="Login-title">Login</h1>
                {this.state.flash ? <p className="Flash-warning">Wrong Username or Password</p> : null}
                <p className="Login-content">Username</p>
                <input className="Login-input" 
                    name = "username"
                    onChange={(e) => {this.setInput(e)}}
                />
                <p className="Login-content">Password</p>
                <input className="Login-input" 
                    name = "password"
                    onChange={(e) => {this.setInput(e)}}
                />
                <button className='Login-button' onClick={(e) => {this.queryAuth(e)}}>Login</button>
            </div>
        )
    }
}
