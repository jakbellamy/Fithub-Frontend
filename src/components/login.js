import React, { Component } from 'react'
import '../App.css'

let updateElementInArray = (array, id, values) => {
	return array.map( (element) => {
		if(element.id == id){
			return { ...element, ...values }
		} else {
			return element
		}
	})
}

export default class Login extends Component {

    setUsername = (value) => {
        this.setState({username: value})
    }
    setPassword = (value) => {
        this.setState({password: value})
    }

    render() {
        return (
            <div className="Login">
                <h1 className="Login-title">Login</h1>
                <p className="Login-content">Username</p>
                <input className="Login-input" 
                    onChange={(e) => {this.setUsername(e.target.value)}}
                />
                <p className="Login-content">Password</p>
                <input className="Login-input" 
                    onChange={(e) => {this.setPassword(e.target.value)}}
                />
            </div>
        )
    }
}
