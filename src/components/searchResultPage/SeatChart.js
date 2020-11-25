import React, { Component } from 'react';

import '../../css/components/searchResultPage/seatChart.css';

import {Dropdown} from 'react-bootstrap';
import { Icon } from '@iconify/react';
import arrowDownDropCircleOutline from '@iconify/icons-mdi/arrow-down-drop-circle-outline';
import seatPassenger from '@iconify/icons-mdi/seat-passenger';
import steeringIcon from '@iconify/icons-mdi/steering';

import Seat from './Seat';
import SeatUpper from './SeatUpper';

export default class SeatChart extends Component {

    state = {boardingPoint: 'Surat Central Bus Station', droppingPoint: 'Ahmedabad Kalupur'};

    onBoardingPointChangeHandler = (newBoardingPoint) => {
        this.setState({boardingPoint: newBoardingPoint});
    }

    onDroppingPointChangeHandler = (newDroppingPoint) => {
        this.setState({droppingPoint: newDroppingPoint});
    }

    render() {
        return (
            <div className="seat-chart">
                <div className="seat-chart-wrapper">
                    <div className="bb1 bb">
                        <h2>Lower Deck</h2>
                        <div className="lower-deck-container">
                            <div className="lower-deck-front">
                                F
                            </div>
                            <div className="lower-deck-main">
                                <div className="lower-upper-deck">
                                    <div className="lower-deck-row">
                                        <Icon icon={steeringIcon} style={{color: '#000000'}} hFlip={true} className="steer-icon"/>
                                        <Seat className="lower-deck-icon" seatProp="Available"/>
                                        <Seat className="lower-deck-icon" seatProp="Available"/>
                                        <Seat className="lower-deck-icon" seatProp="Available"/>
                                        <Seat className="lower-deck-icon" seatProp="Available"/>
                                        <Seat className="lower-deck-icon" seatProp="Available"/>
                                        <Seat className="lower-deck-icon" seatProp="Available"/>
                                        <Seat className="lower-deck-icon" seatProp="Available"/>
                                        <Seat className="lower-deck-icon" seatProp="Available"/>
                                        <Seat className="lower-deck-icon" seatProp="Available"/>
                                        <Seat className="lower-deck-icon" seatProp="Available"/>
                                    </div>
                                    <div className="lower-deck-row">
                                        <Icon icon={steeringIcon} style={{color: '#000000'}} hFlip={true} className="steer-icon hidden-steer"/>
                                        <Seat className="lower-deck-icon" seatProp="Available"/>
                                        <Seat className="lower-deck-icon" seatProp="Available"/>
                                        <Seat className="lower-deck-icon" seatProp="Available"/>
                                        <Seat className="lower-deck-icon" seatProp="Available"/>
                                        <Seat className="lower-deck-icon" seatProp="Available"/>
                                        <Seat className="lower-deck-icon" seatProp="Available"/>
                                        <Seat className="lower-deck-icon" seatProp="Available"/>
                                        <Seat className="lower-deck-icon" seatProp="Available"/>
                                        <Seat className="lower-deck-icon" seatProp="Available"/>
                                        <Seat className="lower-deck-icon" seatProp="Available"/>
                                    </div>
                                </div>
                                <div className="lower-upper-deck">
                                    <div className="lower-deck-row">
                                        <Icon icon={steeringIcon} style={{color: '#000000'}} hFlip={true} className="steer-icon hidden-steer"/>
                                        <Seat className="lower-deck-icon" seatProp="Available"/>
                                        <Seat className="lower-deck-icon" seatProp="Booked"/>
                                        <Seat className="lower-deck-icon" seatProp="Available"/>
                                        <Seat className="lower-deck-icon" seatProp="Available"/>
                                        <Seat className="lower-deck-icon" seatProp="Lady"/>
                                        <Seat className="lower-deck-icon" seatProp="Available"/>
                                        <Seat className="lower-deck-icon" seatProp="Available"/>
                                        <Seat className="lower-deck-icon" seatProp="Lady"/>
                                        <Seat className="lower-deck-icon" seatProp="Lady"/>
                                        <Seat className="lower-deck-icon" seatProp="Lady"/>
                                    </div>
                                    <div className="lower-deck-row">
                                        <Icon icon={steeringIcon} style={{color: '#000000'}} hFlip={true} className="steer-icon hidden-steer"/>
                                        <Seat className="lower-deck-icon" seatProp="Available"/>
                                        <Seat className="lower-deck-icon" seatProp="Booked"/>
                                        <Seat className="lower-deck-icon" seatProp="Available"/>
                                        <Seat className="lower-deck-icon" seatProp="Booked"/>
                                        <Seat className="lower-deck-icon" seatProp="Lady"/>
                                        <Seat className="lower-deck-icon" seatProp="Booked"/>
                                        <Seat className="lower-deck-icon" seatProp="Lady"/>
                                        <Seat className="lower-deck-icon" seatProp="Available"/>
                                        <Seat className="lower-deck-icon" seatProp="Available"/>
                                        <Seat className="lower-deck-icon" seatProp="Available"/>
                                    </div>
                                </div>
                            </div>
                            <div className="lower-deck-rear">
                                R
                            </div>
                        </div>
                        <h2>Upper Deck</h2>
                        <div className="lower-deck-container">
                            <div className="lower-deck-front">
                                F
                            </div>
                            <div className="lower-deck-main">
                                <div className="lower-upper-deck">
                                    <div className="lower-deck-row">
                                        <Icon icon={steeringIcon} style={{color: '#000000'}} hFlip={true} className="steer-icon hidden-steer"/>
                                        <SeatUpper className="lower-deck-icon" seatProp="Available"/>
                                        <SeatUpper className="lower-deck-icon" seatProp="Booked"/>
                                        <SeatUpper className="lower-deck-icon" seatProp="Available"/>
                                        <SeatUpper className="lower-deck-icon" seatProp="Booked"/>
                                        <SeatUpper className="lower-deck-icon" seatProp="Lady"/>
                                        <SeatUpper className="lower-deck-icon" seatProp="Booked"/>
                                        <SeatUpper className="lower-deck-icon" seatProp="Lady"/>
                                        <SeatUpper className="lower-deck-icon" seatProp="Available"/>
                                        <SeatUpper className="lower-deck-icon" seatProp="Available"/>
                                        <SeatUpper className="lower-deck-icon" seatProp="Available"/>
                                    </div>
                                    <div className="lower-deck-row">
                                        <Icon icon={steeringIcon} style={{color: '#000000'}} hFlip={true} className="steer-icon hidden-steer"/>
                                        <SeatUpper className="lower-deck-icon" seatProp="Available"/>
                                        <SeatUpper className="lower-deck-icon" seatProp="Booked"/>
                                        <SeatUpper className="lower-deck-icon" seatProp="Available"/>
                                        <SeatUpper className="lower-deck-icon" seatProp="Booked"/>
                                        <SeatUpper className="lower-deck-icon" seatProp="Lady"/>
                                        <SeatUpper className="lower-deck-icon" seatProp="Booked"/>
                                        <SeatUpper className="lower-deck-icon" seatProp="Lady"/>
                                        <SeatUpper className="lower-deck-icon" seatProp="Available"/>
                                        <SeatUpper className="lower-deck-icon" seatProp="Available"/>
                                        <SeatUpper className="lower-deck-icon" seatProp="Available"/>
                                    </div>
                                </div>
                                <div className="lower-upper-deck">
                                    <div className="lower-deck-row">
                                        <Icon icon={steeringIcon} style={{color: '#000000'}} hFlip={true} className="steer-icon hidden-steer"/>
                                        <SeatUpper className="lower-deck-icon" seatProp="Available"/>
                                        <SeatUpper className="lower-deck-icon" seatProp="Booked"/>
                                        <SeatUpper className="lower-deck-icon" seatProp="Available"/>
                                        <SeatUpper className="lower-deck-icon" seatProp="Booked"/>
                                        <SeatUpper className="lower-deck-icon" seatProp="Lady"/>
                                        <SeatUpper className="lower-deck-icon" seatProp="Booked"/>
                                        <SeatUpper className="lower-deck-icon" seatProp="Lady"/>
                                        <SeatUpper className="lower-deck-icon" seatProp="Available"/>
                                        <SeatUpper className="lower-deck-icon" seatProp="Available"/>
                                        <SeatUpper className="lower-deck-icon" seatProp="Available"/>
                                    </div>
                                    <div className="lower-deck-row">
                                        <Icon icon={steeringIcon} style={{color: '#000000'}} hFlip={true} className="steer-icon hidden-steer"/>
                                        <SeatUpper className="lower-deck-icon" seatProp="Available"/>
                                        <SeatUpper className="lower-deck-icon" seatProp="Booked"/>
                                        <SeatUpper className="lower-deck-icon" seatProp="Available"/>
                                        <SeatUpper className="lower-deck-icon" seatProp="Booked"/>
                                        <SeatUpper className="lower-deck-icon" seatProp="Lady"/>
                                        <SeatUpper className="lower-deck-icon" seatProp="Booked"/>
                                        <SeatUpper className="lower-deck-icon" seatProp="Lady"/>
                                        <SeatUpper className="lower-deck-icon" seatProp="Available"/>
                                        <SeatUpper className="lower-deck-icon" seatProp="Available"/>
                                        <SeatUpper className="lower-deck-icon" seatProp="Available"/>
                                    </div>
                                </div>
                            </div>
                            <div className="lower-deck-rear">
                                R
                            </div>
                        </div>
                        <div className="seat-legend">
                            <div className="seat-legend-row">
                                <div className="seat-legend-item">
                                    <Icon icon={seatPassenger} style={{color: '#000000'}} hFlip={true} className="seat-legend-icon"/>
                                    <h4>Available Seat</h4>
                                </div>
                                <div className="seat-legend-item">
                                    <Icon icon={seatPassenger} style={{color: '#000000'}} hFlip={true} className="seat-legend-icon"/>
                                    <h4>Selected Seat</h4>
                                </div>
                                <div className="seat-legend-item">
                                    <Icon icon={seatPassenger} style={{color: '#000000'}} hFlip={true} className="seat-legend-icon"/>
                                    <h4>Booked Seat</h4>
                                </div>
                                <div className="seat-legend-item">
                                    <Icon icon={seatPassenger} style={{color: '#000000'}} hFlip={true} className="seat-legend-icon"/>
                                    <h4>Ladies Seat</h4>
                                </div>
                            </div>
                            <div className="seat-legend-row">
                                <div className="seat-legend-item">
                                    <Icon icon={seatPassenger} style={{color: '#000000'}} hFlip={true} className="seat-legend-icon"/>
                                    <h4>Available Berth</h4>
                                </div>
                                <div className="seat-legend-item">
                                    <Icon icon={seatPassenger} style={{color: '#000000'}} hFlip={true} className="seat-legend-icon"/>
                                    <h4>Selected Berth</h4>
                                </div>
                                <div className="seat-legend-item">
                                    <Icon icon={seatPassenger} style={{color: '#000000'}} hFlip={true} className="seat-legend-icon"/>
                                    <h4>Booked Berth</h4>
                                </div>
                                <div className="seat-legend-item">
                                    <Icon icon={seatPassenger} style={{color: '#000000'}} hFlip={true} className="seat-legend-icon"/>
                                    <h4>Ladies Berth</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bb2">
                        <div className="hor-section-seat-chart">
                            <p>Seat(s) Selected:</p>
                            <p>26, 27</p>
                        </div>
                        <div className="hor-section-seat-chart">
                            <p>Total Fare:</p>
                            <p>INR 780</p>
                        </div>
                        <div className="hor-div-line"></div>
                        <div className="hor-section-seat-chart">
                            <p>Boarding Point: </p>
                            <div>
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic" className="dropdown-button">
                                        <p>{this.state.boardingPoint}</p>
                                        <Icon icon={arrowDownDropCircleOutline} style={{color: '#000000'}} className="dropdown-icon"/>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className="dropdown-menu">
                                        <Dropdown.Item className="dropdown-item" onClick={() => this.onBoardingPointChangeHandler('Surat Central Bus Station')}>Surat Central Bus Station</Dropdown.Item>
                                        <Dropdown.Item className="dropdown-item" onClick={() => this.onBoardingPointChangeHandler('Surat Katargam')}>Surat Katargam</Dropdown.Item>
                                        <Dropdown.Item className="dropdown-item" onClick={() => this.onBoardingPointChangeHandler('Surat Udhna')}>Surat Udhna</Dropdown.Item>
                                        <Dropdown.Item className="dropdown-item" onClick={() => this.onBoardingPointChangeHandler('Surat Adajan Bus Stand')}>Surat Adajan Bus Stand</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                        <div className="hor-section-seat-chart">
                            <p>Dropping Point: </p>
                            <div>
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic" className="dropdown-button">
                                        <p>{this.state.droppingPoint}</p>
                                        <Icon icon={arrowDownDropCircleOutline} style={{color: '#000000'}} className="dropdown-icon"/>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className="dropdown-menu">
                                        <Dropdown.Item className="dropdown-item" onClick={() => this.onDroppingPointChangeHandler('Ahmedabad Kalupur')}>Ahmedabad Kalupur</Dropdown.Item>
                                        <Dropdown.Item className="dropdown-item" onClick={() => this.onDroppingPointChangeHandler('Ahmedabad Bapunagar')}>Ahmedabad Bapunagar</Dropdown.Item>
                                        <Dropdown.Item className="dropdown-item" onClick={() => this.onDroppingPointChangeHandler('Ahmedabad Chandkheda')}>Ahmedabad Chandkheda</Dropdown.Item>
                                        <Dropdown.Item className="dropdown-item" onClick={() => this.onDroppingPointChangeHandler('Ahmedabad Bopal')}>Ahmedabad Bopal</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                        <div className="hor-div-line"></div>
                        <div className="seat-continue-button">
                            Continue
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
