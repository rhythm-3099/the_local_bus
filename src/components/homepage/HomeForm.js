import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../../css/components/homepage/homeform.css';

import Seat from '../../static/images/seat.png';
import From from '../../static/images/from.png';
import To from '../../static/images/to.png';
import DateFrom from '../../static/images/date_from.png';
import DateTo from '../../static/images/date_to.png';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { setSearchInfo } from '../../redux/actions/searchAction';

class HomeForm extends Component {

    state = {from: '', to: '', onwardDate: new Date(), returnDate: null, seats: 0, isSingleLady: 0};

    fromChangeHandler = (e) => {
        this.setState({from: e.target.value});
    }

    toChangeHandler = (e) => {
        this.setState({to: e.target.value});
    }

    fromDateChangeHandler = (date) => {
        this.setState({onwardDate: date});
    }

    toDateChangeHandler = (date) => {
        this.setState({returnDate: date});
    }

    seatsChangeHandler = (e) => {
        this.setState({seats: parseInt(e.target.value)})
    }

    searchButtonCLickHandler = (e) => {
        e.preventDefault();
        let searchInfo = {
            from: this.state.from,
            to: this.state.to,
            fromDate: this.state.onwardDate,
            toDate: this.state.returnDate,
            seats: this.state.seats,
            isSingleLady: this.state.isSingleLady
        }

        this.props.setSearchInfo(searchInfo);
        this.props.searchButtonClicked();
    }

    singleLadyClickHandler = (e) => {
        let newVal = !this.state.isSingleLady;
        this.setState({isSingleLady: newVal});
    }

    render() {
        return (
            <form className="home-form">
                <div className="upper-wrapper">
                    <div className="from-field-home field">
                        <label className="home-form-popup-container">
                            <img src={From} alt="from" className="home-form-icon"/>
                            <div className="home-form-popup">
                                <p>Select the city from where you will board the bus</p>
                            </div>
                        </label>
                        <input onChange={this.fromChangeHandler} placeholder="From" type="text"></input>
                        
                    </div>
                    <div className="field">
                        <label className="home-form-popup-container">
                            <img src={To} alt="to"/>
                            <div className="home-form-popup">
                                <p>Select the city where you want to go</p>
                            </div>
                        </label>
                        <input onChange={this.toChangeHandler} placeholder="To" type="text"></input>
                    </div>
                </div>
                <div className="upper-wrapper">
                    <div className="field">
                        <label className="home-form-popup-container">
                            <img src={DateFrom} alt="date-from"/>
                            <div className="home-form-popup">
                                <p>Select the departure date</p>
                            </div>
                        </label>
                        <DatePicker 
                            selected={this.state.onwardDate} 
                            onChange={(date) => this.fromDateChangeHandler(date)} 
                            minDate={new Date()}
                            placeholderText="Select the travel date"
                        />
                    </div>
                    <div className="field return-date-field">
                        <label className="home-form-popup-container">
                            <img src={DateTo} alt="date_to"/>
                            <div className="home-form-popup">
                                    <p>Select the return date</p>
                            </div>
                        </label>
                        <DatePicker 
                            selected={this.state.returnDate}  
                            onChange={(date) => this.toDateChangeHandler(date)} 
                            minDate={this.state.onwardDate}
                            placeholderText="Select the return date"
                        />
                        <p className="asterisk-alert">* Optional</p>
                    </div>
                </div>
                <div className="upper-wrapper">
                    <div className="field">
                        <label className="home-form-popup-container">
                            <img src={Seat} alt="Seat"/>
                            <div className="home-form-popup">
                                <p>Select the number of seats</p>
                            </div>
                        </label>
                        <input placeholder="Seats" type="number" min="1" onChange={this.seatsChangeHandler}></input>
                    </div>
                    
                    <div className="booking_buttons">
                        <input type="checkbox" id="advanced_booking" name="Advanced_booking" value="advanced_booking"/>
                        <label htmlFor="advanced_booking">Advanced Booking</label><br/>
                        <input type="checkbox" id="divyang_booking" name="divyang_booking" value="divyang_booking"/>
                        <label htmlFor="divyang_booking">Divyang Booking</label><br/>
                    </div>
                    <div className="field">
                        <input type="checkbox" id="single_lady" name="single_lady" value="single_lady" onClick={this.singleLadyClickHandler}/>
                        <label htmlFor="single_lady" onClick={this.singleLadyClickHandler}>Single Lady</label>
                    </div>            
                </div>
                <div className="upper-wrapper">
                    <div className="home-search-button" onClick={this.searchButtonCLickHandler}>Search</div>
                </div>
                
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setSearchInfo: (searchInfo) => dispatch(setSearchInfo(searchInfo))
    }
}

export default connect(
    null,
    mapDispatchToProps
)(HomeForm);
