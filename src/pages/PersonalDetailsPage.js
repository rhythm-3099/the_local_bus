import React, { Component } from 'react';
import ContactDetails from '../components/personalDetailsPage/ContactDetails';
import PaymentSummary from '../components/personalDetailsPage/PaymentSummary';
import PersonalInfo from '../components/personalDetailsPage/PersonalInfo';

import '../css/pages/personalDetailsPage.css';

export default class PersonalDetailsPage extends Component {

    continueButtonClicked = () => {
        this.props.history.push('/payment')
    }


    render() {
        return (
            <div>
                <div className="personal-details-page-container">
                    <div className="personal-container-1">
                        <PersonalInfo className="personal-info-list"/>
                        <ContactDetails className="personal-contact-list" buttonClick={this.continueButtonClicked}/>
                    </div>
                    <div className="personal-container-2">
                        <PaymentSummary />
                    </div>
                </div>
            </div>
        )
    }
}
