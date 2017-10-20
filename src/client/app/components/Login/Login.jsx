import React, {Component} from 'react';
import {render} from 'react-dom';
import {Redirect, Link, withRouter, hashHistory} from 'react-router-dom'

import { firebaseRef } from '../../../../firebase.js'
import * as firebase from 'firebase'

import { connect } from 'react-redux'
import { setUserID } from '../../ReduxActions/setUserID.js'

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import LoginLoader from './LoginLoader.jsx'

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
         email: '',
		 password: '',
		 errorDialogue: false,
	}
	this.handleEmailChange = this.handleEmailChange.bind(this)
	this.handlePasswordChange = this.handlePasswordChange.bind(this)
	this.login = this.login.bind(this)
	this.handleOpen = this.handleOpen.bind(this)
	this.handleClose = this.handleClose.bind(this)
}

    login() {
        firebaseRef.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(data => {
            if (data) {
				this.props.setUserID({
					userID: data.uid.slice(0,10)
				})
                this.props.history.push('/loginLoader')
            }
        })
        .catch((err) => {
			console.log(err);
			this.handleOpen();
		})
	}
	
	handleEmailChange(e) {
		this.setState({
			email: e.target.value
		})
	}

	handlePasswordChange(e) {
		this.setState({
			password: e.target.value
		})
	}

	handleOpen() {
		this.setState({errorDialogue: true});
	};
	
	handleClose() {
		this.setState({errorDialogue: false});
	};

    render() {

		const dialogueActions = [
			<FlatButton
				label="Got it"
				primary={true}
				onClick={this.handleClose}
			/>
		];

		return (
			<div>
				<div className="iconContainer">
				</div>
				<div className="scraibLoginHeaderContainer">
					<div className="scraibLoginHeader">ScrAIb</div>
				</div>
				<div className="scraibLoginContainer">
					<div className="scraibLogin">Login</div>
				</div>
				<div className="loginInputFields">
					<TextField
						hintText="Email"
						style={{width: '55%'}}
						onChange={this.handleEmailChange}
					/>
					<br />
					<br />
					<TextField
						hintText="Password"
						style={{width: '55%'}}
						type="password"
						onChange={this.handlePasswordChange}
					/>
				</div>
				<div className="loginButtonContainer">
					<RaisedButton label="Log In" fullWidth={true} onClick={this.login}/>
				</div>
				<div className="loginSignupContainer">
					<div>Don't have an account with us?</div>
					<a>Sign Up</a>
				</div>
				<Dialog
					actions={dialogueActions}
					modal={false}
					open={this.state.errorDialogue}
					onRequestClose={this.handleClose}
				>
					Invalid Email or Password
				</Dialog>
			</div>
		)
    }
}

export default withRouter(connect(null, { setUserID })(Login));