import React, {Component} from 'react'
import {render} from 'react-dom'
import {Redirect, Link} from 'react-router-dom'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import IconButton from 'material-ui/IconButton';
import SettingsVoice from 'material-ui/svg-icons/action/settings-voice';

import { ScaleLoader } from 'react-spinners';

class ScrAIbMiddle extends Component {
  constructor (props) {
    super(props)
    this.state = {
      listening: false
    };
    this.startRecord = this.startRecord.bind(this)
    this.stopRecord = this.stopRecord.bind(this)
  }

  startRecord() {
    this.props.record();
    this.props.setTranscript();
    setTimeout(() => {
      this.setState({
        listening: true
      })
    }, 450)
  }

  stopRecord() {
    this.props.stopRecording();
    this.setState({
      listening: false
    })
  }

  render() {
    if (!this.state.listening) {
      return (
        <div>
          <div className="scraibMiddleBorderContainer">
          </div>
          <div className="scraibRecordButtonContainer">
              <div className="scraibRecordButtonCircleContainer">
                  <IconButton iconStyle={{width: '100%', height: '70%', color: '#78e3fd'}} style={{width: '100%', height: '100%'}} onClick={this.startRecord}>
                      <SettingsVoice />
                  </IconButton>
              </div>
          </div>
          <div className="scraibMiddleBorderContainer">
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <div className="scraibMiddleBorderContainer">
          </div>
          <div className="scraibRecordButtonContainer">
              <div className="scraibRecordButtonCircleContainer">
                <div className="scraibRecordLoader" onClick={this.stopRecord}>
                  <ScaleLoader 
                      color="#78e3fd"
                      height="100"
                      width="20"
                      loading={true}
                  />
                </div>
              </div>
          </div>
          <div className="scraibMiddleBorderContainer">
          </div>
      </div>
      )
    }
  }
}

export default ScrAIbMiddle;