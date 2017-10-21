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
            previousRecordsCount: 0,
            recordsArr: [],
        }
        this.madeChanges = this.madeChanges.bind(this)
    }

    componentWillMount() {
        firebase.database().ref(`users/${localStorage.getItem('access_token')}/records`).on('value', (data) => {
            this.state.recordsArr = []
            for (var key in data.val()) {
                this.state.recordsArr.push(data.val()[key])
            }
            this.forceUpdate()
        })  
    }

    madeChanges() {
        console.log('UPDATED')
        this.forceUpdate()
    }

    render() {
        console.log(this.state.recordsArr)
        return (
            <div>
                <div className="recordsContainer">
                    {
                        this.state.recordsArr.map(record => 
                            <SingleRecord singleRecord={record} madeChanges={this.madeChanges}/>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, { setRecords })(Records);