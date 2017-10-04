import React, {Component} from 'react'
import {render} from 'react-dom'
import {Redirect, Link} from 'react-router-dom'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import IconButton from 'material-ui/IconButton';
import SettingsVoice from 'material-ui/svg-icons/action/settings-voice';

import $ from 'jquery'

class ScrAIbLeft extends Component {
  constructor (props) {
    super(props)
    this.state = {
    };
  }

  componentDidMount() {
    
  }

  render() {
    if (this.props.break) {
      // This handles the breaks that mean there is a new transcript arr item, will fade in
      $(`<div className='transcriptionItem'>${this.props.transcriptionArr[this.props.transcriptionArr.length - 1]}</div>`).hide().appendTo(".totalTranscriptionContainer").fadeIn(1000)
      return (
        <div className="recordTranscriptionContainer">
          <div className="currentTranscriptionContainer">
              <div className="currentTranscription">
                  {this.props.transcription}
              </div>
          </div>
          <div className="totalTranscriptionContainer">
          </div>
        </div>
      )
    } else {
      // This handles the breaks that mean there is NOT a new transcript arr item, the component will merely render
      return (
        <div className="recordTranscriptionContainer">
          <div className="currentTranscriptionContainer">
              <div className="currentTranscription">
                  {this.props.transcription}
              </div>
          </div>
          <div className="totalTranscriptionContainer">
            { 
              this.props.transcriptionArr.map(transcriptionItem => {
                <div className='transcriptionItem'>{transcriptionItem}</div>
              })
            }
          </div>
        </div>
      )
    }
  }
}

export default ScrAIbLeft;