import React, {Component} from 'react'
import {render} from 'react-dom'
import {Redirect, Link} from 'react-router-dom'

import { connect } from 'react-redux'
import { setRecords } from '../../ReduxActions/setRecords.js'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import Checkbox from 'material-ui/Checkbox' 

import * as firebase from 'firebase'

import keyword_extractor from "keyword-extractor"

import $ from 'jquery'

const mapStateToProps = (state) => {
    return {
        userID: state.UserID.userID
    }
}

class ScrAIbRight extends Component {
  constructor (props) {
    super(props)
    this.state = {
        patientName: '',
        date: '',
        chiefComplaint: '',
        onsetDuration: '',
        similarPast: '',
        timing: '',
        severity: '',
        location: '',
        symptoms: '',
        modifyingFactors: '',
        checked: true,
        currentTopic: '',
        prevExtracted: '',
    };
    this.handleTextChange = this.handleTextChange.bind(this)
    this.analyzeTranscription = this.analyzeTranscription.bind(this)
    this.updateCheck = this.updateCheck.bind(this)
    this.updateCurrentTopic = this.updateCurrentTopic.bind(this)
    this.compileInteraction = this.compileInteraction.bind(this)
  }

//   Crude fix to a re-rendering issue. Need to go back and refactor so that this interval only fires in tandem with the record button.
  componentDidMount() {
      setInterval(() => {
          this.forceUpdate()
      }, 500)
  }

  handleTextChange(event, stateItem) {
    this.state[stateItem] = event.target.value;
    this.forceUpdate();
  }

  analyzeTranscription(arr) {
    let sentence = arr[arr.length - 1]
    let extracted = keyword_extractor.extract(sentence, {
        language:"english",
        remove_digits: false,
        return_changed_case: true,
        remove_duplicates: false
    })

    if (extracted.join(', ') !== this.state.prevExtracted) {
        this.state[this.state.currentTopic] += extracted.join(', ') + ', '
        this.state.prevExtracted = extracted.join(', ')
    }  
  }

  updateCheck() {
    this.setState((oldState) => {
      return {
        checked: !oldState.checked,
      };
    });
  }

  updateCurrentTopic(topic) {
    $('.' + this.state.currentTopic + 'Container').animate({borderWidth: '0px'}, 'fast');
    $('.' + topic + 'Container').animate({borderWidth: '2px'}, 'fast');
    this.state.currentTopic = topic;
  }

  compileInteraction() {
    let interactionObj = {
        patient: this.state.patientName,
        date: this.state.date,
        details: {
            chiefComplaint: this.state.chiefComplaint,
            onsetDuration: this.state.onsetDuration,
            similarPast: this.state.similarPast,
            timing: this.state.timing,
            severity: this.state.severity,
            location: this.state.location,
            symptoms: this.state.symptoms,
            modifyingFactors: this.state.modifyingFactors,
        }
    }
    interactionObj = JSON.stringify(interactionObj)

    let filteredDate = this.state.date.split('').filter(char => {
        return char !== '/' && char !== '-'
    })

    let key = this.state.patientName + ' ' + filteredDate.join('')

    this.props.setRecords({
        records: interactionObj
    })

    firebase.database().ref(`users/${localStorage.getItem('access_token')}/records`).update({
        [key]: interactionObj
    })
    .then(() => {
        alert('Changes Saved')
        this.props.finishedCompiling()
    })
  }

