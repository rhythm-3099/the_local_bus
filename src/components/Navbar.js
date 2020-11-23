import React from 'react';
import { NavLink } from 'react-router-dom';

import '../css/components/navbar.css';

import logo from '../static/images/logo.png';

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navlink-container">
                <img src={logo} alt="logo"/>
                <ul>
                    <li>
                        <NavLink to="/login" exact className="navlink" activeClassName="active-navlink">Login</NavLink>
                    </li>
                    <li>
                        <NavLink to="/search" exact className="navlink" activeClassName="active-navlink">about</NavLink>
                    </li>
                </ul>
            </div>
            <div className="lang-option">
                Eng/Gij
            </div>
        </div>
    )
}
