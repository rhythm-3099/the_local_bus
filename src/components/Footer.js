import React from 'react';

import '../css/components/footer.css';

import { Icon, InlineIcon } from '@iconify/react';
import twitterIcon from '@iconify/icons-mdi/twitter';
import facebookIcon from '@iconify/icons-mdi/facebook';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-section-wrapper">
                <div className="footer-section">
                    <h4>The Company</h4>
                    <a>About Us</a>
                    <a>Leadership</a>
                    <a>Achievement / Awards</a>
                    <a>Contact Us</a>
                    <a>Performance</a>
                    <a>Special Services</a>
                    <a>Divisions</a>
                    <a>Corporate Office</a>
                </div>
                <div className="footer-section">
                    <h4>Community</h4>
                    <a>Right To Information</a>
                    <a>India Code</a>
                    <a>GSRTC Direct Agents List</a>
                    <a>GSRTC Franchise List</a>
                    <a>Conductor Mitra POS Agents List</a>
                    <a>Sharvan Tirth Darshan Yojna By
                        Gujarat Pavitra Yatradham Vikas
                        Board, Gandhinagar
                    </a>
                    <a>Download</a>
                </div>
                <div className="footer-section">
                    <h4>Careers</h4>
                    <a>Recruitment</a>
                </div>
                <div className="footer-section">
                    <h4>Connect With Us!</h4>
                    <div className="icon-set">
                        <Icon icon={twitterIcon} style={{color: '#55acee'}} className="icon-footer" />
                        <Icon icon={facebookIcon} style={{color: '#395185'}} className="icon-footer" />
                    </div>
                </div>
            </div>
            <div className="bits-wrapper">
                <a>Privacy Policy</a> <span className="divider">|</span> 
                <a>FAQs</a> <span className="divider">|</span> 
                <a>Booking Policies</a> <span className="divider">|</span> 
                <a>Site Map</a> <span className="divider">|</span> 
                <a>Pravasi-Helpdesk</a> 
            </div>
            <div className="extra-info-wrapper">
                <div>
                    <p>&#169; GSRTC. All Rights Reserved <br/>Last Updated: 12/11/2020 9:30 pm</p>
                </div>
                <div>Toll Free: 1800 233 666666 / 079 2283 5000</div>
            </div>
        </div>
    )
}
export default Footer;