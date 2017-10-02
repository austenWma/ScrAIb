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

  componentDidMount() {
      // Here is where we load the user's information into their redux store 
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

export default LoginLoader;