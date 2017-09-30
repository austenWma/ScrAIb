import React, {Component} from 'react';
import {render} from 'react-dom';
import { HashRouter, Route, Switch, PropsRoute } from 'react-router-dom';

import LandingPage from './LandingPage/LandingPage.jsx'
import Login from './Login/Login.jsx'
import LoginLoader from './Login/LoginLoader.jsx'

class App extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <div>
        <HashRouter>
          <Switch>
            <Route exact path="/" component={LandingPage}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/loginLoader" component={LoginLoader}/>
          </Switch>
        </HashRouter>
      </div>
    )
  }
}

export default App;
