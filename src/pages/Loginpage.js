import React, { Component } from 'react';

import '../css/pages/loginpage.css';

import {Form, Button} from 'react-bootstrap';
import { Icon } from '@iconify/react';
import busIcon from '@iconify/icons-mdi/bus';
import atIcon from '@iconify/icons-mdi/at';
import keyVariant from '@iconify/icons-mdi/key-variant';


export default class Loginpage extends Component {
    state = {currectLogin: 'User'}

    categoryClickHandler = (category) => {
        console.log(this.state.currectLogin);
        this.setState({currectLogin: category});
    }

    getArrowIndicators = () => {
        let arrows = null;
        if(this.state.currectLogin === 'User') {
            arrows = <div className="login-indicator login-indicator-left"></div>
        } else if(this.state.currectLogin === 'Agent') {
            arrows = <div className="login-indicator login-indicator-middle"></div>
        } else {
            arrows = <div className="login-indicator login-indicator-right"></div>
        }
        return arrows;
    }


    render() {
        return (
            <div>
                <div className="login-option-wrapper">
                    <div 
                        className="login-option" 
                        onClick={() => this.categoryClickHandler('User')}
                        style={ this.state.currectLogin === 'User' ? {
                                backgroundImage: 'linear-gradient(#007CC7, #9cc6dd)',
                                color: '#ffffff'
                            } : {
                                backgroundColor: '#F1F4F8',
                                color: '#555555'
                            }
                        }
                    >
                        <h2>User</h2>
                    </div>
                    <div 
                        className="login-option" 
                        onClick={() => this.categoryClickHandler('Agent')}
                        style={ this.state.currectLogin === 'Agent' ? {
                            backgroundImage: 'linear-gradient(#007CC7, #9cc6dd)',
                            color: '#ffffff'
                        } : {
                            backgroundColor: '#F1F4F8',
                            color: '#555555'
                        }
                    }
                    >
                        <h2>Agent</h2>
                    </div>
                    <div 
                        className="login-option" 
                        onClick={() => this.categoryClickHandler('Staff')}
                        style={ this.state.currectLogin === 'Staff' ? {
                            backgroundImage: 'linear-gradient(#007CC7, #9cc6dd)',
                            color: '#ffffff'
                        } : {
                            backgroundColor: '#F1F4F8',
                            color: '#555555'
                        }
                    }
                    >
                        <h2>Staff</h2>
                    </div>
                </div>
                <div className="form-wrapper">
                    <Form className="form">
                        {this.getArrowIndicators()}
                        <Icon icon={busIcon} style={{color: '#000000'}} className="icon-form"/>
                        <h2>{this.state.currectLogin} Login</h2>
                        <Form.Group controlId="formBasicEmail" className="form-field-login">
                            <Form.Label>
                                <Icon icon={atIcon} style={{color: '#9C9C9C'}} className="login-field-icon"/>
                            </Form.Label>
                            <Form.Control type="email" placeholder="Enter email" className="login-form-input"/>
                            
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword" className="form-field-login">
                            <Form.Label>
                                <Icon icon={keyVariant} style={{color: '#9C9C9C'}} className="login-field-icon"/>
                            </Form.Label>
                            <Form.Control type="password" placeholder="Password" className="login-form-input"/>
                        </Form.Group>
                        <div className="login-button-wrapper">
                            <Button variant="primary" type="submit" className="login-button">
                                Login
                            </Button>
                            <Button variant="primary" type="submit" className="signup-button">
                                Create a new account
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        )
    }
}
