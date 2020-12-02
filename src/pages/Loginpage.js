import React, { Component } from 'react';

import '../css/pages/loginpage.css';
import '../css/pages/common.css';

import {Form, Button} from 'react-bootstrap';
import { Icon } from '@iconify/react';
import homeIcon from '@iconify/icons-mdi/home'
import busIcon from '@iconify/icons-mdi/bus';
import atIcon from '@iconify/icons-mdi/at';
import keyVariant from '@iconify/icons-mdi/key-variant';
import googleIcon from '@iconify/icons-mdi/google';
import facebookIcon from '@iconify/icons-mdi/facebook';
import phoneIcon from '@iconify/icons-mdi/phone';


export default class Loginpage extends Component {
    state = {currectLogin: 'User'}

    onLoginButtonClick = (e) => {
        e.preventDefault();
        this.props.history.push('/');
    }

    onSignUpButtonClick = (e) => {
        e.preventDefault();
        this.props.history.push('/signup');
    }

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

    goToThisNavLink = (link) => {
        this.props.history.push(link);
    }

    render() {
        return (
            <div>
                <div className="search-navigator">
                    <Icon icon={homeIcon} style={{color: '#000000'}} className="search-navigator-icon" onClick={() => this.goToThisNavLink("/")}/>
                    <span className="search-navigator-divider">/</span>
                    <span className="search-navigator-text search-navigator-last-text">Login</span>
                </div>
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
                            <Button variant="primary" type="submit" className="login-button" onClick={this.onLoginButtonClick}>
                                Login
                            </Button>
                            <Button variant="primary" type="submit" className="signup-button" onClick={this.onSignUpButtonClick}>
                                Create a new account
                            </Button>
                        </div>
                    </Form>
                </div>

                <h1 className="login-or">Or</h1>
                <div className="o-auth-login-buttons">
                    <div className="o-auth-login">
                        <Icon icon={googleIcon} style={{color: '#669CF6'}} className="o-auth-icon"/>
                        <p>Log in using Google</p>
                    </div>
                    <div className="o-auth-login">
                        <Icon icon={facebookIcon} style={{color: '#3b5998'}} className="o-auth-icon"/>
                        <p>Log in using Facebook</p>
                    </div>
                    <div className="o-auth-login">
                        <Icon icon={phoneIcon} style={{color: '#25D366'}} className="o-auth-icon"/>
                        <p>Log in using OTP</p>
                    </div>
                </div>
            </div>
        )
    }
}
