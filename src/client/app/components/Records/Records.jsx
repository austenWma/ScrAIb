import React, {Component} from 'react'
import {render} from 'react-dom'

import SingleRecord from './SingleRecord.jsx'

import { connect } from 'react-redux'
import { setRecords } from '../../ReduxActions/setRecords.js'

import * as firebase from 'firebase'

const mapStateToProps = (state) => {
    return {
        records: state.Records.records
    }
}

class Records extends Component {
  constructor (props) {
    super(props)
    this.state = {
        previousRecordsCount: 0
    }
  }

componentWillMount() {
    firebase.database().ref(`users/${localStorage.getItem('access_token')}/records`).once('value', (data) => {
        for (var key in data.val()) {
            this.props.setRecords({
                records: data.val()[key]
            })
        }
    })
}

    render() {
        console.log(this.props.records)
        return (
            <div>
                <div className="recordsContainer">
                    {
                        this.props.records.map(record => 
                            <SingleRecord singleRecord={record} />
                        )
                    }
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, { setRecords })(Records);