import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink, Switch, Redirect } from 'react-router-dom';
import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
// import Course from './containers/Course/Course';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <nav>
            <ul>
              <li><NavLink to="/users">Users</NavLink></li>
              <li><NavLink to="/courses">Courses</NavLink></li>
            </ul>
          </nav>
          <Switch>
          <Route path="/users" component={Users} />
          <Route path="/courses" component={Courses} />
          <Redirect from="/all-courses" to="/courses" />
          <Route render={() => <h1>Ups! Page not found</h1>} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
