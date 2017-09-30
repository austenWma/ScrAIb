import React, {Component} from 'react'
import {render} from 'react-dom'

import PhysicianSignup from './PhysicianSignup.jsx'
import PatientSignup from './PatientSignup.jsx'

import { firebaseRef } from '../../../../firebase.js'
import * as firebase from 'firebase'

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

import {Tabs, Tab} from 'react-bootstrap'

class Signup extends Component {
  constructor (props) {
    super()
    this.state = {
         
    }
  }

    componentWillMount() {
        firebase.auth().onAuthStateChanged((data) => {
            if (data) {
    
            const uid = data.uid.substring(0, 10)
            this.props.setUserInfo({
                email: data.email,
                uid: uid,
            })
            return
            }
        });
    }

    render() {
        return (
            <div>
                <div className="scraibSignupHeaderContainer">
                    <div className="scraibSignupHeader">ScrAIb</div>
                </div>
                <div className="scraibSignupLineContainer">
                    <div className="scraibSignupLine">_____________________________________________________________________________</div>
                </div>
                <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                    <Tab eventKey={1} title="Physician Signup" tabClassName="physicianSignupTab"><PhysicianSignup /></Tab>
                    <Tab eventKey={2} title="Patient Signup"><PatientSignup /></Tab>
                </Tabs>
            </div>
        )
    }
}

export default Signup;