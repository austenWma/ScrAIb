import React, {Component} from 'react'
import {render} from 'react-dom'
import {Redirect, Link} from 'react-router-dom'

import ScraibLeft from './ScrAIbLeft.jsx'
import ScrAIbMiddle from './ScrAIbMiddle.jsx'

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
        break: false,
    };
    this.setTranscript = this.setTranscript.bind(this)
  }

  componentWillMount() {
      this.props.abortListening();
  }

  setTranscript() {
      // The solution here is that you can use a setinterval to check if there is a pause in the conversation by seeing if the transcript is equal to the previous transcript
    console.log('HERE')
    setInterval(() => {
        if (this.props.transcript === (this.state.transcription - '. ')) {
            console.log('ITS NEVER GETTING HERE')
            this.setState({
                break: true
            })
        }   else {
            if (this.state.break) {
                this.props.resetTranscript();
                let newTranscription = this.state.transcription + '. '
                this.setState({
                    transcription: newTranscription,
                    break: false,
                })
            }   else {
                let newTranscription = this.state.transcription + this.props.transcript
                this.setState({
                    transcription: newTranscription,
                })
            }
        }
    }, 350)
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
                <ScrAIbMiddle setTranscript={this.setTranscript} record={this.props.startListening} stopRecording={this.props.stopListening}/>
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