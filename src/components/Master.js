import React, { Component } from 'react';
import './Master.css';

//Design Components
import Card from '../design-components/Card'
//
export default class Master extends Component {

    render() {
        return (
            <div className="Master">
                <div className="DesignComponentList">
                    <Card duplicate={true} />
                </div>
            </div>
        )
    }
}