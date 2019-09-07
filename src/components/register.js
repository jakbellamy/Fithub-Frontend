import React, { Component } from 'react'
import '../App.css'

export default class Register extends Component {

    setName = (value) => {this.setState({name: value})}
    setUsername = (value) => {this.setState({username: value})}
    setPassword = (value) => {this.setState({password: value})}
    setPasswordVerify = (value) => {this.setState({passwordVerify: value})}

    render() {
        return (
            <div className="Login">
                <h1 className="Login-title">Register</h1>
                <p className="Register-content">Name</p>
                <input className="Register-input" 
                    onChange = {(e) => this.setName(e.target.value)}
                />
                <p className="Register-content">Username</p>
                <input className="Register-input" 
                    onChange = {(e) => this.setUsername(e.target.value)}
                />
                <p className="Register-content">Password</p>
                <input className="Register-input" 
                    onChange = {(e) => this.setPassword(e.target.value)}
                />
                <p className="Register-content">Confirm Password</p>
                <input className="Register-input" 
                    onChange = {(e) => this.setPasswordVerify(e.target.value)}
                />
            </div>
        )
    }
}
