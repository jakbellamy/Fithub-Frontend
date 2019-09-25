import React, { Component } from 'react'
import '../App.css'

export default class UserHome extends Component {
    
    state = {
        user: {}
    }

    componenetDidMount(){
        fetch('http://localhost:5000/users', {
            headers: {
                'X-Auth-Token': this.props.token
            }
        })
        .then(res => res.json())
        .then(user => this.setState({user}))
    }
    render() {
        return (
            <div className="User-div">
                <h1 className ="User-home">Welcome {this.state.user.name}</h1>
            </div>
        )
    }
}
