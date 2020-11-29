import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../../css/components/personalDetailsPage/personalInfoCard.css';

import { Icon } from '@iconify/react';
import accountIcon from '@iconify/icons-mdi/account';

import { setPassenger } from '../../redux/actions/passengerAction';

class PersonalInfoCard extends Component {

    state = {
        name: 'Name',
        age: 0,
        gender: 'Male'
    }

    genderClick = (gender) => {
        this.setState({gender: gender})
    }

    formValueChangeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        return (
            <div className="personal-info-card">
                
                <div className="personal-info-form">
                    <div className="personal-text-form">
                        <div className="personal-name-seat">
                            <Icon icon={accountIcon} style={{color: '#000000'}} />
                            <h4>Passenger {this.props.passengerNum}</h4>
                            <span className="info-card-ver-div">|</span>
                            <h4>Seat {this.props.seatNum}</h4>
                        </div>
                        <div className="personal-text-field">
                            <input type="text" onChange={this.formValueChangeHandler} placeholder="Name" name="name"/>
                        </div>
                        <div className="personal-text-field">
                            <input type="number" onChange={this.formValueChangeHandler} placeholder="Age" name="age"/>
                        </div>
                    </div>
                    <div className="personal-gender-form">
                        <h4>Gender</h4>
                        <div className="gender-buttons">
                            <input type="radio" id="male" name="gender" value="male" onClick={() => this.genderClick('male')} defaultChecked/>
                            <label for="male" onClick={() => this.genderClick('male')}>Male</label>
                            <input type="radio" id="female" name="gender" value="female" onClick={() => this.genderClick('female')}/>
                            <label for="female" onClick={() => this.genderClick('female')}>Female</label>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setPassenger: (passenger) => dispatch(setPassenger(passenger))
    }
}

export default connect(
    null,
    mapDispatchToProps
)(PersonalInfoCard);