import React, {Component} from 'react';
import {render} from 'react-dom';

import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'

class DashboardNavBar extends Component {
  constructor (props) {
    super(props)
  }

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
                    </Nav>
                    <Nav pullRight>
                        <NavDropdown eventKey={1} title="A C C O U N T" id="basic-nav-dropdown">
                        <MenuItem eventKey={1.1}>Your Profile</MenuItem>
                        <MenuItem eventKey={1.2}>Form Templates</MenuItem>
                        <MenuItem eventKey={1.3}>Action</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={1.3}>Settings</MenuItem>
                        </NavDropdown>
                        <NavItem eventKey={2} onClick={() => {this.props.landingPage.history.push('/')}}>L O G O U T</NavItem>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default DashboardNavBar;