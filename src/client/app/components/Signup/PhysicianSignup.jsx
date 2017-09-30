import React, {Component} from 'react'
import {render} from 'react-dom'

import $ from 'jquery'
import { firebaseRef } from '../../../../firebase.js'
import * as firebase from 'firebase'

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'

class PhysicianSignup extends Component {
  constructor (props) {
    super()
    this.state = {
        email: '',
        password: '',
        reEnter: '',
        associated: '',
        specialty: 'Select Specialty...',
    }
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleReEnterChange = this.handleReEnterChange.bind(this)
    this.handleAssociatedChange = this.handleAssociatedChange.bind(this)
    this.handleSpecialtyChange = this.handleSpecialtyChange.bind(this)
    this.signUp = this.signUp.bind(this)
  }

    signUp() {
        if (this.state.password === this.state.reEnter) {
            firebaseRef.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(data => {
                console.log('successfully created an account', data)
                firebase.database().ref(`users/${data.uid.substring(0, 10)}`).set({
                    email: data.email,
                    uid: data.uid.substring(0, 10),
                    associated: this.state.associated,
                    specialty: this.state.specialty,
                })
            })
            .catch(err => {
                console.log(err.code)
                console.log(err.message)
            })
        }
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
                        hintText="Enter your Email or Username here"
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
                        <div className="scraibSignupPersonalHeader">Place and Profession</div>
                    </div>
                    <TextField
                        hintText="Associated Hospital"
                        style={{width: '65%'}}
                        onChange={this.handleAssociatedChange}
                    />
                    <br />
                    <br />
                    <div className="signupDropDownContainer">
                        <DropDownMenu maxHeight={300} value={this.state.specialty} autoWidth={false} style={{width: '40%'}} onChange={this.handleSpecialtyChange}>
                            {[
                                <MenuItem value={'Select Specialty...'} key={0} primaryText={'Select Specialty...'} />,
                                <MenuItem value={'Anesthesiology'} key={1} primaryText={'Anesthesiology'} />,
                                <MenuItem value={'Cardiology'} key={2} primaryText={'Cardiology'} />,
                                <MenuItem value={'Dermatology'} key={3} primaryText={'Dermatology'} />,
                                <MenuItem value={'Ear, Nose, Eye'} key={4} primaryText={'Ear, Nose, Eye'} />,
                                <MenuItem value={'Family Physician'} key={5} primaryText={'Family Physician'} />,
                                <MenuItem value={'Internal Medicine'} key={6} primaryText={'Internal Medicine'} />,
                                <MenuItem value={'Orthopaedic'} key={7} primaryText={'Orthopaedic'} />,
                                <MenuItem value={'Pediatrics'} key={8} primaryText={'Pediatrics'} />,
                                <MenuItem value={'Surgery'} key={9} primaryText={'Surgery'} />
                            ]}
                        </DropDownMenu>
                    </div>
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

export default PhysicianSignup;