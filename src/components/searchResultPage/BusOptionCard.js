import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../../css/components/searchResultPage/busOptionCard.css';

import { Icon    } from '@iconify/react';
import currencyInr from '@iconify/icons-mdi/currency-inr';
import starIcon from '@iconify/icons-mdi/star';
import mapMarker from '@iconify/icons-mdi/map-marker';
import clockTimeFourOutline from '@iconify/icons-mdi/clock-time-four-outline';
import arrowReturnRight from '@iconify/icons-bi/arrow-return-right';
import arrowDown from '@iconify/icons-mdi/arrow-down';
import wifiIcon from '@iconify/icons-mdi/wifi';
import toiletIcon from '@iconify/icons-mdi/toilet';
import bxBlanket from '@iconify/icons-bx/bx-blanket';
import deskLamp from '@iconify/icons-mdi/desk-lamp';
import medicalBag from '@iconify/icons-mdi/medical-bag';
import fanIcon from '@iconify/icons-mdi/fan';
import lotionPlusOutline from '@iconify/icons-mdi/lotion-plus-outline';
import fireExtinguisher from '@iconify/icons-mdi/fire-extinguisher';
import evStation from '@iconify/icons-mdi/ev-station';
import newspaperVariantMultipleOutline from '@iconify/icons-mdi/newspaper-variant-multiple-outline';
import foodIcon from '@iconify/icons-mdi/food';
import waterIcon from '@iconify/icons-mdi/water';
import speedometerIcon from '@iconify/icons-mdi/speedometer';
import SeatChart from '../searchResultPage/SeatChart';
import Pillow from '../../static/images/pillow.png'

import { removeAllSeats } from '../../redux/actions/seatAction';
import { removeBusInfo } from '../../redux/actions/busInfoAction';

class BusOptionCard extends Component {

    state= {viewBusEnable: false};

    viewBusClickHandler = () => {
        this.setState({viewBusEnable: !this.state.viewBusEnable})
    }

    mouseLeftHandler = () => {
        this.props.removeAllSeats();
        this.props.removeBusInfo();
        this.setState({viewBusEnable: false});
    }

    getSeatChart = () => {
        let seatChart = null;

        let busInfo = {
            busName: this.props.busName,
            busType: this.props.busType,
            rating: this.props.rating,
            from: this.props.from,
            to: this.props.to,
            duration: this.props.duration,
            origin: this.props.origin,
            destination: this.props.destination,
            price: this.props.price,
            via: this.props.via,
            seatsAvailable: this.props.seatsAvailable,
            fromTime: this.props.fromTime,
            toTime: this.props.toTime
        };

        if(this.state.viewBusEnable) {
            seatChart = <SeatChart 
                price={this.props.price}
                busInfo={busInfo}
            />
        }
        return seatChart;
    }




