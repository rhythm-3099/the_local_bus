import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../css/pages/finalpage.css';

import { Icon } from '@iconify/react';
import checkCircle from '@iconify/icons-mdi/check-circle';

class FinalPage extends Component {

    homepageButtonClickHandler = () => {
        this.props.history.push('/');
    }

    getSeats = () => {
        let seatsArr = [...this.props.seats];
        let seatsInfo = seatsArr.join(', ');
        return seatsInfo;
    }

    getBoardingDate = () => {
        let date = this.props.searchInfo.fromDate;
        console.log(date);
        let dd = String(date.getDate()).padStart(2, '0');
        let mm = String(date.getMonth() + 1).padStart(2, '0'); 
        let yyyy = date.getFullYear();

        date = mm + '/' + dd + '/' + yyyy;

        return date;
    }

    getPassengerInfo = () => {
        let passengersArr = this.props.passengers;
        let seats = this.props.seats;

        let passengerInfo = passengersArr.map((passenger, index) => {
            const srNum = index + 1;
            const name = passenger.name;
            const seatNum = seats[index]; 
            const age = passenger.age;
            const ageType = age >= 18 ? "Adult" : "Child";
            const gender = passenger.gender;

            return(
                <tr className="table-row" key={srNum}>
                    <td>{srNum}</td>
                    <td>{name}</td>
                    <td>{seatNum}</td>
                    <td>{age}</td>
                    <td>{ageType}</td>
                    <td>{gender}</td>
                </tr>
            )
        });

        return passengerInfo;
    }

    render() {
        return (
            <div className="final-page">
                <div className="final-page-wrapper">
                    <div className="ticket-confirmed-wrapper">
                        <Icon icon={checkCircle} style={{color: '#27ae60'}} className="ticket-confirmed-icon"/>
                        <h1>Ticket Confirmed</h1>
                    </div>
                    <div className="ticket-details-wrapper">
                        <div className="ticket-details-section">
                            <h3>Ticket Details</h3>
                            <div className="ticket-details-container">
                                <div className="ticket-detail-box">
                                    <h4>PNR</h4>
                                    <div className="hor-line-detail-box"></div>
                                    <p>G37170342</p>
                                </div>
                                <div className="ticket-detail-box">
                                    <h4>Boarding Date</h4>
                                    <div className="hor-line-detail-box"></div>
                                    <p>{this.getBoardingDate()}</p>
                                </div>
                                <div className="ticket-detail-box">
                                    <h4>Boarding Time</h4>
                                    <div className="hor-line-detail-box"></div>
                                    <p>{this.props.busInfo.fromTime}</p>
                                </div>
                                <div className="ticket-detail-box">
                                    <h4>Boarding Point</h4>
                                    <div className="hor-line-detail-box"></div>
                                    <p>{this.props.busInfo.boardingPoint}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ticket-details-wrapper">
                        <div className="ticket-details-section">
                            <h3>Bus Details</h3>
                            <div className="ticket-details-container">
                                <div className="ticket-detail-box">
                                    <h4>Journey From</h4>
                                    <div className="hor-line-detail-box"></div>
                                    <p>{this.props.busInfo.from}</p>
                                </div>
                                <div className="ticket-detail-box">
                                    <h4>Journey To</h4>
                                    <div className="hor-line-detail-box"></div>
                                    <p>{this.props.busInfo.to}</p>
                                </div>
                                <div className="ticket-detail-box">
                                    <h4>Service Start Place</h4>
                                    <div className="hor-line-detail-box"></div>
                                    <p>Surat</p>
                                </div>
                                <div className="ticket-detail-box">
                                    <h4>Service End Place</h4>
                                    <div className="hor-line-detail-box"></div>
                                    <p>Gandhinagar</p>
                                </div>
                            </div>
                            <div className="ticket-details-container">
                                <div className="ticket-detail-box">
                                    <h4>Class</h4>
                                    <div className="hor-line-detail-box"></div>
                                    <p>{this.props.busInfo.busType}</p>
                                </div>
                                <div className="ticket-detail-box">
                                    <h4>No. of Seats</h4>
                                    <div className="hor-line-detail-box"></div>
                                    <p>{this.props.seats.length}</p>
                                </div>
                                <div className="ticket-detail-box">
                                    <h4>Booked Seats</h4>
                                    <div className="hor-line-detail-box"></div>
                                    <p>{this.getSeats()}</p>
                                </div>
                                <div className="ticket-detail-box">
                                    <h4>Trip Code</h4>
                                    <div className="hor-line-detail-box"></div>
                                    <p>GSRTC:0715SRTVJPEXP51</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ticket-details-wrapper">
                        <div className="ticket-details-section">
                            <table className="passenger-table">
                                <thead className="table-head">
                                    <tr className="table-row">
                                        <th>Sr. No.</th>
                                        <th>Name</th>
                                        <th>Seat No.</th>
                                        <th>Age</th>
                                        <th>Adult/Child</th>
                                        <th>Gender</th>
                                    </tr>
                                </thead>
                                <div className="hor-line-passenger-table"></div>
                                <tbody className="table-head">
                                    {this.getPassengerInfo()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="ticket-details-wrapper">
                        <div className="ticket-details-section">
                            <div className="fare-box">
                                <h3>Total Chargeable fare </h3>
                                <h3>INR {this.props.finalFare}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="ticket-details-wrapper wrapper-button final-buttons-wrapper">
                        <div className="final-home-button" onClick={this.homepageButtonClickHandler}>
                            Print Ticket
                        </div>
                        <div className="final-home-button" onClick={this.homepageButtonClickHandler}>
                            Download Ticket
                        </div>
                        <div className="final-home-button" onClick={this.homepageButtonClickHandler}>
                            Back to Homepage
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        busInfo: state.bus.busData,
        price: state.price.price,
        finalFare: state.price.finalPrice,
        seats: state.seat.seats,
        passengers: state.passenger.passengers,
        searchInfo: state.searchInfo.searchInfo
    }
}

export default connect(
    mapStateToProps,
    null
)(FinalPage);