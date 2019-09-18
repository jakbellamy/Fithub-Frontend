import React, { Component } from 'react'
import '../App.css'

export default class UserNav extends Component {
    render() {
        return (
        <div className="Navbar">
            <span className="Nav-item"
                onClick={() => this.props.select('workoutLibrary')}
            >Workout Library</span>
            <span className="Nav-item"
                onClick={() => this.props.select('setLibrary')}
            >Set Library</span>
            <span className="Nav-item"
                onClick={() => this.props.select('about')}
            >About</span>
            <span className="Nav-item">Logout</span>
        </div>
        )
    }
}
