import React, {Component} from 'react'
import {render} from 'react-dom'
import {Redirect, Link} from 'react-router-dom'

import LandingNavBar from './LandingNavBar.jsx'
import LandingTabs from './LandingTabs.jsx'

import Login from '../Login/Login.jsx'
import Signup from '../Signup/Signup.jsx'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Drawer from 'material-ui/Drawer'

class LandingPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
        loginOpen: false,
        signupOpen: false,
      };
    this.handleToggleLogin = this.handleToggleLogin.bind(this)
    this.handleToggleSignup = this.handleToggleSignup.bind(this)
  }

  handleToggleLogin() {
      this.setState({loginOpen: !this.state.loginOpen})
  }

  handleToggleSignup() {
    this.setState({signupOpen: !this.state.signupOpen})
  } 

  render() {
    return (
      <div>
        <LandingNavBar handleToggleLogin={this.handleToggleLogin} handleToggleSignup={this.handleToggleSignup}/>
        <LandingTabs />
        <MuiThemeProvider>
        <div>
            <Drawer docked={false} width="30%" openSecondary={true} open={this.state.loginOpen} onRequestChange={(loginOpen) => this.setState({loginOpen})}>
                <Login />
            </Drawer>
            <Drawer docked={false} width="30%" openSecondary={true} open={this.state.signupOpen} onRequestChange={(signupOpen) => this.setState({signupOpen})}>
                <Signup />
            </Drawer>
        </div>
        </MuiThemeProvider>
      </div>
    )
  }
}

export default LandingPage;