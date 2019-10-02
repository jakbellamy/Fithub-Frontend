import '../../App.css';
import React, { Component } from 'react'
import {connect} from 'react-redux'

class UserNav extends Component {
    render() {
      console.log(this.props)
        return (
        <div className="Navbar">
          <div className="Nav-list">
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
            <span className="Nav-item" onClick={() => {
                this.props.dispatch({type: 'LOG_OUT'})
            }}>
            Logout
            </span>
          </div>
        </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      currentUser: state.user.currentUser
    }
}

export default connect(mapStateToProps)(UserNav)
