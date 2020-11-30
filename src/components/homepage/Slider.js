import React, { Component } from 'react';

import '../../css/components/homepage/slider.css';

import { Icon } from '@iconify/react';
import chevronLeft from '@iconify/icons-mdi/chevron-left';
import chevronRight from '@iconify/icons-mdi/chevron-right';

import Img1 from '../../static/images/slider_images/slider1.jpg';
import Img2 from '../../static/images/slider_images/slider2.jpg';

import Arrow_left from '../../static/images/slider_images/arrow_left.png';
import Arrow_right from '../../static/images/slider_images/arrow_right.png';

class Slider extends Component {

    state = {index: 0}

    arrowClickHandler = () => {
        let currentIndex = this.state.index;
        this.setState({index: currentIndex+1});
    }

    getIndicators = () => {
        let indicators = null;
        if(this.state.index%2) {    // right image
            indicators = (
                <div className="indicator-wrapper">
                    <div className="indicator" onClick={this.arrowClickHandler}></div>
                    <div className="indicator indicator-on"></div>
                </div>
            )
        } else {                    // left image
            indicators = (
                <div className="indicator-wrapper">
                    <div className="indicator indicator-on"></div>
                    <div className="indicator" onClick={this.arrowClickHandler}></div>
                </div>
            )
        }
        return indicators;
    }
    
    render() {
        const images = [Img1, Img2];
        return(
            <div className="slider">
                <img src={images[this.state.index % 2]} alt="background" className="slider-img"/>
                <div className="slider-arrows">
                    {/* <img src={Arrow_left} alt="arrow left" className="slider-arrow left" onClick={this.arrowClickHandler}/> */}
                    <Icon icon={chevronLeft} style={{color: '#000000'}} className="slider-arrow left" onClick={this.arrowClickHandler}/>
                    {/* <img src={Arrow_right} alt="arrow right" className="slider-arrow right" onClick={this.arrowClickHandler}/> */}
                    <Icon icon={chevronRight} style={{color: '#000000'}} className="slider-arrow right" onClick={this.arrowClickHandler}/>
                </div>
                {this.getIndicators()}
            </div>
        )
    }
}
export default Slider;