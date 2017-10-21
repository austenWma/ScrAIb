import React, {Component} from 'react';
import {render} from 'react-dom';

import * as firebase from 'firebase'

import { Modal, Button } from 'react-bootstrap'

import TextField from 'material-ui/TextField'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'

class SingleRecord extends Component {
    constructor (props) {
        super(props)
        this.state = {
            modalShow: false,
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
        this.modalOpen = this.modalOpen.bind(this)
        this.modalClose = this.modalClose.bind(this)
        this.modalCloseNoSave = this.modalCloseNoSave.bind(this)
        this.deleteRecord = this.deleteRecord.bind(this)
    }

    componentDidMount() {
        let singleRecordObj = JSON.parse(this.props.singleRecord)
        this.setState({
            patientName: singleRecordObj.patient,
            date: singleRecordObj.date,
            chiefComplaint: singleRecordObj.details.chiefComplaint,
            onsetDuration: singleRecordObj.details.onsetDuration,
            similarPast: singleRecordObj.details.similarPast,
            timing: singleRecordObj.details.timing,
            severity: singleRecordObj.details.severity,
            location: singleRecordObj.details.location,
            symptoms: singleRecordObj.details.symptoms,
            modifyingFactors: singleRecordObj.details.modifyingFactors,
        })
    }

    modalOpen() {
        this.setState({ modalShow: true })
    }
    modalClose() {
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
    
        firebase.database().ref(`users/${localStorage.getItem('access_token')}/records`).update({
            [key]: interactionObj
        })
        .then(() => {
            this.props.madeChanges()
        })
        this.setState({ modalShow: false })
    }
    modalCloseNoSave() {
        this.setState({ modalShow: false })
    }
    handleTextChange(event, stateItem) {
        this.state[stateItem] = event.target.value;
        this.forceUpdate();
    }
    deleteRecord() {
        let filteredDate = this.state.date.split('').filter(char => {
            return char !== '/' && char !== '-'
        })
    
        let key = this.state.patientName + ' ' + filteredDate.join('')

        firebase.database().ref(`users/${localStorage.getItem('access_token')}/records/${key}`).remove()
        .then(() => {
            this.props.madeChanges()
        })
    }

    render() {
        let singleRecordObj = JSON.parse(this.props.singleRecord)
        return (
            <div className="singleRecordContainer">
                <div className="singleRecordCircle">
                </div>
                <div className="singleRecordName">
                    {singleRecordObj.patient}
                </div>
                <div className="singleRecordDate">
                    {singleRecordObj.date}
                </div>
                <div className="singleRecordButtons">
                    <div className="singleRecordViewButton">
                        <RaisedButton label="View and Edit" primary={true} buttonStyle={{backgroundColor: '#78e3fd', width: '200'}} onClick={this.modalOpen}/>
                    </div>
                    <div>
                        <RaisedButton label="Delete" primary={true} buttonStyle={{backgroundColor: '#DE5A5A'}} onClick={this.deleteRecord}/>
                    </div>
                </div>

                <Modal bsSize="large" backdrop="static" show={this.state.modalShow}>
                    <Modal.Header  closeButton={true} onHide={this.modalCloseNoSave}>
                        <Modal.Title id="contained-modal-title-lg">ScrAIb</Modal.Title>
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
                            <div className="formChiefComplaintContainer formTextFieldContainer">
                                <div className="chiefComplaintContainer formTextFieldContainer">
                                    <TextField className="formTextField" floatingLabelText="Chief Complaint" floatingLabelStyle={{color: 'black', fontWeight: '100', fontSize: '20px'}} style={{width: '80%'}} floatingLabelFixed={true} value={this.state.chiefComplaint} multiLine={true} onChange={(event) => {this.handleTextChange(event, 'chiefComplaint')}}/>
                                </div>
                                <div className="onsetDurationContainer formTextFieldContainer">
                                    <TextField className="formTextField" floatingLabelText="Onset and Duration" floatingLabelStyle={{color: 'black', fontWeight: '100', fontSize: '20px'}} style={{width: '80%'}} floatingLabelFixed={true} value={this.state.onsetDuration} multiLine={true} onChange={(event) => {this.handleTextChange(event, 'onsetDuration')}}/>
                                </div>
                                <div className="similarPastContainer formTextFieldContainer">
                                    <TextField className="formTextField" floatingLabelText="Similar Past Symptoms" floatingLabelStyle={{color: 'black', fontWeight: '100', fontSize: '20px'}} style={{width: '80%'}} floatingLabelFixed={true} value={this.state.similarPast} multiLine={true} onChange={(event) => {this.handleTextChange(event, 'similarPast')}}/>
                                </div>
                                <div className="timingContainer formTextFieldContainer">
                                    <TextField className="formTextField" floatingLabelText="Frequency of Symptoms" floatingLabelStyle={{color: 'black', fontWeight: '100', fontSize: '20px'}} style={{width: '80%'}} floatingLabelFixed={true} value={this.state.timing} multiLine={true} onChange={(event) => {this.handleTextChange(event, 'timing')}}/>
                                </div>
                                <div className="severityContainer formTextFieldContainer">
                                    <TextField className="formTextField" floatingLabelText="Scale: 1-10" floatingLabelStyle={{color: 'black', fontWeight: '100', fontSize: '20px'}} style={{width: '80%'}} floatingLabelFixed={true} value={this.state.severity} multiLine={true} onChange={(event) => {this.handleTextChange(event, 'severity')}}/>
                                </div>
                                <div className="locationContainer formTextFieldContainer">
                                    <TextField className="formTextField" floatingLabelText="Location and Radiation" floatingLabelStyle={{color: 'black', fontWeight: '100', fontSize: '20px'}} style={{width: '80%'}} floatingLabelFixed={true} value={this.state.location} multiLine={true} onChange={(event) => {this.handleTextChange(event, 'location')}}/>
                                </div>
                                <div className="symptomsContainer formTextFieldContainer">
                                    <TextField className="formTextField" floatingLabelText="Associated Symptoms" floatingLabelStyle={{color: 'black', fontWeight: '100', fontSize: '20px'}} style={{width: '80%'}} floatingLabelFixed={true} value={this.state.symptoms} multiLine={true} onChange={(event) => {this.handleTextChange(event, 'symptoms')}}/>
                                </div>
                                <div className="modifyingFactorsContainer formTextFieldContainer">
                                    <TextField className="formTextField" floatingLabelText="Modifying Factors" floatingLabelStyle={{color: 'black', fontWeight: '100', fontSize: '20px'}} style={{width: '80%'}} floatingLabelFixed={true} value={this.state.modifyingFactors} multiLine={true} onChange={(event) => {this.handleTextChange(event, 'modifyingFactors')}}/>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.modalClose}>Save</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default SingleRecord;