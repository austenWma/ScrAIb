import React, {Component} from 'react'
import {render} from 'react-dom'
import {Redirect, Link} from 'react-router-dom'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import IconButton from 'material-ui/IconButton';
import SettingsVoice from 'material-ui/svg-icons/action/settings-voice';

class ScrAIbLeft extends Component {
  constructor (props) {
    super(props)
    this.state = {
    };
  }

  render() {
    return (
      <div>
        {this.props.transcription}
      </div>
    )
  }
}

export default ScrAIbLeft;