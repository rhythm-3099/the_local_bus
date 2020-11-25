import React, { Component } from 'react'
import PersonalInfoCard from './PersonalInfoCard'

import '../../css/components/personalDetailsPage/personalInfoCard.css';

export default class PersonalInfo extends Component {
    render() {
        return (
            <div className="personal-info-list-wrapper">
                <h2>Personal Information</h2>
                <PersonalInfoCard />
                <PersonalInfoCard />
                <PersonalInfoCard />
            </div>
        )
    }
}
