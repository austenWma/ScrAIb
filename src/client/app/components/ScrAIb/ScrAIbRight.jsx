import React, {Component} from 'react'
import {render} from 'react-dom'
import {Redirect, Link} from 'react-router-dom'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

import $ from 'jquery'

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
    };
    this.handleTextChange = this.handleTextChange.bind(this)
  }

  handleTextChange(event, stateItem) {
    this.state[stateItem] = event.target.value;
    this.forceUpdate();
  }

  render() {
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
                    <div className="formChiefComplaintContainer">
                        <div>
                            <TextField className="formTextField" floatingLabelText="Chief Complaint" floatingLabelFixed={true} value={this.state.chiefComplaint} multiLine={true} onChange={(event) => {this.handleTextChange(event, 'chiefComplaint')}}/>
                        </div>
                        <div>
                            <TextField className="formTextField" floatingLabelText="Onset and Duration" floatingLabelFixed={true} value={this.state.onsetDuration} multiLine={true} onChange={(event) => {this.handleTextChange(event, 'onsetDuration')}}/>
                        </div>
                        <div>
                            <TextField className="formTextField" floatingLabelText="Similar Past Symptoms" floatingLabelFixed={true} value={this.state.similarPast} multiLine={true} onChange={(event) => {this.handleTextChange(event, 'similarPast')}}/>
                        </div>
                        <div>
                            <TextField className="formTextField" floatingLabelText="Frequency of Symptoms" floatingLabelFixed={true} value={this.state.timing} multiLine={true} onChange={(event) => {this.handleTextChange(event, 'timing')}}/>
                        </div>
                        <div>
                            <TextField className="formTextField" floatingLabelText="Scale: 1-10" floatingLabelFixed={true} value={this.state.severity} multiLine={true} onChange={(event) => {this.handleTextChange(event, 'severity')}}/>
                        </div>
                        <div>
                            <TextField className="formTextField" floatingLabelText="Location and Radiation" floatingLabelFixed={true} value={this.state.location} multiLine={true} onChange={(event) => {this.handleTextChange(event, 'location')}}/>
                        </div>
                        <div>
                            <TextField className="formTextField" floatingLabelText="Associated Symptoms" floatingLabelFixed={true} value={this.state.symptoms} multiLine={true} onChange={(event) => {this.handleTextChange(event, 'symptoms')}}/>
                        </div>
                        <div>
                            <TextField className="formTextField" floatingLabelText="Modifying Factors" floatingLabelFixed={true} value={this.state.modifyingFactors} multiLine={true} onChange={(event) => {this.handleTextChange(event, 'modifyingFactors')}}/>
                        </div>
                    </div>
                </div>
            </Paper>
        </div>
    )
  }
}

export default ScrAIbRight;