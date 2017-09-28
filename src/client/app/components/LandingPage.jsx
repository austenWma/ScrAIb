import React, {Component} from 'react'
import {render} from 'react-dom'

import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'

import {Tabs, Tab} from 'material-ui/Tabs'
import Slider from 'material-ui/Slider'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import SwipeableViews from 'react-swipeable-views';

class LandingPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
        slideIndex: 0,
      };
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(value) {
    this.setState({
      slideIndex: value,
    });
  };

  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect>
            <Navbar.Header>
            <Navbar.Brand>
                <a href="#">ScrAIb</a>
            </Navbar.Brand>
            <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
            <Nav>
                <NavItem eventKey={1} href="#">Link</NavItem>
                <NavItem eventKey={2} href="#">Link</NavItem>
                <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
                </NavDropdown>
            </Nav>
            <Nav pullRight>
                <NavItem eventKey={1} href="#">S I G N U P</NavItem>
                <NavItem eventKey={2} href="#">L O G I N</NavItem>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
        <MuiThemeProvider>
            <div>
                <Tabs
                    tabItemContainerStyle={{backgroundColor: 'black'}}
                    onChange={this.handleChange}
                    value={this.state.slideIndex}
                >
                    <Tab label="Tab One" value={0} />
                    <Tab label="Tab Two" value={1} />
                    <Tab label="Tab Three" value={2} />
                </Tabs>
                <SwipeableViews
                    index={this.state.slideIndex}
                    onChangeIndex={this.handleChange}
                >
                    <div>
                    <h2 style={styles.headline}>Tabs with slide effect</h2>
                    Swipe to see the next slide.<br />
                    </div>
                    <div style={styles.slide}>
                    slide n°2
                    </div>
                    <div style={styles.slide}>
                    slide n°3
                    </div>
                </SwipeableViews>
            </div>
        </MuiThemeProvider>
      </div>
    )
  }
}

export default LandingPage;

const styles = {
    headline: {
      fontSize: 24,
      paddingTop: 16,
      marginBottom: 12,
      fontWeight: 400,
    },
};