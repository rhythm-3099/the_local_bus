import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../../css/components/personalDetailsPage/contactDetails.css';

import cellphoneIcon from '@iconify/icons-mdi/cellphone';
import { Icon } from '@iconify/react';
import atIcon from '@iconify/icons-mdi/at';
import {Form, Button} from 'react-bootstrap';

import { setContact } from '../../redux/actions/contactAction';

class ContactDetails extends Component {

    state = {
        email: '',
        phoneNumber: '',
        isEmailInvalid: false,
        isPhoneInvalid: false
    }

    emailChangeHandler = (e) => {
        this.setState({isEmailInvalid: this.emailValidator(e.target.value)})
        this.setState({email: e.target.value})
    }

    phoneNumberChangeHandler = (e) => {
        this.setState({isPhoneInvalid: this.phoneValidator(e.target.value)})
        this.setState({phoneNumber: e.target.value})
    }

    emailValidator = (email) => {
        if(email === ''){
            return false;
        }
        var mailFormat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(mailFormat.test(email)) {
            return false;
        }
        return true;
    }

    phoneValidator = (phone) => {
        if(phone === '')
            return true;
        if(phone === '' || phone === undefined || phone === null){
            return false;
        }
        if(/^\d+$/.test(phone) && phone.length === 10 ) {
            return false;
        } 
        return true;
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.buttonClick();
    }

    navAway = () => {
        this.props.buttonClick();
    }

    buttonClick = (e) => {
        e.preventDefault();
        let contact = {
            email: this.state.email,
            phoneNumber: this.state.phoneNumber
        };
        if(this.getContinueButtonClass() === "contact-button") {
            this.props.setContact(contact);
            this.navAway();
        }
    }



    getContinueButtonClass = () => {
        let passengerVal = false;
        let i=0;

        if(this.state.isEmailInvalid || this.state.isPhoneInvalid || (this.state.email === '') || (this.state.phoneNumber === '')) {
            return "disable-contact-button";
        }


        for(i = 0; i < this.props.passengers.length ; i++) {
            console.log('passenger ', this.props.passengers[i]);
            if(this.props.passengers[i] === null || this.props.passengers[i] === undefined){
                console.log('herer ?? ');
                passengerVal = true;
                break;
            }
        }
        if(passengerVal) {
            return "disable-contact-button";
        }

        for(i = 0; i < this.props.passengers.length; i++){
            passengerVal = passengerVal ||
                            this.props.passengers[i].isAgeInvalid || 
                            (this.props.passengers[i].name === '') ;
        }

        console.log('pass ', passengerVal);
        if(passengerVal) {
            return "disable-contact-button";
        }

        return "contact-button";
    }

    getPopup = (classVal, err) => {
        return (
            <div className={classVal}>
                <p>{err}</p>
            </div>
        )
    }


    render() {
        return (
            <div className="contact-details">
                <h2>Contact Details</h2>
                <div className="contact-details-wrapper">
                    <Form className="contact-form" onSubmit={this.onFormSubmit}>
                        <div className="contact-form-wrapper-wrapper">
                            <div className="contact-form-wrapper">
                                <div className="contact-form-field-wrapper">
                                    <Form.Group controlId="formBasicEmail" className="contact-form-field">
                                        <Form.Label>
                                            <Icon icon={atIcon} style={{color: '#9C9C9C'}} className="contact-form-icon"/>
                                        </Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" className="contact-form-input" onChange={this.emailChangeHandler}/>   
                                    </Form.Group>
                                    {this.state.isEmailInvalid ? this.getPopup('contact-form-error', 'This is an invalid email id.') : null}
                                </div>

                                <div className="contact-form-field-wrapper">
                                    <Form.Group controlId="formBasicPassword" className="contact-form-field">
                                        <Form.Label>
                                            <Icon icon={cellphoneIcon} style={{color: '#000000'}} className="contact-form-icon"/>
                                        </Form.Label>
                                        <Form.Control placeholder="Contact Number" className="contact-form-input" onChange={this.phoneNumberChangeHandler}/>
                                    </Form.Group>
                                    {this.state.isPhoneInvalid ? this.getPopup('contact-form-error', 'The contact number should contain 10 digits only.') : null}
                                </div>
                            </div>
                        </div>
                        <Button type="submit" className={this.getContinueButtonClass()} onClick={this.buttonClick}>
                            Continue
                        </Button>
                    </Form>
                </div>
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
        setContact: (contact) => dispatch(setContact(contact))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactDetails);