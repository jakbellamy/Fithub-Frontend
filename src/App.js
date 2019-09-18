import React, { Component } from 'react'
import './App.css';
import LoginNav from './components/loginNav';
import Header from './components/header';
import UserNav from './components/userNav';
import Login from './components/login';
import Register from './components/register';
import UserHome from './components/userHome';
import WorkoutLibrary from './components/workoutLibrary';
import SetLibrary from './components/setLibrary';
import About from './components/about';
import {BrowserRouter} from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router';


export default class App extends Component {
  state = {
    token: localStorage.getItem('token'),
    user: JSON.parse(localStorage.getItem('user')) || {}
  }

  setUserInState = (res) => {
    localStorage.setItem('token', res.token)
    localStorage.setItem('user', JSON.stringify(res.user))
    this.setState({token: res.token, user: res.user})
  }

  navClick = (selected) => {
    this.setState({view: selected})
  }

  render() {
    return (
      <div className="App">
        <Header />
        {!this.state.loggedIn ? <LoginNav select={this.navClick}/> : <UserNav select={this.navClick}/>}
        <BrowserRouter>
          <Switch>
            <Route path="/login" render={props => <Login {...props} onLogin={this.setUserInState} />} />
            <Route path="/register" render={props => <Register {...props} onSignup={this.setUserInState} />} />
            <Route path="/home" render={props => <UserHome {...props} token={this.state.token} />} />
            <Route path="/workout_lib" render={props => <WorkoutLibrary {...props} token={this.state.token} />} />
            <Route path="/set_lib" render={props => <SetLibrary {...props} token={this.state.token} />} />
            <Route path="/about" render={props => <About {...props} token={this.state.token} />} />
            <Route path="/" render={ () => <Redirect to="/login" />}/>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

