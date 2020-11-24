import React from 'react';

import '../../css/components/homepage/ourservices.css';

import { Icon } from '@iconify/react';
import busAlert from '@iconify/icons-mdi/bus-alert';
import busIcon from '@iconify/icons-mdi/bus';
import busMarker from '@iconify/icons-mdi/bus-marker';
import ticketAccount from '@iconify/icons-mdi/ticket-account';

const OurServices = () => {
    return (
        <div className="services">
            <h2>Our Services</h2>
            <div className="services-wrapper">
                <div className="service-card">
                    <Icon icon={busIcon} style={{color: '#000000'}} className="icon"/>
                    <h3>Hire a Bus</h3>
                </div>
                <div className="service-card">
                    <Icon icon={busMarker} style={{color: '#000000'}} className="icon"/>
                    <h3>Track Bus</h3>
                </div>
                <div className="service-card">
                    <Icon icon={busAlert} style={{color: '#000000'}} className="icon" />
                    <h3>Bus Inquiry</h3>
                </div>
                <div className="service-card">
                    <Icon icon={ticketAccount} style={{color: '#000000'}} className="icon"/>
                    <h3>Bus Pass</h3>
                </div>
            </div>
        </div>
    )
}
export default OurServices;