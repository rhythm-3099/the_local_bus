import React, { Component } from 'react';

import '../css/pages/homepage.css';

import Slider from '../components/Slider';
import HomeForm from '../components/HomeForm';
import OurServices from '../components/OurServices';
import WebStats from '../components/WebStats';
import Footer from '../components/Footer';
import UserCircularMenu from '../components/UserCircularMenu';
import AgentCircularMenu from '../components/AgentCircularMenu';
export default class Homepage extends Component {
    render() {
        return (
            <div className="homepage">
                <Slider />
                <div 
                    style={{
                        width: '100%',
                        marginTop: '50px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}
                >
                    <HomeForm className="home-form"/>
                    <UserCircularMenu />
                    <AgentCircularMenu />
                </div>
                {/* <UserCircularMenu className="user-circular-menu"/> */}
                <OurServices />
                <WebStats />
                <Footer />
            </div>
        )
    }
}