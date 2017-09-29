import React, {Component} from 'react';
import {render} from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';

import LandingPage from './LandingPage/LandingPage.jsx'
import Login from './Login/Login.jsx'

class App extends Component {
  constructor (props) {
    super()
  }

  render() {
    return (
      <div>
        <HashRouter>
          <Switch>
            <Route exact path="/" component={LandingPage}/>
            <Route exact path="/login" component={Login}/>
          </Switch>
        </HashRouter>
      </div>
    )
  }
}

export default App;
