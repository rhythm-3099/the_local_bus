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
        phoneNumber: ''
    }

    emailChangeHandler = (e) => {
        this.setState({email: e.target.value})
    }

    phoneNumberChangeHandler = (e) => {
        this.setState({phoneNumber: e.target.value})
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
        this.props.setContact(contact);
        this.navAway();
    }


    render() {
        return (
            <div className="contact-details">
                <h2>Contact Details</h2>
                <div className="contact-details-wrapper">
                    <Form className="contact-form" onSubmit={this.onFormSubmit}>
                        <div className="contact-form-wrapper-wrapper">
                            <div className="contact-form-wrapper">
                                <Form.Group controlId="formBasicEmail" className="contact-form-field">
                                    <Form.Label>
                                        <Icon icon={atIcon} style={{color: '#9C9C9C'}} className="contact-form-icon"/>
                                    </Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" className="contact-form-input" onChange={this.emailChangeHandler}/>
                                        
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword" className="contact-form-field">
                                        <Form.Label>
                                            <Icon icon={cellphoneIcon} style={{color: '#000000'}} className="contact-form-icon"/>
                                        </Form.Label>
                                        <Form.Control placeholder="Contact Number" className="contact-form-input" type="number" onChange={this.phoneNumberChangeHandler}/>
                                </Form.Group>
                            </div>
                        </div>
                        <Button type="submit" className="contact-button" onClick={this.buttonClick}>
                            Continue
                        </Button>
                    </Form>
                </div>
            </div>

        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setContact: (contact) => dispatch(setContact(contact))
    }
}

export default connect(
    null,
    mapDispatchToProps
)(ContactDetails);