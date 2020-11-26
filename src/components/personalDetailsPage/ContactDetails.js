import React, { Component } from 'react';

import '../../css/components/personalDetailsPage/contactDetails.css';

import cellphoneIcon from '@iconify/icons-mdi/cellphone';
import { Icon } from '@iconify/react';
import atIcon from '@iconify/icons-mdi/at';
import {Form, Button} from 'react-bootstrap';

export default class ContactDetails extends Component {

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.buttonClick();
    }

    navAway = () => {
        this.props.buttonClick();
    }

    buttonClick = (e) => {
        e.preventDefault();
        this.navAway();
    }


    render() {
        return (
            <div className="contact-details">
                <h2>Contact Details</h2>
                <div className="contact-details-wrapper">
                    <Form className="contact-form" className={this.onFormSubmit}>
                        <div className="contact-form-wrapper">
                            <Form.Group controlId="formBasicEmail" className="contact-form-field">
                                <Form.Label>
                                    <Icon icon={atIcon} style={{color: '#9C9C9C'}} className="contact-form-icon"/>
                                </Form.Label>
                                <Form.Control type="email" placeholder="Enter email" className="contact-form-input"/>
                                    
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword" className="contact-form-field">
                                    <Form.Label>
                                        <Icon icon={cellphoneIcon} style={{color: '#000000'}} className="contact-form-icon"/>
                                    </Form.Label>
                                    <Form.Control type="" placeholder="Contact Number" className="contact-form-input" type="number"/>
                            </Form.Group>
                        </div>
                        <Button variant="primary" type="submit" className="contact-button" onClick={this.buttonClick}>
                            Continue
                        </Button>
                    </Form>
                </div>
            </div>

        )
    }
}
