import React, { Component } from 'react'
import '../App.css'

export default class LoginNav extends Component {
    render() {
        return (
        <div className="Navbar">
            <span className="Nav-item" onClick={() => this.props.dispatch({type: 'NAV_LOGIN'})}>
            Login
            </span>
            <span className="Nav-item" onClick={() => this.props.dispatch({type: 'NAV_SIGNUP'})}>
            Signup
            </span>
        </div>
        )
    }
}