    render() {
        return (
            <div className="bus-card" onMouseLeave={this.mouseLeftHandler}>
                <div className="bus-card-wrapper">
                    <div className="bus-card-section">
                        <h3>{this.props.busName}</h3>
                        <h4>{this.props.busType}</h4>
                        <div className="star-button">
                            <Icon icon={starIcon} style={{color: '#000000'}} />
                            <h4>{this.props.rating}</h4>
                        </div>
                    </div>
                    <div className="bus-card-section">
                        <div className="bus-card-subsection">
                            <Icon icon={mapMarker} style={{color: '#000000'}} />
                            <h3>{this.props.to}</h3>
                        </div>
                        <div className="bus-card-subsection">
                            <div className="vertical-line"></div>
                            <h4 className="bus-time">{this.props.duration}</h4>
                        </div>
                        <div className="bus-card-subsection">
                            <Icon icon={mapMarker} style={{color: '#000000'}} />
                            <h3>{this.props.to}</h3>
                        </div>
                    </div>
                    <div className="bus-card-section">
                        <div className="bus-card-subsection">
                            <Icon icon={clockTimeFourOutline} style={{color: '#000000'}} />
                            <h4>{this.props.fromTime}</h4>
                        </div>
                        <div className="bus-card-subsection">
                            <Icon icon={clockTimeFourOutline} style={{color: '#000000'}} />
                            <h4>{this.props.toTime}</h4>
                        </div>
                    </div>
                    <div className="bus-card-section">
                        <div className="bus-card-subsection-ver">
                            <h3>Origin</h3>
                            <div className="bus-card-subsection">
                                <Icon icon={arrowReturnRight} style={{color: '#000000'}} />
                                <h4>{this.props.origin}</h4>
                            </div>
                        </div>
                        <div className="bus-card-subsection-ver">
                            <h3>Destination</h3>
                            <div className="bus-card-subsection">
                                <Icon icon={arrowReturnRight} style={{color: '#000000'}} />
                                <h4>{this.props.destination}</h4>
                            </div>
                        </div>
                    </div>
                    <div className="bus-card-section">
                        <h2>
                            <Icon icon={currencyInr} style={{color: '#000000'}} />
                            <span className="bus-price">{this.props.price}</span>
                        </h2>
                        <div className="view-seats-wrapper">
                            <div className="view-seats-button" 
                                onClick={this.viewBusClickHandler}
                            >
                                View Seats
                            </div>
                            <h5>{this.props.seatsAvailable} seats available</h5>
                        </div>
                    </div>
                    
                </div>
                <div className="bus-card-bottom-info">
                    <p>[via-{this.props.via}]</p>
                    <div className="amenities-wrapper">
                        <h5 className="amen-head">Ameneties</h5>
                        <Icon icon={arrowDown} style={{color: '#000000'}} className="arrow-down-amen"/>
                        <div className="amenities-container">
                            <div className="amenities-section">
                                <div className="amenity">
                                    <Icon icon={mapMarker} style={{color: '#000000'}} />
                                    <h5>Live Bus Tracking</h5>
                                </div>
                                <div className="amenity">
                                    <Icon icon={wifiIcon} style={{color: '#000000'}} />
                                    <h5>Wifi</h5>
                                </div>
                                <div className="amenity">
                                    <Icon icon={toiletIcon} style={{color: '#000000'}} />
                                    <h5>Washroom</h5>
                                </div>
                                <div className="amenity">
                                    <Icon icon={bxBlanket} style={{color: '#000000'}} />
                                    <h5>Blanket</h5>
                                </div>
                                <div className="amenity">
                                    <Icon icon={deskLamp} style={{color: '#000000'}} />
                                    <h5>Reading Light</h5>
                                </div>
                            </div>
                            <div className="amenities-section">
                                <div className="amenity">
                                    <Icon icon={medicalBag} style={{color: '#000000'}} />
                                    <h5>First Aid</h5>
                                </div>
                                <div className="amenity">
                                    <Icon icon={fanIcon} style={{color: '#000000'}} />
                                    <h5>Fan</h5>
                                </div>
                                <div className="amenity">
                                    <Icon icon={lotionPlusOutline} style={{color: '#000000'}} />
                                    <h5>Hand Sanitizer</h5>
                                </div>
                                <div className="amenity">
                                    <Icon icon={fireExtinguisher} style={{color: '#000000'}} />
                                    <h5>Fire Extinguisher</h5>
                                </div>
                                <div className="amenity">
                                    <Icon icon={evStation} style={{color: '#000000'}} />
                                    <h5>Charging Point</h5>
                                </div>
                            </div>
                            <div className="amenities-section">
                                <div className="amenity">
                                    <Icon icon={newspaperVariantMultipleOutline} style={{color: '#000000'}} />
                                    <h5>Newspaper</h5>
                                </div>
                                <div className="amenity">
                                    {/* <Icon icon={mapMarker} style={{color: '#000000'}} /> */}
                                    <img src={Pillow} alt="pillow" className="pillow-icon"/>
                                    <h5>Pillow</h5>
                                </div>
                                <div className="amenity">
                                    <Icon icon={foodIcon} style={{color: '#000000'}} />
                                    <h5>Snacks</h5>
                                </div>
                                <div className="amenity">
                                    <Icon icon={waterIcon} style={{color: '#000000'}} />
                                    <h5>Water Bottles</h5>
                                </div>
                                <div className="amenity">
                                    <Icon icon={speedometerIcon} style={{color: '#000000'}} />
                                    <h5>No Stop</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {this.getSeatChart()}
                
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeAllSeats: () => dispatch(removeAllSeats()),
        removeBusInfo: () => dispatch(removeBusInfo())
    }
}

export default connect(
    null,
    mapDispatchToProps
)(BusOptionCard);