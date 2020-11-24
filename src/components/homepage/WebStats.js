import React from 'react';

import '../../css/components/homepage/webstats.css';

import { Icon } from '@iconify/react';

import accountGroup from '@iconify/icons-mdi/account-group';
import appleIos from '@iconify/icons-mdi/apple-ios';
import androidIcon from '@iconify/icons-mdi/android';

const WebStats = () => {
    return (
        <div className="webstats">
            <h2>GSRTC Growing Numbers</h2>
            <div className="webstats-wrapper">
                <div className="stat-card">
                    <Icon icon={androidIcon} style={{color: '#000000'}} className="icon-web"/>
                    <div>
                        <h4>Android App Downloaded</h4>
                        <h3>1,849,994 +</h3>
                        <p>*As on 08-10-2020</p>
                    </div>
                </div>
                <div className="stat-card">
                    <Icon icon={appleIos} style={{color: '#000000'}} className="icon-web"/>
                    <div>
                        <h4>iOS App Downloaded</h4>
                        <h3>34,449 +</h3>
                        <p>*As on 08-10-2020</p>
                    </div>
                </div>
                <div className="stat-card">
                    <Icon icon={accountGroup} style={{color: '#000000'}} className="icon-web"/>
                    <div>
                        <h4>Visitor Count</h4>
                        <h3>105,590,002</h3>
                        <p>Over GSRTC Happy Customers</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WebStats;