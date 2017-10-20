import React, {Component} from 'react';
import {render} from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'

class SingleRecord extends Component {
    constructor (props) {
        super(props)
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
                        <RaisedButton label="View and Edit" primary={true} buttonStyle={{backgroundColor: '#78e3fd', width: '200'}}/>
                    </div>
                    <div>
                        <RaisedButton label="Delete" primary={true} buttonStyle={{backgroundColor: '#DE5A5A'}}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default SingleRecord;