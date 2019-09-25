import './App.css';

import React, { Component } from 'react'
import {BrowserRouter} from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router';

import LoginNav from './components/loginNav';
import Header from './components/header';
import UserNav from './components/userNav';
import Login from './components/login';
import Register from './components/register';
import UserHome from './components/userHome';
import WorkoutLibrary from './components/workoutLibrary';
import SetLibrary from './components/setLibrary';
import About from './components/about';


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {this.props.user === null ? <LoginNav/> : <UserNav/>}
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

