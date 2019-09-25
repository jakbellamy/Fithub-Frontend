import '../../App.css';
import * as React from 'react'
import {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router'
import {API_AT, loginErrorMsg} from '../../constants.js';
import {server, loginRequest} from '../../server.js';
import {history} from '../../history.js'
import userHome from '../userViews/userHome';

class Login extends Component {

    successCheck = (res) => {
        if(res.success){
            localStorage.token = res.token
            this.props.dispatch({type: 'LOG_IN', payload: res.user})
        } else {
            this.props.dispatch({type: 'USER_ERROR', payload: res.msg})
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let data = {
          username: e.target.username.value,
          password: e.target.password.value
        }
  
        fetch(`${API_AT('login')}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(res => this.successCheck(res))
        .catch(err => {return err})
      }

    render() {
        console.log(this.props.errors)
        let redirectOnLogin = this.props.currentUser ? (
            <Redirect to={{pathname: "/home"}} />) : null
        return (
            <>
            { redirectOnLogin }
            <div className="Login">
                <h1 className="Login-title">Login</h1>
                {this.props.errors ? <p className="Error-message">{this.props.errors}</p> : ' '}
                <form onSubmit={e => this.handleSubmit(e)}>
                    <p className="Login-content">Username</p>
                    <input className="Login-input" type="text" name = "username"/>            
                    <p className="Login-content">Password</p>
                    <input className="Login-input" type="password" name = "password"/>
                    <button className='Login-button' type="submit" name="login">Login</button>
                </form>
            </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
      currentUser: state.user.currentUser,
      errors: state.user.errors || null
    }
}

export default connect(mapStateToProps)(Login)