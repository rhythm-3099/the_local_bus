import React, { Component } from 'react';

import '../css/pages/paymentGateway.css';
import '../css/pages/personalDetailsPage.css';

import PaymentSummary from '../components/personalDetailsPage/PaymentSummary';

export default class PaymentGateway extends Component {

    onOptionClick = () => {
        this.props.history.push('/final');
    }



    render() {
        return (
            <div>
                <div className="personal-details-page-container">
                    <div className="personal-container-1 no-cent">
                        <div className="personal-info-wrapper">
                            <div className="personal-info-det">
                                <h2>Personal Information</h2>
                                <div className="passenger-info-box">
                                    <div className="passenger">
                                        <h4>Alice (F,20) | Seat 23</h4>
                                    </div>
                                    <div className="div-line-info"></div>
                                    <div className="passenger">
                                        <h4>Bob (M,20) | Seat 22</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="personal-info-det">
                                <h2>Contact Details</h2>
                                <div className="passenger-info-box-hor">
                                    <div>
                                        <h4>Email: alice@gmail.com</h4>
                                    </div>
                                    <div>
                                        <h4>Mobile Number: 0000000000</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="personal-info-det">
                                <h2>Select your Payment Option</h2>
                                <div className="passenger-info-box-pay">
                                    <ul className="payment-option-list">
                                        <li onClick={this.onOptionClick}>Debit Card</li>
                                        <li onClick={this.onOptionClick}>Credit Card</li>
                                        <li onClick={this.onOptionClick}>UPI</li>
                                        <li onClick={this.onOptionClick}>Net Banking</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="personal-container-2">
                        <PaymentSummary />
                    </div>
                </div>
            </div>
        )
    }
}
