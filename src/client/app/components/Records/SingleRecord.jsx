import React, {Component} from 'react';
import {render} from 'react-dom';

class SingleRecord extends Component {
    constructor (props) {
        super(props)
    }

    render() {
        let singleRecordObj = JSON.parse(this.props.singleRecord)
        return (
            <div>
                <div>{singleRecordObj.patient}</div>
            </div>
        )
    }
}

export default SingleRecord;