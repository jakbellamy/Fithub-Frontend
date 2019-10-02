import '../../App.css';
import * as React from 'react'
import {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router'
import {API_AT} from '../../constants.js';


class Login extends Component {

    successCheck = (res) => {
        let {
          token, user, msg, success
        } = res
        if(success){
            this.props.dispatch({type: 'LOG_IN', payload: res})
        } else {
            this.props.dispatch({type: 'USER_ERROR', payload: msg})
        }
    }

    serveData = (body) => {
        fetch(`${API_AT('login')}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
          })
          .then(res => res.json())
          .then(res => this.successCheck(res))
          .catch(err => {return err})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let body = {
          username: e.target.username.value,
          password: e.target.password.value
        }
        this.serveData(body)
      }

    render() {
        return(
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
