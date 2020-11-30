import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../css/pages/paymentGateway.css';
import '../css/pages/personalDetailsPage.css';

import PaymentSummary from '../components/personalDetailsPage/PaymentSummary';
import { InfoSharp } from '@material-ui/icons';

class PaymentGateway extends Component {

    onOptionClick = () => {
        this.props.history.push('/final');
    }

    getPassengersInfo = () => {
        let seatsArr = this.props.seats;
        let info = seatsArr.map((seat, index) => {
            let name = this.props.passengers[index].name;
            let age = this.props.passengers[index].age;
            let gender = this.props.passengers[index].gender;
            if(index !== seatsArr.length-1){
                return (
                    <div key={index}>
                        <div className="passenger">
                            <h4>
                                {name} ({gender.toUpperCase()[0]}, {age})
                            </h4>
                        </div>
                        <div className="div-line-info"></div>
                    </div>
                )
            } else {
                return(
                    <div className="passenger" key={index}>
                        <h4>
                            {name} ({gender.toUpperCase()[0]}, {age})
                        </h4>
                    </div>
                )
            }
        })
        return info;
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
                                    {/* <div className="passenger">
                                        <h4>Alice (F,20) | Seat 23</h4>
                                    </div>
                                    <div className="div-line-info"></div>
                                    <div className="passenger">
                                        <h4>Bob (M,20) | Seat 22</h4>
                                    </div> */}
                                    {this.getPassengersInfo()}
                                </div>
                            </div>
                            <div className="personal-info-det">
                                <h2>Contact Details</h2>
                                <div className="passenger-info-box-hor">
                                    <div>
                                        <h4>Email: {this.props.contact.email}</h4>
                                    </div>
                                    <div>
                                        <h4>Mobile Number: {this.props.contact.phoneNumber}</h4>
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

const mapStateToProps = (state) => {
    return {
        contact: state.contact.contact,
        seats: state.seat.seats,
        passengers: state.passenger.passengers
    }
}

// const mapDispatchToProps = () => {

// }

export default connect(
    mapStateToProps,
    null
)(PaymentGateway);
