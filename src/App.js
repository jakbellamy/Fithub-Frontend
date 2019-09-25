import './App.css';

import React, { Component } from 'react'
import {connect} from 'react-redux'
import {history} from './history'
import { Switch, Route, Router, Redirect } from 'react-router';

import LoginNav from './components/headers/loginNav';
import Header from './components/headers/header';
import UserNav from './components/headers/userNav';
import Login from './components/forms/login';
import Register from './components/forms/register';
import UserHome from './components/userViews/userHome';
import PrivateRoute from './components/privateRoute';


class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <Header />
          {this.props.currentUser === null || this.props.currentUser === undefined ?(
            <LoginNav/>) : <UserNav/>}
          <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>

            <PrivateRoute path="/home" component={UserHome}/>
          </Switch>
        </Router>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser,
    errors: state.user.errors
  }
}

export default connect(mapStateToProps)(App)
