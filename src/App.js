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
import NewSetForm from './components/forms/newSet';


class App extends Component {


  render() {
    let { currentUser, errors, token } = this.props
    return (
      <div className="App">
        <Router history={history}>
          <Header />
          {localStorage.token === null || localStorage.token === undefined ?(
            <LoginNav/>) : <UserNav/>}
          <Switch>
            <Route path="/login">
              {localStorage.token === null || localStorage.token === undefined ? <Login/> : <Redirect to="/home" />}
            </Route>
            <Route path="/register" component={Register}/>

            <PrivateRoute path="/home" component={<UserHome/>}/>
            <PrivateRoute path="/new_set" component={<NewSetForm/>}/>
          </Switch>
        </Router>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser,
    errors: state.user.errors,
    token: localStorage.token
  }
}

export default connect(mapStateToProps)(App)
