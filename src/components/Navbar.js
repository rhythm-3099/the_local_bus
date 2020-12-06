import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Switch from '@material-ui/core/Switch';

import '../css/components/navbar.css';

import logo from '../static/images/logo.png';

export default class Navbar extends Component {
    state = {checked: false}

    onClicked = () => {
        this.setState({checked: !this.state.checked})
    }
    
    render() {
        return (
            <div className="navbar">
                <div className="navlink-container">
                    <NavLink to="/">
                        <img src={logo} alt="logo"/>
                    </NavLink>
                    <ul>
                        <li>
                            <NavLink to="/login" exact className="navlink" activeClassName="active-navlink">Login</NavLink>
                        </li>
                        <li>
                            <NavLink to="/signup" exact className="navlink" activeClassName="active-navlink">Register</NavLink>
                        </li>
                        <li>
                            <NavLink to="/help" exact className="navlink" activeClassName="active-navlink">Help</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="lang-option">
                    <div className="toll-free">
                        <h5>Toll-free Number: 1800 233 666666 / 079 2283 5000</h5>
                    </div>
                    <div className="lang-option-div">
                        <span className="lang-option-val">Eng</span>
                        <Switch
                            
                        />
                        <span className="lang-option-val">Guj</span>
                    </div>
                </div>
            </div>
        )
    }
}
