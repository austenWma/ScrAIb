import React, {Component} from 'react'
import {render} from 'react-dom'
import {Redirect, Link} from 'react-router-dom'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import IconButton from 'material-ui/IconButton';
import SettingsVoice from 'material-ui/svg-icons/action/settings-voice';

class ScrAIbMiddle extends Component {
  constructor (props) {
    super(props)
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <div className="scraibMiddleBorderContainer">
        </div>
        <div className="scraibRecordButtonContainer">
            <div className="scraibRecordButtonCircleContainer">
                <IconButton iconStyle={{width: '100%', height: '70%', color: '#78e3fd'}} style={{width: '100%', height: '100%'}}>
                    <SettingsVoice />
                </IconButton>
            </div>
        </div>
        <div className="scraibMiddleBorderContainer">
        </div>
      </div>
    )
  }
}

export default ScrAIbMiddle;