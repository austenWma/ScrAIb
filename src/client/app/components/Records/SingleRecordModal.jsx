
import React, {Component} from 'react'
import {render} from 'react-dom'

import { Modal, Button } from 'react-bootstrap'

import TextField from 'material-ui/TextField'
import Checkbox from 'material-ui/Checkbox' 

class SingleRecordModal extends Component {
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
        };
        this.handleTextChange = this.handleTextChange.bind(this)
        this.updateCheck = this.updateCheck.bind(this)
    }

    handleTextChange(event, stateItem) {
        this.state[stateItem] = event.target.value;
        this.forceUpdate();
    }

    updateCheck() {
        this.setState((oldState) => {
          return {
            checked: !oldState.checked,
          };
        });
    }

    render() {
        return (
            <Modal bsSize="large" backdrop="static" {...this.props}>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-lg">Modal Heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
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
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Save</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default SingleRecordModal;