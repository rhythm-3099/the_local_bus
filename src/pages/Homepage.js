import React, { Component } from 'react'

import Slider from '../components/Slider';
import HomeForm from '../components/HomeForm';
import OurServices from '../components/OurServices';
export default class Homepage extends Component {
    render() {
        return (
            <div>
                <Slider />
                <HomeForm />
                <OurServices />
            </div>
        )
    }
}
