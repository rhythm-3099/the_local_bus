import React, { Component } from 'react';

import '../css/pages/homepage.css';

import Slider from '../components/homepage/Slider';
import HomeForm from '../components/homepage/HomeForm';
import OurServices from '../components/homepage/OurServices';
import WebStats from '../components/homepage/WebStats';
import Footer from '../components/homepage/Footer';
import UserCircularMenu from '../components/homepage/UserCircularMenu';
import AgentCircularMenu from '../components/homepage/AgentCircularMenu';

export default class Homepage extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    searchButtonClicked = () => {
        this.props.history.push('/search')
    }



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
                        alignItems: 'center',
                        position: 'relative',
                        top: '-35px'
                    }}
                >
                    <HomeForm className="home-form" searchButtonClicked={this.searchButtonClicked}/>
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