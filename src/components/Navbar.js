import React from 'react';
import { NavLink } from 'react-router-dom';
import Switch from '@material-ui/core/Switch';

import '../css/components/navbar.css';

import logo from '../static/images/logo.png';

export default function Navbar() {
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
                <span className="lang-option-val">Eng</span>
                <Switch
                    color="primary"
                />
                <span className="lang-option-val">Guj</span>
            </div>
        </div>
    )
}
