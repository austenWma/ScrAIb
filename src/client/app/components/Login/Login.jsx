import React, {Component} from 'react';
import {render} from 'react-dom';

import { firebaseRef } from '../../../../firebase.js'
import * as firebase from 'firebase'

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import { BounceLoader } from 'react-spinners';

class Login extends Component {
  constructor (props) {
    super()
    this.state = {
         
    }
  }

    componentWillMount() {
        firebase.auth().onAuthStateChanged((data) => {
            if (data) {
            this.setState({loading: true})
    
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
                <div className="iconContainer">
                </div>
                <div className="scraibLoginHeaderContainer">
                    <div className="scraibLoginHeader">ScrAIb</div>
                </div>
                <div className="loginInputFields">
                    <TextField
                        hintText="Email"
                        style={{width: '75%'}}
                    />
                    <br />
                    <br />
                    <TextField
                        hintText="Password"
                        style={{width: '75%'}}
                    />
                </div>
                <div className="loginButtonContainer">
                    <RaisedButton label="Log In" fullWidth={true}/>
                </div>
            </div>
        )
    }
}

export default Login;