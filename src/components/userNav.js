import React, { Component } from 'react'
import '../App.css'

export default class UserNav extends Component {
    render() {
        return (
        <div className="Navbar">
            <span className="Nav-item">Workout Library</span>
            <span className="Nav-item">Set Library</span>
            <span className="Nav-item">About</span>
        </div>
        )
    }
}
