import React, {Component} from 'react'
import {render} from 'react-dom'
import {Redirect, Link} from 'react-router-dom'

import ScraibLeft from './ScrAIbLeft.jsx'
import ScrAIbMiddle from './ScrAIbMiddle.jsx'
import ScrAIbRight from './ScrAIbRight.jsx'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import PropTypes from 'prop-types';
import SpeechRecognition from 'react-speech-recognition'

const propTypes = {
    transcript: PropTypes.string,
    resetTranscript: PropTypes.func,
    browserSupportsSpeechRecognition: PropTypes.bool
}

class ScrAIb extends Component {
  constructor (props) {
    super(props)
    this.state = {
        transcription: '',
        transcriptionArr: [],
        listening: false,
        break: false,
    };
    this.setTranscript = this.setTranscript.bind(this)
    this.stopTranscript = this.stopTranscript.bind(this)
    this.startTranscript = this.startTranscript.bind(this)
  }

  componentWillMount() {
      this.props.abortListening();
  }

  setTranscript() {
      // The solution here is that you can use a setinterval to check if there is a pause in the conversation by seeing if the transcript is equal to the previous transcript
    let transcriptInterval = setInterval(() => {
        if (this.props.transcript === this.state.transcription && this.props.transcript !== '') {
            // When its equal to what it originally was, we want to notify INTENT OF BREAK
            // Update the total transcription array
            if (this.props.transcript !== '') {
                let capitalized = this.props.transcript[0].toUpperCase();
                this.state.transcriptionArr.push(capitalized + this.props.transcript.slice(1) + '...');
                this.state.break = true
            }
            this.props.resetTranscript();
        }
        // Otherwise, the transcript has changed and we need to update the state
        if (this.state.break) {
            this.state.break = false
        }   else {
            this.setState({
                transcription: this.props.transcript,
            })
        }

        if (!this.state.listening) {
            clearInterval(transcriptInterval);
        }
    }, 1000)
  }

  stopTranscript() {
    this.props.stopListening()
    this.setState({
        listening: false
    })
  }

  startTranscript() {
    this.props.startListening()
    this.setTranscript();
    this.setState({
        listening: true
    })
  }

  render() {
    const { transcript, resetTranscript, browserSupportsSpeechRecognition } = this.props

    if (!browserSupportsSpeechRecognition) {
        alert("Your browser doesn't support speech recognition!")
    }   else {

        return (
        <div className="scraibParentContainer">
            <div className="scraibLeftContainer">
                <ScraibLeft transcription={this.state.transcription} transcriptionArr={this.state.transcriptionArr} break={this.state.break}/>
            </div>
            <div className="scraibMiddleContainer">
                <ScrAIbMiddle record={this.startTranscript} stopRecording={this.stopTranscript}/>
            </div>
            <div className="scraibRightContainer">
                <ScrAIbRight transcriptionArr={this.state.transcriptionArr}/>
            </div>
        </div>
        )
    }
  }
}

export default SpeechRecognition(ScrAIb);