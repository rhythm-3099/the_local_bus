import React, { Component } from 'react';

import '../../css/components/searchResultPage/searchMenu.css';

import Seat from '../../static/images/seat.png';
import From from '../../static/images/from.png';
import To from '../../static/images/to.png';
import DateFrom from '../../static/images/date_from.png';
import DateTo from '../../static/images/date_to.png';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class SearchMenu extends Component {

    state = {from: '', to: '', onwardDate: new Date(), returnDate: null};

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

    render() {
        return (
            <div className="search-menu">
                <form className="search-form">
                    <div className="search-field-container">
                        <img src={From} alt="from"/>
                        <label>From</label>
                        <input type="text" onChange={this.fromChangeHandler} placeholder="Surat"/>
                    </div>
                    <div className="search-field-container">
                        <img src={To} alt="to"/>
                        <label>To</label>
                        <input type="text" onChange={this.toChangeHandler} placeholder="Ahmedabad"/>
                    </div>
                    <div className="search-field-container">
                        <img src={DateFrom} alt="date-from"/>
                        <label>Date</label>
                        <DatePicker 
                            selected={this.state.onwardDate} 
                            onChange={(date) => this.fromDateChangeHandler(date)} 
                            minDate={new Date()}
                            placeholderText="Select the travel date"
                            className="date-inputs"
                        />
                    </div>
                    <div className="search-field-container">
                        <img src={DateTo} alt="date-from"/>
                        <label>Return Date</label>
                        <DatePicker 
                            selected={this.state.onwardDate} 
                            onChange={(date) => this.toDateChangeHandler(date)} 
                            minDate={new Date()}
                            placeholderText="Select the travel date"
                            className="date-inputs"
                        />
                    </div>
                    <div className="search-field-container">
                        <label><img src={Seat} alt="Seat"/></label>
                        <input placeholder="Seats" type="number"></input>
                    </div>
                    <div className="search-field-container">
                        <input type="checkbox" id="single_lady" name="single_lady" value="single_lady" />
                        <label for="single_lady">Single Lady</label>
                    </div>
                    <div className="search-field-container">
                        <div className="modify-search-button">
                            Modify Search
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchMenu;