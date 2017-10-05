import React, {Component} from 'react'
import {render} from 'react-dom'
import {Redirect, Link} from 'react-router-dom'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

import $ from 'jquery'

class ScrAIbRight extends Component {
  constructor (props) {
    super(props)
    this.state = {
    };
  }

  componentDidMount() {
    
  }

  render() {
    return (
        <div className="scraibFormContainer">
            <Paper style={{height: '100%', width: '100%'}} zDepth={2}>
                <div>
                    <div>
                    </div>
                    <div>
                    </div>
                </div>
            </Paper>
        </div>
    )
  }
}

export default ScrAIbRight;