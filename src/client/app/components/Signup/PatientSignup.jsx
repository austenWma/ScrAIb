import React, {Component} from 'react'
import {render} from 'react-dom'

import $ from 'jquery'
import { firebaseRef } from '../../../../firebase.js'
import * as firebase from 'firebase'

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

class PatientSignup extends Component {
  constructor (props) {
    super()
    this.state = {
        email: '',
        password: '',
        reEnter: '',
        associated: '',
    }
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleReEnterChange = this.handleReEnterChange.bind(this)
    this.handleAssociatedChange = this.handleAssociatedChange.bind(this)
    this.handleSpecialtyChange = this.handleSpecialtyChange.bind(this)
    this.signUp = this.signUp.bind(this)
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

    signUp() {

    }

    handleEmailChange(e) {
        this.setState({
            email: e.target.value
        });
    }
    handlePasswordChange(e) {
        this.setState({
            password: e.target.value
        });
    }
    handleReEnterChange(e) {
        this.setState({
            reEnter: e.target.value
        });
    }
    handleAssociatedChange(e) {
        this.setState({
            associated: e.target.value
        });
    }
    handleSpecialtyChange(event, index, value) {
        this.setState({
            specialty: value
        });
    } 

    render() {
        return (
            <div>
                <div className="scraibSignupContainer">
                    <div className="scraibSignup">Sign Up</div>
                </div>
                <div className="signupInputFields">
                    <TextField
                        hintText="Enter your Email here"
                        style={{width: '55%'}}
                        onChange={this.handleEmailChange}
                    />
                    <br />
                    <br />
                    <TextField
                        hintText="Create a Password"
                        style={{width: '55%'}}
                        type="password"
                        onChange={this.handlePasswordChange}
                    />
                    <br />
                    <br />
                    <TextField
                        hintText="Confirm your Password"
                        style={{width: '55%'}}
                        type="password"
                        onChange={this.handleReEnterChange}
                    />
                    <div className="scraibSignupPersonalHeaderContainer">
                        <div className="scraibSignupPersonalHeader">Associated Hospital</div>
                    </div>
                    <TextField
                        hintText="Associated Hospital"
                        style={{width: '65%'}}
                        onChange={this.handleAssociatedChange}
                    />
                    <br />
                    <br />
                </div>
                <div className="signupButtonContainer">
                    <RaisedButton label="Sign Up" fullWidth={true} onClick={this.signUp}/>
                </div>
                <div className="loginSignupContainer">
                    <div>Already have an account with us?</div>
                    <a>Log In</a>
                </div>
            </div>
        )
    }
}

export default PatientSignup;