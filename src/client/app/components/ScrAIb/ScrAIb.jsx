import React, {Component} from 'react'
import {render} from 'react-dom'
import {Redirect, Link} from 'react-router-dom'

import ScrAIbMiddle from './ScrAIbMiddle.jsx'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class ScrAIb extends Component {
  constructor (props) {
    super(props)
    this.state = {
    };
  }

  render() {
    return (
      <div className="scraibParentContainer">
        <div className="scraibLeftContainer">
            Hello
        </div>
        <div className="scraibMiddleContainer">
            <ScrAIbMiddle />
        </div>
        <div className="scraibRightContainer">
            Hello3
        </div>
      </div>
    )
  }
}

export default ScrAIb;