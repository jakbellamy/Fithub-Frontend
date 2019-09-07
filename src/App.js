import React, { Component } from 'react'
import './App.css';
import LoginNav from './components/loginNav';
import Header from './components/header';
import UserNav from './components/userNav';
import Login from './components/login';
import Register from './components/register';


export default class App extends Component {
  state = {
    loggedIn: false,
    view: null
  }

  navClick = (selected) => {
    this.setState({view: selected})
  }

  view = (view) => {
    switch(view){
      case 'login':
        return <Login/>
      case 'register':
        return <Register />
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        {!this.state.loggedIn ? <LoginNav select={this.navClick}/> : <UserNav select={this.navClick}/>}
        {this.view(this.state.view)}
      </div>
    )
  }
}

