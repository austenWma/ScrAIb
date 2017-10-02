import React, {Component} from 'react';
import {render} from 'react-dom';

import {Tabs, Tab} from 'material-ui/Tabs'
import Slider from 'material-ui/Slider'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Drawer from 'material-ui/Drawer'
import SwipeableViews from 'react-swipeable-views';

import ScrAIb from '../ScrAIb/ScrAIb.jsx'

class PhysicianDashboardTabs extends Component {
    constructor (props) {
        super(props)
        this.state = {
            slideIndex: 1,
        }
        this.handleChangeTab = this.handleChangeTab.bind(this)
    }

    handleChangeTab(value) {
        this.setState({
        slideIndex: value,
        });
    };

    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <div>
                        <Tabs
                            tabItemContainerStyle={{backgroundColor: 'black'}}
                            onChange={this.handleChangeTab}
                            value={this.state.slideIndex}
                        >
                            <Tab label="Recent Records" value={0} />
                            <Tab label="S c r A I b" value={1} />
                            <Tab label="Patients" value={2} />
                        </Tabs>
                        <SwipeableViews
                            index={this.state.slideIndex}
                            onChangeIndex={this.handleChangeTab}
                        >
                            <div>
                            <h2 style={styles.headline}>Tabs with slide effect</h2>
                            Swipe to see the next slide.<br />
                            </div>
                            <div style={styles.slide}>
                                <ScrAIb />
                            </div>
                            <div style={styles.slide}>
                            slide n°3
                            </div>
                        </SwipeableViews>
                    </div>
                </MuiThemeProvider>
            </div>
        )
    }
}

export default PhysicianDashboardTabs;

const styles = {
    headline: {
      fontSize: 24,
      paddingTop: 16,
      marginBottom: 12,
      fontWeight: 400,
    },
};