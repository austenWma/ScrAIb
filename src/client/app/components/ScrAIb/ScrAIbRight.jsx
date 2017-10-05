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
  }

  componentDidMount() {

  }

  render() {
    return (
        <div className="scraibFormContainer">
            <Paper style={{height: '100%', width: '100%'}} zDepth={2}>
                <div className="scraibFormDataContainer">
                    <div className="patientNameAndDateContainer">
                        <div>
                            <p className="formPatientLabel">Patient Name: </p>
                            <TextField className="formPatientTextField" hintText="Patient Name" value={this.state.patientName}/>
                        </div>
                        <div>
                            <p className="formPatientLabel">Date: </p>
                            <TextField className="formPatientTextField" hintText="Date" value={this.state.date}/>
                        </div>
                    </div>
                    <div className="formChiefComplaintContainer">
                        <div>
                            <p className="formLabel">Chief Complaint: </p>
                            <TextField className="formTextField" hintText="Chief Complaint" value={this.state.chiefComplaint} multiLine={true}/>
                        </div>
                        <div>
                            <p className="formLabel">Onset/Duration: </p>
                            <TextField className="formTextField" hintText="Onset and Duration" value={this.state.onsetDuration} multiLine={true}/>
                        </div>
                        <div>
                            <p className="formLabel">Similar Past Symptoms: </p>
                            <TextField className="formTextField" hintText="Similar Past Symptoms" value={this.state.similarPast} multiLine={true}/>
                        </div>
                        <div>
                            <p className="formLabel">Timing: </p>
                            <TextField className="formTextField" hintText="Frequency of Symptoms" value={this.state.timing} multiLine={true}/>
                        </div>
                        <div>
                            <p className="formLabel">Severity: </p>
                            <TextField className="formTextField" hintText="Scale: 1-10" value={this.state.severity} multiLine={true}/>
                        </div>
                        <div>
                            <p className="formLabel">Location: </p>
                            <TextField className="formTextField" hintText="Location and Radiation" value={this.state.location} multiLine={true}/>
                        </div>
                        <div>
                            <p className="formLabel">Associated Symptoms: </p>
                            <TextField className="formTextField" hintText="Associated Symptoms" value={this.state.symptoms} multiLine={true}/>
                        </div>
                        <div>
                            <p className="formLabel">Modifying Factors: </p>
                            <TextField className="formTextField" hintText="Modifying Factors" value={this.state.modifyingFactors} multiLine={true}/>
                        </div>
                    </div>
                </div>
            </Paper>
        </div>
    )
  }
}

export default ScrAIbRight;