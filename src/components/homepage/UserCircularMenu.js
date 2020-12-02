import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Planet } from 'react-planet';

import '../../css/components/homepage/circularMenu.css';

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
                                backgroundImage: 'linear-gradient(#007CC7, #9cc6dd)',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                color: '#ececec',
                                boxShadow: '5px 10px 8px #888888'
                            }}
                        >
                            <h3
                                style={{
                                }}
                            >User</h3>
                        </div>
                    }
                    orbitRadius={145}
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
                            alignItems: 'center',
                            color: '#ececec',
                            cursor: 'pointer',
                            backgroundImage: 'linear-gradient(#007CC7, #9cc6dd)'
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
                            alignItems: 'center',
                            color: '#ececec',
                            cursor: 'pointer',
                            backgroundImage: 'linear-gradient(#007CC7, #9cc6dd)'
                        }}
                    >
                        <h5>
                            <Link to="/login" style={{color: '#ffffff'}}>
                                Login
                            </Link>
                        </h5>
                    </div>
                    <div
                        style={{
                            height: 100,
                            width: 100,
                            borderRadius: '50%',
                            backgroundColor: '#acacac',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: '#ececec',
                            cursor: 'pointer',
                            backgroundImage: 'linear-gradient(#007CC7, #9cc6dd)'
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
                            alignItems: 'center',
                            color: '#ececec',
                            cursor: 'pointer',
                            backgroundImage: 'linear-gradient(#007CC7, #9cc6dd)'
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
                            alignItems: 'center',
                            color: '#ececec',
                            cursor: 'pointer',
                            backgroundImage: 'linear-gradient(#007CC7, #9cc6dd)'
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
                            alignItems: 'center',
                            color: '#ececec',
                            cursor: 'pointer',
                            backgroundImage: 'linear-gradient(#007CC7, #9cc6dd)'
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
                            alignItems: 'center',
                            color: '#ececec',
                            cursor: 'pointer',
                            backgroundImage: 'linear-gradient(#007CC7, #9cc6dd)'
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
                            alignItems: 'center',
                            color: '#ececec',
                            cursor: 'pointer',
                            backgroundImage: 'linear-gradient(#007CC7, #9cc6dd)'
                        }}
                    >
                        <h5>Print/SMS Ticket</h5>
                    </div>
                </Planet>
            </div>
        )
    }
}
