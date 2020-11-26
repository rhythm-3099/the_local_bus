import React, { Component } from 'react';

import '../../css/components/personalDetailsPage/personalInfoCard.css';

import { Icon } from '@iconify/react';
import accountIcon from '@iconify/icons-mdi/account';

export default class PersonalInfoCard extends Component {
    render() {
        return (
            <div className="personal-info-card">
                
                <div className="personal-info-form">
                    <div className="personal-text-form">
                        <div className="personal-name-seat">
                            <Icon icon={accountIcon} style={{color: '#000000'}} />
                            <h4>Passenger 1</h4>
                            <span className="info-card-ver-div">|</span>
                            <h4>Seat 23</h4>
                        </div>
                        <div className="personal-text-field">
                            <input type="text" onChange={this.fromChangeHandler} placeholder="Name"/>
                        </div>
                        <div className="personal-text-field">
                            <input type="number" onChange={this.fromChangeHandler} placeholder="Age"/>
                        </div>
                    </div>
                    <div className="personal-gender-form">
                        <h4>Gender</h4>
                        <div className="gender-buttons">
                            <input type="radio" id="male" name="gender" value="male" />
                            <label for="male">Male</label>
                            <input type="radio" id="female" name="gender" value="female" />
                            <label for="female">Female</label>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
