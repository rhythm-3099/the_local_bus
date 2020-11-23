import React from 'react';

import '../css/components/footer.css';

import { Icon } from '@iconify/react';
import twitterIcon from '@iconify/icons-mdi/twitter';
import facebookIcon from '@iconify/icons-mdi/facebook';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-section-wrapper">
                <div className="footer-section">
                    <h4>The Company</h4>
                    <a href="https://gsrtc.in/site/">About Us</a>
                    <a href="https://gsrtc.in/site/">Leadership</a>
                    <a href="https://gsrtc.in/site/">Achievement / Awards</a>
                    <a href="https://gsrtc.in/site/">Contact Us</a>
                    <a href="https://gsrtc.in/site/">Performance</a>
                    <a href="https://gsrtc.in/site/">Special Services</a>
                    <a href="https://gsrtc.in/site/">Divisions</a>
                    <a href="https://gsrtc.in/site/">Corporate Office</a>
                </div>
                <div className="footer-section">
                    <h4>Community</h4>
                    <a href="https://gsrtc.in/site/">Right To Information</a>
                    <a href="https://gsrtc.in/site/">India Code</a>
                    <a href="https://gsrtc.in/site/">GSRTC Direct Agents List</a>
                    <a href="https://gsrtc.in/site/">GSRTC Franchise List</a>
                    <a href="https://gsrtc.in/site/">Conductor Mitra POS Agents List</a>
                    <a href="https://gsrtc.in/site/">Sharvan Tirth Darshan Yojna By
                        Gujarat Pavitra Yatradham Vikas
                        Board, Gandhinagar
                    </a>
                    <a href="https://gsrtc.in/site/">Download</a>
                </div>
                <div className="footer-section">
                    <h4>Careers</h4>
                    <a href="https://gsrtc.in/site/">Recruitment</a>
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
                <a href="https://gsrtc.in/site/">Privacy Policy</a> <span className="divider">|</span> 
                <a href="https://gsrtc.in/site/">FAQs</a> <span className="divider">|</span> 
                <a href="https://gsrtc.in/site/">Booking Policies</a> <span className="divider">|</span> 
                <a href="https://gsrtc.in/site/">Site Map</a> <span className="divider">|</span> 
                <a href="https://gsrtc.in/site/">Pravasi-Helpdesk</a> 
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