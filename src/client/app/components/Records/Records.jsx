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
  }

componentWillMount() {
    if (this.props.records.length === 0) {
        firebase.database().ref(`users/${localStorage.getItem('access_token')}/records`).on('value', (data) => {
            for (var key in data.val()) {
                this.props.setRecords({
                    records: data.val()[key]
                })
            }
        })
    }
}

    render() {
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