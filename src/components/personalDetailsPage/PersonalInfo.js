import React, { Component } from 'react';
import { connect } from 'react-redux';

import PersonalInfoCard from './PersonalInfoCard'

import '../../css/components/personalDetailsPage/personalInfoCard.css';

class PersonalInfo extends Component {

    getPersonalInfoCards = () => {
        let seatsArr = [...this.props.seats];
        let cards = seatsArr.map((seat, index) => {
            return (
                <PersonalInfoCard 
                    key={index}
                    passengerNum={index+1}
                    seatNum={seat}
                    index={index}
                />
            )
        });
        return cards;
    }


    render() {
        return (
            <div className="personal-info-list-wrapper">
                <h2>Personal Information</h2>
                {/* <PersonalInfoCard passengerNum="1" seatNum="23" index={0}/>
                <PersonalInfoCard passengerNum="2" seatNum="24" index={1}/>
                <PersonalInfoCard passengerNum="3" seatNum="25" index={2}/> */}
                {this.getPersonalInfoCards()}
            </div>
        )
    }
}

const MapStateToProps = (state) => {
    return {
        seats: state.seat.seats
    }
}

export default connect(
    MapStateToProps,
    null
)(PersonalInfo)
