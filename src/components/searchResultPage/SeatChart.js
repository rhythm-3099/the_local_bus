import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import '../../css/components/searchResultPage/seatChart.css';

import {Dropdown} from 'react-bootstrap';
import { Icon } from '@iconify/react';
import arrowDownDropCircleOutline from '@iconify/icons-mdi/arrow-down-drop-circle-outline';
import seatPassenger from '@iconify/icons-mdi/seat-passenger';
import steeringIcon from '@iconify/icons-mdi/steering';
import bedIcon from '@iconify/icons-mdi/bed';

import Seat from './Seat';
import SeatUpper from './SeatUpper';

import { setPrice } from '../../redux/actions/priceAction';
import { setBusInfo } from '../../redux/actions/busInfoAction';

class SeatChart extends Component {

    state = {boardingPoint: 'Surat Central Bus Station', droppingPoint: 'Ahmedabad Kalupur'};

    onBoardingPointChangeHandler = (newBoardingPoint) => {
        this.setState({boardingPoint: newBoardingPoint});
    }

    onDroppingPointChangeHandler = (newDroppingPoint) => {
        this.setState({droppingPoint: newDroppingPoint});
    }

    getSeatsInfo = () => {
        let seatsArr = [...this.props.seatsArr];
        let seatsInfo = seatsArr.join(', ');
        return seatsInfo;
    }

    getPriceInfo = () => {
        let seatsArr = [...this.props.seatsArr];
        let statement = '';
        statement = `${seatsArr.length} X ${this.props.price} = ${seatsArr.length * this.props.price}`;
        return statement;
    }

    onContinueClick = () => {
        let busData = {
            ...this.props.busInfo,
            boardingPoint: this.state.boardingPoint,
            droppingPoint: this.state.droppingPoint
        };

        this.props.setBusInfo(busData);
        this.props.setPrice(this.props.price);
    }

