import React, {PropTypes, Component} from 'react'
import {render} from 'react-dom'
import {Redirect, Link} from 'react-router-dom'

import ScraibLeft from './ScrAIbLeft.jsx'
import ScrAIbMiddle from './ScrAIbMiddle.jsx'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import SpeechRecognition from 'react-speech-recognition'

const propTypes = {
    // Props injected by SpeechRecognition
    transcript: PropTypes.string,
    resetTranscript: PropTypes.func,
    browserSupportsSpeechRecognition: PropTypes.bool
}

class ScrAIb extends Component {
  constructor (props) {
    super(props)
    this.state = {
        transcription: '',
    };
    this.setTranscript = this.setTranscript.bind(this)
  }

  setTranscript() {
    console.log('HERE')
    setInterval(() => {
        this.setState({
            transcription: this.props.transcript
        })
    }, 200)
  }

  render() {
    const { transcript, resetTranscript, browserSupportsSpeechRecognition } = this.props

    if (!browserSupportsSpeechRecognition) {
        alert("Your browser doesn't support speech recognition!")
    }   else {

        return (
        <div className="scraibParentContainer">
            <div className="scraibLeftContainer">
                <ScraibLeft transcription={this.state.transcription}/>
            </div>
            <div className="scraibMiddleContainer">
                <ScrAIbMiddle setTranscript={this.setTranscript} record={resetTranscript}/>
            </div>
            <div className="scraibRightContainer">
                Hello3
            </div>
        </div>
        )
    }
  }
}

export default SpeechRecognition(ScrAIb);