import '../../App.css';
import React, { Component } from 'react'
import {connect} from 'react-redux'

class LoginNav extends Component {
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

const mapStateToProps = state => {
    return {
      user: state.user.currentUser
    }
}

export default connect(mapStateToProps)(LoginNav)