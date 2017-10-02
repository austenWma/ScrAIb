import React, {Component} from 'react'
import {render} from 'react-dom'
import {Redirect, Link} from 'react-router-dom'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import IconButton from 'material-ui/IconButton';
import SettingsVoice from 'material-ui/svg-icons/action/settings-voice';

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
        <div className="scraibRightContainer">
            Hello3
        </div>
      </div>
    )
  }
}

export default ScrAIb;