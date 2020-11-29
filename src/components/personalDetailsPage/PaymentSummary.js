import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../../css/components/personalDetailsPage/paymentSummary.css';

import { Icon } from '@iconify/react';
import busIcon from '@iconify/icons-mdi/bus';
import mapMarkerRadius from '@iconify/icons-mdi/map-marker-radius';

import { setFinalPrice } from '../../redux/actions/priceAction';
class PaymentSummary extends Component {

    getBasicFare = () => {
        return this.props.price * this.props.seats.length;
    }

    getTollFare = () => {
        return 40;
    }

    getReservationFees = () => {
        return this.props.seats.length * 3;
    }

    getGstFees = () => {
        return Math.floor(this.getBasicFare() * 0.05);
    }

    getTotal = () => {
        return this.getBasicFare() + 
            this.getTollFare() + 
            this.getReservationFees() + 
            this.getGstFees();
    }

    getDiscount = () => {
        return Math.floor(this.getTotal() * 0.1);
    }

    getFinalFare = () => {
        const finalPrice = this.getTotal() - this.getDiscount();
        this.props.setFinalPrice(finalPrice)
        return finalPrice;
    }

    render() {
        return (
            <div className="payment-summary">
                <div className="payment-summary-wrapper">
                    <div className="payment-summary-component">
                        <Icon icon={busIcon} style={{color: '#000000'}} className="icon-payment"/>
                        <div>
                            <h4>{this.props.busInfo.busName}</h4>
                            <p>{this.props.busInfo.from} - {this.props.busInfo.to} {this.props.busInfo.busType}</p>
                            <p>Bus No. GJ -01-AB-1900</p>
                            <p>Seats Available: {this.props.busInfo.seatsAvailable}</p>
                        </div>
                    </div>
                    <div className="payment-summary-div-hor"></div>
                    <div className="payment-summary-component">
                        <div className="payment-places-wrapper">
                            <div className="payment-summary-subcomponent">
                                
                                <Icon icon={mapMarkerRadius} style={{color: '#000000'}} className="icon-payment"/>
                                <div>
                                    <h4>{this.props.busInfo.from}</h4>
                                    <p>{this.props.busInfo.boardingPoint}</p>
                                    <p>{this.props.busInfo.fromTime} 27th Nov. 2020</p>
                                </div>
                            </div>
                            <div className="payment-summary-vert-line"></div>
                            <div className="payment-summary-subcomponent">
                                <Icon icon={mapMarkerRadius} style={{color: '#000000'}} className="icon-payment"/>
                                <div>
                                    <h4>{this.props.busInfo.to}</h4>
                                    <p>{this.props.busInfo.droppingPoint}</p>
                                    <p>{this.props.busInfo.toTime}, 28th Nov. 2020</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="payment-summary-div-hor"></div>
                    <div className="payment-summary-vert ">
                        <h4 className="fare-title">Fare Details</h4>
                        <div className="payment-summary-component">
                            <div className="payment-summary-vert-new">
                                <p>Basic Fare</p>
                                <p>Toll Fare</p>
                                <p>Reservation Fee</p>
                                <p>GST</p>
                            </div>
                            <div className="payment-summary-vert-new">
                                <p>{this.getBasicFare()}</p>
                                <p>{this.getTollFare()}</p>
                                <p>{this.getReservationFees()}</p>
                                <p>{this.getGstFees()}</p>
                            </div>
                        </div>
                        <div className="payment-summary-div-hor"></div>
                        <div className="payment-summary-component">
                            <div className="payment-summary-vert-new">
                                <p>Total</p>
                                <p>Discount</p>
                            </div>
                            <div className="payment-summary-vert-new">
                                <p>{this.getTotal()}</p>
                                <p>-{this.getDiscount()}</p>
                            </div>
                        </div>
                        <div className="payment-summary-div-hor"></div>
                        <div className="payment-summary-component centering">
                            <h4>Final Fare: </h4>
                            <h4>INR {this.getFinalFare()}</h4>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        price: state.price.price,
        seats: state.seat.seats,
        busInfo: state.bus.busData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFinalPrice: (finalPrice) => dispatch(setFinalPrice(finalPrice))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PaymentSummary);