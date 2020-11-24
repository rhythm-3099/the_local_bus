import React, { Component } from 'react';
import { Planet } from 'react-planet';

import '../../css/components/homepage/circularMenu.css';

export default class AgentCircularMenu extends Component {
    render() {
        return (
            <div className="agent-planet-wrapper">
                <Planet
                    centerContent={
                        <div 
                            style={{
                                height: 100,
                                width: 100,
                                borderRadius: '50%',
                                backgroundColor: '#acacac',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <h3
                                style={{
                                }}
                            >Agent</h3>
                        </div>
                    }
                    autoClose
                    dragablePlanet
                    dragRadiusPlanet={20}
                    bounce    
                    orbitRadius={120}
                >
                    <div
                        style={{
                            height: 120,
                            width: 120,
                            borderRadius: '50%',
                            backgroundColor: '#acacac',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <h5>Login/ Signup</h5>
                    </div>
                    <div
                        style={{
                            height: 120,
                            width: 120,
                            borderRadius: '50%',
                            backgroundColor: '#acacac',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <h5>E Top Status</h5>
                    </div>
                    <div
                        style={{
                            height: 120,
                            width: 120,
                            borderRadius: '50%',
                            backgroundColor: '#acacac',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <h5>Agent Allotment</h5>
                    </div>
                    <div
                        style={{
                            height: 120,
                            width: 120,
                            borderRadius: '50%',
                            backgroundColor: '#acacac',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <h5>Agent List</h5>
                    </div>
                </Planet>
            </div>
        )
    }
}
