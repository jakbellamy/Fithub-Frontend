import React, { Component } from 'react'
import {connect} from 'react-redux'
import '../App.css'

export default class UserNav extends Component {
    render() {
        return (
        <div className="Navbar">
            <span className="Nav-item" onClick={() => this.props.dispatch({type: 'NAV_SET_FORM'})}>
            New Set
            </span>
            <span className="Nav-item" onClick={() => this.props.dispatch({type: 'NAV_SET_LIB'})}>
            Set Library
            </span>
            <span className="Nav-item" onClick={() => this.props.dispatch({type: 'NAV_STITCHER'})}>
            Stitcher
            </span>
            <span className="Nav-item" onClick={() => this.props.dispatch({type: 'NAV_WORKOUTS'})}>
            Workouts
            </span>
        </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      user: state.user.currentUser
    }
}

export default connect(mapStateToProps)(UserNav)