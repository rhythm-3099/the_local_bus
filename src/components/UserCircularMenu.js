import React, { Component } from 'react';
import { Planet } from 'react-planet';

import '../css/components/circularMenu.css';

export default class UserCircularMenu extends Component {
    render() {
        return (
            <div className="user-planet-wrapper">
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
                            >User</h3>
                        </div>
                    }
                    orbitRadius={170}
                    autoClose
                    dragablePlanet
                    dragRadiusPlanet={20}
                    bounce    
                >
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
                        <h5>Reschedule Journey</h5>
                    </div>
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
                        <h5>Refund Complaint</h5>
                    </div>
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
                        <h5>Refund Enquiry</h5>
                    </div>
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
                        <h5>Wallet</h5>
                    </div>
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
                        <h5>Waiting List Ticket Status</h5>
                    </div>
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
                        <h5>Cancel Ticket</h5>
                    </div>
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
                        <h5>Print/SMS Ticket</h5>
                    </div>
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
                        <h5>Print/SMS Ticket</h5>
                    </div>
                </Planet>
            </div>
        )
    }
}