  render() {
    this.analyzeTranscription(this.props.transcriptionArr)
    if (this.props.compileClicked) {
        this.compileInteraction()
    }
    return (
        <div className="scraibFormContainer">
            <Paper style={{height: '100%', width: '100%'}} zDepth={2}>
                <div className="scraibFormDataContainer">
                    <div className="patientNameAndDateContainer">
                        <div>
                            <p className="formPatientLabel">Patient Name: </p>
                            <TextField className="formPatientTextField" hintText="Patient Name" value={this.state.patientName} onChange={(event) => {this.handleTextChange(event, 'patientName')}}/>
                        </div>
                        <div>
                            <p className="formPatientLabel">Date: </p>
                            <TextField className="formPatientTextField" hintText="Date" value={this.state.date} onChange={(event) => {this.handleTextChange(event, 'date')}}/>
                        </div>
                    </div>
                    <div className="pinpointCheckboxContainer">
                        <Checkbox
                            label="Enable ScrAIb to allow conversation pinpointing (click categories)"
                            checked={this.state.checked}
                            onCheck={this.updateCheck.bind(this)}
                            style={{maxWidth: 800}}
                        />
                    </div>
                    <div className="formChiefComplaintContainer formTextFieldContainer">
                        <div className="chiefComplaintContainer formTextFieldContainer" onClick={() => {this.updateCurrentTopic('chiefComplaint')}}>
                            <TextField className="formTextField" floatingLabelText="Chief Complaint" floatingLabelStyle={{color: 'black', fontWeight: '100', fontSize: '20px'}} style={{width: '80%'}} floatingLabelFixed={true} value={this.state.chiefComplaint} multiLine={true} onChange={(event) => {this.handleTextChange(event, 'chiefComplaint')}}/>
                        </div>
                        <div className="onsetDurationContainer formTextFieldContainer" onClick={() => {this.updateCurrentTopic('onsetDuration')}}>
                            <TextField className="formTextField" floatingLabelText="Onset and Duration" floatingLabelStyle={{color: 'black', fontWeight: '100', fontSize: '20px'}} style={{width: '80%'}} floatingLabelFixed={true} value={this.state.onsetDuration} multiLine={true} onChange={(event) => {this.handleTextChange(event, 'onsetDuration')}}/>
                        </div>
                        <div className="similarPastContainer formTextFieldContainer" onClick={() => {this.updateCurrentTopic('similarPast')}}>
                            <TextField className="formTextField" floatingLabelText="Similar Past Symptoms" floatingLabelStyle={{color: 'black', fontWeight: '100', fontSize: '20px'}} style={{width: '80%'}} floatingLabelFixed={true} value={this.state.similarPast} multiLine={true} onChange={(event) => {this.handleTextChange(event, 'similarPast')}}/>
                        </div>
                        <div className="timingContainer formTextFieldContainer" onClick={() => {this.updateCurrentTopic('timing')}}>
                            <TextField className="formTextField" floatingLabelText="Frequency of Symptoms" floatingLabelStyle={{color: 'black', fontWeight: '100', fontSize: '20px'}} style={{width: '80%'}} floatingLabelFixed={true} value={this.state.timing} multiLine={true} onChange={(event) => {this.handleTextChange(event, 'timing')}}/>
                        </div>
                        <div className="severityContainer formTextFieldContainer" onClick={() => {this.updateCurrentTopic('severity')}}>
                            <TextField className="formTextField" floatingLabelText="Scale: 1-10" floatingLabelStyle={{color: 'black', fontWeight: '100', fontSize: '20px'}} style={{width: '80%'}} floatingLabelFixed={true} value={this.state.severity} multiLine={true} onChange={(event) => {this.handleTextChange(event, 'severity')}}/>
                        </div>
                        <div className="locationContainer formTextFieldContainer" onClick={() => {this.updateCurrentTopic('location')}}>
                            <TextField className="formTextField" floatingLabelText="Location and Radiation" floatingLabelStyle={{color: 'black', fontWeight: '100', fontSize: '20px'}} style={{width: '80%'}} floatingLabelFixed={true} value={this.state.location} multiLine={true} onChange={(event) => {this.handleTextChange(event, 'location')}}/>
                        </div>
                        <div className="symptomsContainer formTextFieldContainer" onClick={() => {this.updateCurrentTopic('symptoms')}}>
                            <TextField className="formTextField" floatingLabelText="Associated Symptoms" floatingLabelStyle={{color: 'black', fontWeight: '100', fontSize: '20px'}} style={{width: '80%'}} floatingLabelFixed={true} value={this.state.symptoms} multiLine={true} onChange={(event) => {this.handleTextChange(event, 'symptoms')}}/>
                        </div>
                        <div className="modifyingFactorsContainer formTextFieldContainer" onClick={() => {this.updateCurrentTopic('modifyingFactors')}}>
                            <TextField className="formTextField" floatingLabelText="Modifying Factors" floatingLabelStyle={{color: 'black', fontWeight: '100', fontSize: '20px'}} style={{width: '80%'}} floatingLabelFixed={true} value={this.state.modifyingFactors} multiLine={true} onChange={(event) => {this.handleTextChange(event, 'modifyingFactors')}}/>
                        </div>
                    </div>
                </div>
            </Paper>
        </div>
    )
  }
}

export default connect(mapStateToProps, { setRecords })(ScrAIbRight);