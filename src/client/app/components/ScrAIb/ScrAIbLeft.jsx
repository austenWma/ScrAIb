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

  componentDidMount() {
    // Use Jquery for fading in
  }

  render() {
    return (
      <div className="recordTranscriptionContainer">
        <div className="currentTranscriptionContainer">
            <div className="currentTranscription">
                {this.props.transcription}
            </div>
        </div>
        <div className="totalTranscriptionContainer">
            {this.props.transcriptionArr.map(transcriptionItem =>
                <div className="transcriptionItem">{transcriptionItem}</div>
            )}
        </div>
      </div>
    )
  }
}

export default ScrAIbLeft;