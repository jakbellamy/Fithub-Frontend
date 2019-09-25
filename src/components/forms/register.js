import '../../App.css';
import * as React from 'react'
import {Component} from 'react';
import {connect} from 'react-redux';
import {API_AT} from '../../constants.js';
import {Redirect} from 'react-router'



class Register extends Component {
    
    successCheck = (res) => {
        console.log(res)
        if(res.success){
            localStorage.token = res.token
            this.props.dispatch({type: 'LOG_IN', payload: res.user})
        } else {
            this.props.dispatch({type: 'USER_ERROR', payload: res.msg})
        }
    }

    serveData = (body) => { 
        fetch(`${API_AT('register')}`, {
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
          name: e.target.name.value,
          username: e.target.username.value,
          password: e.target.password.value
        }
        this.serveData(body)
      }
    render() {
        let redirectOnSignup = this.props.currentUser ? (
            <Redirect to={{pathname: "/home"}} />) : null
        console.log(this.props.currentUser)
        return (
            <>
            { redirectOnSignup }
            <div className="Login">
            
                <h1 className="Login-title">Register</h1>
                {this.props.errors ? <p className="Error-message">{this.props.errors}</p> : ' '}
                <form onSubmit={e => this.handleSubmit(e)}>
                <p className="Register-content">Name</p>
                <input className="Register-input" type="text" name = "name"/>
                
                <p className="Register-content">Username</p>
                <input className="Register-input" type="text" name = "username"/>

                <p className="Register-content">Password</p>
                <input className="Register-input" type="password" name = "password"/>

                <button className='Login-button' type="submit" name="signup">Login</button>
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

export default connect(mapStateToProps)(Register)