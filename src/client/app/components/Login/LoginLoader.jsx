import React, {Component} from 'react'
import {render} from 'react-dom'

import { connect } from 'react-redux'
import { setRecords } from '../../ReduxActions/setRecords.js'

import * as firebase from 'firebase'

import { BounceLoader } from 'react-spinners'

const mapStateToProps = (state) => {
    return {
        userID: state.UserID.userID,
        records: state.Records.records
    }
}

class LoginLoader extends Component {
    constructor (props) {
        super()
        this.state = {
            loading: true  
        }
    }

  componentDidMount() {
    // Here is where we load the user's information into their redux store 

    firebase.database().ref(`users/${this.props.userID}/records`).once('value', (data) => {
        for (var key in data.val()) {
            this.props.setRecords({
                records: data.val()[key]
            })
        }
    })
    setTimeout(() => {
    this.props.history.push('/physicianDashboard')
    }, 2000)
  }

    render() {
        return (
            <div className="loaderParent">
                <div className="loaderContainer">
                    <BounceLoader 
                        color="#78e3fd"
                        size="750"
                        loading={this.state.loading}
                    />
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, { setRecords })(LoginLoader);