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

    componentDidMount = () => {
        let passengerArr = [...this.props.passengers];
        let passenger = {
            name: this.state.name,
            age: this.state.age,
            gender: this.state.gender
        }
        passengerArr[this.props.index] = passenger;
        this.props.setPassenger(passengerArr);
    }

    genderClick = (gender) => {
        let passengerArr = [...this.props.passengers];
        let passenger = {
            name: this.state.name,
            age: this.state.age,
            gender: gender
        }
        passengerArr[this.props.index] = passenger;
        this.props.setPassenger(passengerArr);
        this.setState({gender: gender})
    }

    nameChangeHandler = (e) => {
        let passengerArr = [...this.props.passengers];
        let passenger = {
            name: e.target.value,
            age: this.state.age,
            gender: this.state.gender
        }
        passengerArr[this.props.index] = passenger;
        this.props.setPassenger(passengerArr);
        this.setState({name: e.target.value})
    }

    ageChangeHandler = (e) => {
        let passengerArr = [...this.props.passengers];
        let passenger = {
            name: this.state.name,
            age: parseInt(e.target.value),
            gender: this.state.gender
        }
        passengerArr[this.props.index] = passenger;
        this.props.setPassenger(passengerArr);
        this.setState({age: parseInt(e.target.value)})
    }

    render() {
        return (
            <div className="personal-info-card">
                
                <form className="personal-info-form">
                    <div className="personal-text-form">
                        <div className="personal-name-seat">
                            <Icon icon={accountIcon} style={{color: '#000000'}} />
                            <h4>Passenger {this.props.index+1}</h4>
                            <span className="info-card-ver-div">|</span>
                            <h4>Seat {this.props.seatNum}</h4>
                        </div>
                        <div className="personal-text-field">
                            <input type="text" onChange={this.nameChangeHandler} placeholder="Name" name="name"/>
                        </div>
                        <div className="personal-text-field">
                            <input type="number" onChange={this.ageChangeHandler} placeholder="Age" name="age"/>
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
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        passengers: state.passenger.passengers
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setPassenger: (passengers) => dispatch(setPassenger(passengers))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PersonalInfoCard);