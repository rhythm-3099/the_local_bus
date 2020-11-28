import React, { Component } from 'react';

import '../../css/components/personalDetailsPage/paymentSummary.css';

import { Icon } from '@iconify/react';
import busIcon from '@iconify/icons-mdi/bus';
import mapMarkerRadius from '@iconify/icons-mdi/map-marker-radius';

export default class PaymentSummary extends Component {
    render() {
        return (
            <div className="payment-summary">
                <div className="payment-summary-wrapper">
                    <div className="payment-summary-component">
                        <Icon icon={busIcon} style={{color: '#000000'}} className="icon-payment"/>
                        <div>
                            <h4>1900SRTNKTACSLP</h4>
                            <p>Surat - Nakhtrana Sleeper</p>
                            <p>Bus No. GJ -01-AB-1900</p>
                            <p>Seats: 23</p>
                        </div>
                    </div>
                    <div className="payment-summary-div-hor"></div>
                    <div className="payment-summary-component">
                        <div className="payment-places-wrapper">
                            <div className="payment-summary-subcomponent">
                                
                                <Icon icon={mapMarkerRadius} style={{color: '#000000'}} className="icon-payment"/>
                                <div>
                                    <h4>Surat</h4>
                                    <p>Central Bus Depot</p>
                                    <p>11:30 PM, 27th Nov. 2020</p>
                                </div>
                            </div>
                            <div className="payment-summary-vert-line"></div>
                            <div className="payment-summary-subcomponent">
                                <Icon icon={mapMarkerRadius} style={{color: '#000000'}} className="icon-payment"/>
                                <div>
                                    <h4>Ahmedabad</h4>
                                    <p>Kalupur</p>
                                    <p>4:30 AM, 28th Nov. 2020</p>
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
                                <p>460</p>
                                <p>19</p>
                                <p>5</p>
                                <p>19</p>
                            </div>
                        </div>
                        <div className="payment-summary-div-hor"></div>
                        <div className="payment-summary-component">
                            <div className="payment-summary-vert-new">
                                <p>Total</p>
                                <p>Discount</p>
                            </div>
                            <div className="payment-summary-vert-new">
                                <p>503</p>
                                <p>-46</p>
                            </div>
                        </div>
                        <div className="payment-summary-div-hor"></div>
                        <div className="payment-summary-component centering">
                            <h4>Final Fare: </h4>
                            <h4>INR 457</h4>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
