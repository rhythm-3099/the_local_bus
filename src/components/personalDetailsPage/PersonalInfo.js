import React, { Component } from 'react'
import PersonalInfoCard from './PersonalInfoCard'

import '../../css/components/personalDetailsPage/personalInfoCard.css';

export default class PersonalInfo extends Component {
    render() {
        return (
            <div className="personal-info-list-wrapper">
                <h2>Personal Information</h2>
                <PersonalInfoCard passengerNum="1" seatNum="23"/>
                <PersonalInfoCard passengerNum="2" seatNum="24"/>
                <PersonalInfoCard passengerNum="3" seatNum="25"/>
            </div>
        )
    }
}
