import React, {Component} from 'react'
import {render} from 'react-dom'
import {Redirect, Link} from 'react-router-dom'

import PhysicianDashboardNavBar from './PhysicianDashboardNavBar.jsx'
import PhysicianDashboardTabs from './PhysicianDashboardTabs.jsx'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Drawer from 'material-ui/Drawer'

class Dashboard extends Component {
  constructor (props) {
    super(props)
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <PhysicianDashboardNavBar landingPage={this.props}/>
        <PhysicianDashboardTabs />
      </div>
    )
  }
}

export default Dashboard;