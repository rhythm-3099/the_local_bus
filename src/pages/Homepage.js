import React, { Component } from 'react'

import Slider from '../components/Slider';
import HomeForm from '../components/HomeForm';
import OurServices from '../components/OurServices';
import WebStats from '../components/WebStats';
import Footer from '../components/Footer';
export default class Homepage extends Component {
    render() {
        return (
            <div>
                <Slider />
                <HomeForm />
                <OurServices />
                <WebStats />
                <Footer />
            </div>
        )
    }
}