import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../css/pages/paymentGateway.css';
import '../css/pages/personalDetailsPage.css';
import '../css/pages/common.css';

import { Icon } from '@iconify/react';
import homeIcon from '@iconify/icons-mdi/home';

import PaymentSummary from '../components/personalDetailsPage/PaymentSummary';

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

    goToThisNavLink = (link) => {
        this.props.history.push(link);
    }

    render() {
        return (
            <div>
                <div className="personal-details-page-container">
                    <div className="personal-container-1 no-cent">
                        <div className="personal-info-wrapper">
                            <div className="search-navigator">
                                <Icon icon={homeIcon} style={{color: '#000000'}} className="search-navigator-icon" onClick={() => this.goToThisNavLink("/")}/>
                                <span className="search-navigator-divider">/</span>
                                <span className="search-navigator-text" onClick={() => this.goToThisNavLink("/search")}>Search Bus</span>
                                <span className="search-navigator-divider">/</span>
                                <span className="search-navigator-text" onClick={() => this.goToThisNavLink("/details")}>Details</span>
                                <span className="search-navigator-divider">/</span>
                                <span className="search-navigator-text search-navigator-last-text">Payment</span>
                            </div>
                            <div className="personal-info-det">
                                <h2>Personal Information</h2>
                                <div className="passenger-info-box-wrapper">
                                    <div className="passenger-info-box">
                                        {this.getPassengersInfo()}
                                    </div>
                                </div>
                            </div>
                            <div className="personal-info-det">
                                <h2>Contact Details</h2>
                                <div className="passenger-info-box-hor-wrapper">
                                    <div className="passenger-info-box-hor">
                                        <div>
                                            <h4>Email: {this.props.contact.email}</h4>
                                        </div>
                                        <div>
                                            <h4>Mobile Number: {this.props.contact.phoneNumber}</h4>
                                        </div>
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
