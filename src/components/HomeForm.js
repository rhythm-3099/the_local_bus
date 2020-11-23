import React, { Component } from 'react';

import '../css/components/homeform.css';

import Seat from '../static/images/seat.png';
import From from '../static/images/from.png';
import To from '../static/images/to.png';
import DateFrom from '../static/images/date_from.png';
import DateTo from '../static/images/date_to.png';

export default class HomeForm extends Component {

    state = {from: '', to: ''};

    fromChangeHandler = (e) => {
        this.setState({from: e.target.value});
    }

    toChangeHandler = (e) => {
        this.setState({to: e.target.value});
    }

    render() {
        return (
            <form className="home-form">
                <div className="upper-wrapper">
                    <div className="from-field-home field">
                        <label><img src={From} alt="from"/></label>
                        <input onChange={this.fromChangeHandler} placeholder="From" type="text"></input>
                    </div>
                    <div className="field">
                    <label><img src={To} alt="to"/></label>
                        <input onChange={this.toChangeHandler} placeholder="to" type="text"></input>
                    </div>
                </div>
                <div className="upper-wrapper">
                    <div className="field">
                    <label><img src={DateFrom} alt="date-from"/></label>
                        <input placeholder="date"></input>
                    </div>
                    <div className="field">
                        <label><img src={DateTo} alt="date_to"/></label>
                        <input placeholder="date"></input>
                    </div>
                </div>
                <div className="upper-wrapper">
                    <div className="field">
                        <label><img src={Seat} alt="date-from"/></label>
                        <input placeholder="Seats" type="number"></input>
                    </div>
                    
                    <div className="booking_buttons">
                        <input type="checkbox" id="advanced_booking" name="Advanced_booking" value="advanced_booking"/>
                        <label for="advanced_booking">Advanced Booking</label><br/>
                        <input type="checkbox" id="divyang_booking" name="divyang_booking" value="divyang_booking"/>
                        <label for="divyang_booking">Divyang Booking</label><br/>
                    </div>
                    <div className="field">
                        <input type="checkbox" id="single_lady" name="single_lady" value="single_lady"/>
                        <label for="single_lady">Single Lady</label>
                    </div>            
                </div>
                <div className="upper-wrapper">
                    <div className="home-search-button">Search</div>
                </div>
                
            </form>
        )
    }
}
