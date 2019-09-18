import React, { Component } from 'react'
import '../App.css'

export default class Register extends Component {

    setInput = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        return (
            <div className="Login">
                <h1 className="Login-title">Register</h1>
                <p className="Register-content">Name</p>
                <input className="Login-input" 
                    name = "name"
                    onChange={(e) => {this.setInput(e)}}
                />
                <p className="Register-content">Username</p>
                <input className="Login-input" 
                    name = "username"
                    onChange={(e) => {this.setInput(e)}}
                />
                <p className="Register-content">Password</p>
                <input className="Login-input" 
                    name = "password"
                    onChange={(e) => {this.setInput(e)}}
                />
                <p className="Register-content">Confirm Password</p>
                <input className="Login-input" 
                    name = "passwordVerify"
                    onChange={(e) => {this.setInput(e)}}
                />
            </div>
        )
    }
}
