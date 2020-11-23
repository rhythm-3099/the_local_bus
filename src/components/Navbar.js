import React from 'react';
import { NavLink } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Loginpage from '../pages/Loginpage';

import '../css/components/navbar.css';
import SearchResultPage from '../pages/SearchResultPage';

import logo from '../static/images/logo.png';

export default function Navbar() {
    return (
        // <div className="navbar">
        //     <div>
        //         <img src={myImage} alt="GSRTC logo" className="logo"/>
        //         <ul className="nav-list">
        //             <li>
        //                 <NavLink to="/" exact component={Loginpage}>Login</NavLink>
        //             </li>
        //             <li>
        //                 <NavLink to="/login" component={SearchResultPage}>About</NavLink>
        //             </li>
        //         </ul>
        //     </div>
        //     <div>
        //         <span className="lang-option">Eng/Guj</span>
        //     </div>
        // </div>
        <div className="navbar">
            <div className="navlink-container">
                <img src={logo}/>
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
