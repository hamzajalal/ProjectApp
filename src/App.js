import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/layoutComponents/Navbar';
import Dashboard from './components/dashboardComponents/Dashboard';
import ProjectDetails from './components/projectsComponents/ProjectDetails';
import SignIn from './components/authenticationComponents/SignIn';
import SignUp from './components/authenticationComponents/SignUp';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
              <Route exact path='/' component={Dashboard} />
              <Route path='/project/:id' component={ProjectDetails} />
              <Route path='/signin' component={SignIn} />
              <Route path='/signup' component={SignUp} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
