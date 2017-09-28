import React, {Component} from 'react';
import {render} from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LandingPage from './LandingPage.jsx'

class App extends Component {
  constructor (props) {
    super()
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={LandingPage}/>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
