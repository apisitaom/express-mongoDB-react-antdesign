import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import { BrowserRouter as Router } from 'react-router-dom'

import List from './components/List'
import Task from './components/Task'
import User from './components/User'
import Home from './components/Home'
import './App.css';
// import Navbar from './components/Navbar'
// import Landing from './components/Landing'
// import Login from './components/Login'
// import Register from './components/Register'
// import Profile from './components/Profile'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* <Navbar /> */}
          <Route exact path="/" component={Home} />
          <div className="container">
            <Route exact path="/task" component={Task} />
            <Route exact path="/user" component={User} />
            <Route exact path="/list" component={List}/>

            {/* <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} /> */}
          </div>
        </div>
      </Router>
    )
  }
}

export default App
