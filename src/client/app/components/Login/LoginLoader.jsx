import React, {Component} from 'react';
import {render} from 'react-dom';

import { BounceLoader } from 'react-spinners';

class LoginLoader extends Component {
  constructor (props) {
    super()
    this.state = {
        loading: true  
    }
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

export default LoginLoader;