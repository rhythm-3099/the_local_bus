import React, { Component } from 'react';
import ContactDetails from '../components/personalDetailsPage/ContactDetails';
import PaymentSummary from '../components/personalDetailsPage/PaymentSummary';
import PersonalInfo from '../components/personalDetailsPage/PersonalInfo';

import '../css/pages/personalDetailsPage.css';
import '../css/pages/common.css';

import { Icon } from '@iconify/react';
import homeIcon from '@iconify/icons-mdi/home';
export default class PersonalDetailsPage extends Component {

    continueButtonClicked = () => {
        this.props.history.push('/payment')
    }

    goToThisNavLink = (link) => {
        this.props.history.push(link);
    }

    render() {
        return (
            <div className="personal-details-page">
                <div className="search-navigator">
                    <Icon icon={homeIcon} style={{color: '#000000'}} className="search-navigator-icon" onClick={() => this.goToThisNavLink("/")}/>
                    <span className="search-navigator-divider">/</span>
                    <span className="search-navigator-text" onClick={() => this.goToThisNavLink("/search")}>Search Bus</span>
                    <span className="search-navigator-divider">/</span>
                    <span className="search-navigator-text search-navigator-last-text">Details</span>
                </div>
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
