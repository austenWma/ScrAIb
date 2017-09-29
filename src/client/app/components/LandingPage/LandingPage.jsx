import React, {Component} from 'react'
import {render} from 'react-dom'
import {Redirect, Link} from 'react-router-dom'

import LandingNavBar from './LandingNavBar.jsx'
import LandingTabs from './LandingTabs.jsx'

import Login from '../Login/Login.jsx'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Drawer from 'material-ui/Drawer'

class LandingPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
        open: false,
      };
    this.handleToggleLogin = this.handleToggleLogin.bind(this)
  }

  handleToggleLogin() {
      this.setState({open: !this.state.open})
  }

  render() {
    return (
      <div>
        <LandingNavBar handleToggleLogin={this.handleToggleLogin}/>
        <LandingTabs />
        <MuiThemeProvider>
        <div>
            <Drawer docked={false} width="30%" openSecondary={true} open={this.state.open} onRequestChange={(open) => this.setState({open})}>
                <Login />
            </Drawer>
        </div>
        </MuiThemeProvider>
      </div>
    )
  }
}

export default LandingPage;