    render() {
        return (
            <div className="seat-chart">
                <div className="seat-chart-wrapper">
                    <div className="bb1 bb">
                        <h2>Lower Deck</h2>
                        <div className="lower-deck-container">
                            <div className="lower-deck-front">
                                FRONT
                            </div>
                            <div className="lower-deck-main">
                                <div className="lower-upper-deck">
                                    <div className="lower-deck-row">
                                        <Icon icon={steeringIcon} style={{color: '#000000'}} hFlip={true} className="steer-icon"/>
                                        <Seat className="lower-deck-icon" seatProp="Available" seatNum={1}/>
                                        <Seat className="lower-deck-icon" seatProp="Available" seatNum={2}/>
                                        <Seat className="lower-deck-icon" seatProp="Available" seatNum={3}/>
                                        <Seat className="lower-deck-icon" seatProp="Available" seatNum={4}/>
                                        <Seat className="lower-deck-icon" seatProp="Available" seatNum={5}/>
                                        <Seat className="lower-deck-icon" seatProp="Available" seatNum={6}/>
                                        <Seat className="lower-deck-icon" seatProp="Available" seatNum={7}/>
                                        <Seat className="lower-deck-icon" seatProp="Available" seatNum={8}/>
                                        <Seat className="lower-deck-icon" seatProp="Available" seatNum={9}/>
                                        <Seat className="lower-deck-icon" seatProp="Available" seatNum={10}/>
                                    </div>
                                    <div className="lower-deck-row">
                                        <Icon icon={steeringIcon} style={{color: '#000000'}} hFlip={true} className="steer-icon hidden-steer"/>
                                        <Seat className="lower-deck-icon" seatProp="Available" seatNum={11}/>
                                        <Seat className="lower-deck-icon" seatProp="Available" seatNum={12}/>
                                        <Seat className="lower-deck-icon" seatProp="Available" seatNum={13}/>
                                        <Seat className="lower-deck-icon" seatProp="Available" seatNum={14}/>
                                        <Seat className="lower-deck-icon" seatProp="Available" seatNum={15}/>
                                        <Seat className="lower-deck-icon" seatProp="Available" seatNum={16}/>
                                        <Seat className="lower-deck-icon" seatProp="Available" seatNum={17}/>
                                        <Seat className="lower-deck-icon" seatProp="Available" seatNum={18}/>
                                        <Seat className="lower-deck-icon" seatProp="Available" seatNum={19}/>
                                        <Seat className="lower-deck-icon" seatProp="Available" seatNum={20}/>
                                    </div>
                                </div>
                                <div className="lower-upper-deck">
                                    <div className="lower-deck-row">
                                        <Icon icon={steeringIcon} style={{color: '#000000'}} hFlip={true} className="steer-icon hidden-steer"/>
                                        <Seat className="lower-deck-icon" seatProp="Available" seatNum={21}/>
                                        <Seat className="lower-deck-icon" seatProp="Booked" seatNum={22}/>
                                        <Seat className="lower-deck-icon" seatProp="Available" seatNum={23}/>
                                        <Seat className="lower-deck-icon" seatProp="Available" seatNum={24}/>
                                        <Seat className="lower-deck-icon" seatProp="Lady" seatNum={25}/>
                                        <Seat className="lower-deck-icon" seatProp="Available" seatNum={26}/>
                                        <Seat className="lower-deck-icon" seatProp="Available" seatNum={27}/>
                                        <Seat className="lower-deck-icon" seatProp="Lady" seatNum={28}/>
                                        <Seat className="lower-deck-icon" seatProp="Lady" seatNum={29}/>
                                        <Seat className="lower-deck-icon" seatProp="Lady" seatNum={30}/>
                                    </div>
                                    <div className="lower-deck-row">
                                        <Icon icon={steeringIcon} style={{color: '#000000'}} hFlip={true} className="steer-icon hidden-steer"/>
                                        <Seat className="lower-deck-icon" seatProp="Available" seatNum={31}/>
                                        <Seat className="lower-deck-icon" seatProp="Booked" seatNum={32}/>
                                        <Seat className="lower-deck-icon" seatProp="Available" seatNum={33}/>
                                        <Seat className="lower-deck-icon" seatProp="Booked" seatNum={34}/>
                                        <Seat className="lower-deck-icon" seatProp="Lady" seatNum={35}/>
                                        <Seat className="lower-deck-icon" seatProp="Booked" seatNum={36}/>
                                        <Seat className="lower-deck-icon" seatProp="Lady" seatNum={37}/>
                                        <Seat className="lower-deck-icon" seatProp="Available" seatNum={38}/>
                                        <Seat className="lower-deck-icon" seatProp="Available" seatNum={39}/>
                                        <Seat className="lower-deck-icon" seatProp="Available" seatNum={40}/>
                                    </div>
                                </div>
                            </div>
                            <div className="lower-deck-rear">
                                REAR
                            </div>
                        </div>
                        <h2>Upper Deck</h2>
                        <div className="lower-deck-container">
                            <div className="lower-deck-front">
                                FRONT
                            </div>
                            <div className="lower-deck-main">
                                <div className="lower-upper-deck">
                                    <div className="lower-deck-row">
                                        <Icon icon={steeringIcon} style={{color: '#000000'}} hFlip={true} className="steer-icon hidden-steer"/>
                                        <SeatUpper className="lower-deck-icon" seatProp="Available" seatNum={41}/>
                                        <SeatUpper className="lower-deck-icon" seatProp="Booked" seatNum={42}/>
                                        <SeatUpper className="lower-deck-icon" seatProp="Available" seatNum={43}/>
                                        <SeatUpper className="lower-deck-icon" seatProp="Booked" seatNum={44}/>
                                        <SeatUpper className="lower-deck-icon" seatProp="Lady" seatNum={45}/>
                                        <SeatUpper className="lower-deck-icon" seatProp="Booked" seatNum={46}/>
                                        <SeatUpper className="lower-deck-icon" seatProp="Lady" seatNum={47}/>
                                        <SeatUpper className="lower-deck-icon" seatProp="Available" seatNum={48}/>
                                        <SeatUpper className="lower-deck-icon" seatProp="Available" seatNum={49}/>
                                        <SeatUpper className="lower-deck-icon" seatProp="Available" seatNum={50}/>
                                    </div>
                                    <div className="lower-deck-row">
                                        <Icon icon={steeringIcon} style={{color: '#000000'}} hFlip={true} className="steer-icon hidden-steer"/>
                                        <SeatUpper className="lower-deck-icon" seatProp="Available" seatNum={51}/>
                                        <SeatUpper className="lower-deck-icon" seatProp="Booked" seatNum={52}/>
                                        <SeatUpper className="lower-deck-icon" seatProp="Available" seatNum={53}/>
                                        <SeatUpper className="lower-deck-icon" seatProp="Booked" seatNum={54}/>
                                        <SeatUpper className="lower-deck-icon" seatProp="Lady" seatNum={55}/>
                                        <SeatUpper className="lower-deck-icon" seatProp="Booked" seatNum={56}/>
                                        <SeatUpper className="lower-deck-icon" seatProp="Lady" seatNum={57}/>
                                        <SeatUpper className="lower-deck-icon" seatProp="Available" seatNum={58}/>
                                        <SeatUpper className="lower-deck-icon" seatProp="Available" seatNum={59}/>
                                        <SeatUpper className="lower-deck-icon" seatProp="Available" seatNum={60}/>
                                    </div>
                                </div>
                                <div className="lower-upper-deck">
                                    <div className="lower-deck-row">
                                        <Icon icon={steeringIcon} style={{color: '#000000'}} hFlip={true} className="steer-icon hidden-steer"/>
                                        <SeatUpper className="lower-deck-icon" seatProp="Available" seatNum={61}/>
                                        <SeatUpper className="lower-deck-icon" seatProp="Booked" seatNum={62}/>
                                        <SeatUpper className="lower-deck-icon" seatProp="Available" seatNum={63}/>
                                        <SeatUpper className="lower-deck-icon" seatProp="Booked" seatNum={64}/>
                                        <SeatUpper className="lower-deck-icon" seatProp="Lady" seatNum={65}/>
                                        <SeatUpper className="lower-deck-icon" seatProp="Booked" seatNum={66}/>
                                        <SeatUpper className="lower-deck-icon" seatProp="Lady" seatNum={67}/>
                                        <SeatUpper className="lower-deck-icon" seatProp="Available" seatNum={68}/>
                                        <SeatUpper className="lower-deck-icon" seatProp="Available" seatNum={69}/>
                                        <SeatUpper className="lower-deck-icon" seatProp="Available" seatNum={70}/>
                                    </div>
                                    <div className="lower-deck-row">
                                        <Icon icon={steeringIcon} style={{color: '#000000'}} hFlip={true} className="steer-icon hidden-steer"/>
                                        <SeatUpper className="lower-deck-icon" seatProp="Available" seatNum={71}/>
                                        <SeatUpper className="lower-deck-icon" seatProp="Booked" seatNum={72}/>
                                        <SeatUpper className="lower-deck-icon" seatProp="Available" seatNum={73}/>
                                        <SeatUpper className="lower-deck-icon" seatProp="Booked" seatNum={74}/>
                                        <SeatUpper className="lower-deck-icon" seatProp="Lady" seatNum={75}/>
                                        <SeatUpper className="lower-deck-icon" seatProp="Booked" seatNum={76}/>
                                        <SeatUpper className="lower-deck-icon" seatProp="Lady" seatNum={77}/>
                                        <SeatUpper className="lower-deck-icon" seatProp="Available" seatNum={78}/>
                                        <SeatUpper className="lower-deck-icon" seatProp="Available" seatNum={79}/>
                                        <SeatUpper className="lower-deck-icon" seatProp="Available" seatNum={80}/>
                                    </div>
                                </div>
                            </div>
                            <div className="lower-deck-rear">
                                REAR
                            </div>
                        </div>
                        <div className="seat-legend">
                            <div className="seat-legend-row">
                                <div className="seat-legend-item">
                                    <Icon icon={seatPassenger} style={{color: '#acacac'}} hFlip={true} className="seat-legend-icon"/>
                                    <h4>Available Seat</h4>
                                </div>
                                <div className="seat-legend-item">
                                    <Icon icon={seatPassenger} style={{color: '#42FF49'}} hFlip={true} className="seat-legend-icon"/>
                                    <h4>Selected Seat</h4>
                                </div>
                                <div className="seat-legend-item">
                                    <Icon icon={seatPassenger} style={{color: '#2BA6FF'}} hFlip={true} className="seat-legend-icon"/>
                                    <h4>Booked Seat</h4>
                                </div>
                                <div className="seat-legend-item">
                                    <Icon icon={seatPassenger} style={{color: '#F964C6'}} hFlip={true} className="seat-legend-icon"/>
                                    <h4>Ladies Seat</h4>
                                </div>
                            </div>
                            <div className="seat-legend-row">
                                <div className="seat-legend-item">
                                    <Icon icon={bedIcon} style={{color: '#acacac'}} hFlip={true} className="seat-legend-icon"/>
                                    <h4>Available Berth</h4>
                                </div>
                                <div className="seat-legend-item">
                                    <Icon icon={bedIcon} style={{color: '#42FF49'}} hFlip={true} className="seat-legend-icon"/>
                                    <h4>Selected Berth</h4>
                                </div>
                                <div className="seat-legend-item">
                                    <Icon icon={bedIcon} style={{color: '#2BA6FF'}} hFlip={true} className="seat-legend-icon"/>
                                    <h4>Booked Berth</h4>
                                </div>
                                <div className="seat-legend-item">
                                    <Icon icon={bedIcon} style={{color: '#F964C6'}} hFlip={true} className="seat-legend-icon"/>
                                    <h4>Ladies Berth</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bb2">
                        <div className="hor-section-seat-chart">
                            <p>Seat(s) Selected:</p>
                            <p>{this.getSeatsInfo()}</p>
                        </div>
                        <div className="hor-section-seat-chart">
                            <p>Total Fare:</p>
                            <p>{this.getPriceInfo()}</p>
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
                        {/* <div className="seat-continue-button" onClick={this.onContinueClickHandler}>
                            Continue
                        </div> */}
                        <Link to="/details" className="seat-continue-button" onClick={this.onContinueClick}>
                            Continue
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        seatsArr: state.seat.seats 
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setPrice: (price) => dispatch(setPrice(price)),
        setBusInfo: (busData) => dispatch(setBusInfo(busData)) 
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SeatChart);