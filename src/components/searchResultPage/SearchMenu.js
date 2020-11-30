import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../../css/components/searchResultPage/searchMenu.css';

import Seat from '../../static/images/seat.png';
import From from '../../static/images/from.png';
import To from '../../static/images/to.png';
import DateFrom from '../../static/images/date_from.png';
import DateTo from '../../static/images/date_to.png';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class SearchMenu extends Component {

    state = {from: this.props.searchInfo.from, to: this.props.searchInfo.to, onwardDate: this.props.searchInfo.fromDate, returnDate: this.props.searchInfo.toDate};

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
                        <input type="text" onChange={this.fromChangeHandler} defaultValue={this.props.searchInfo.from}/>
                    </div>
                    <div className="search-field-container">
                        <img src={To} alt="to"/>
                        <label>To</label>
                        <input type="text" onChange={this.toChangeHandler} defaultValue={this.props.searchInfo.to}/>
                    </div>
                    <div className="search-field-container">
                        <img src={DateFrom} alt="date-from"/>
                        <label>Date</label>
                        <DatePicker 
                            selected={this.state.onwardDate} 
                            onChange={(date) => this.fromDateChangeHandler(date)} 
                            minDate={new Date()}
                            className="date-inputs"
                        />
                    </div>
                    <div className="search-field-container">
                        <img src={DateTo} alt="date-from"/>
                        <label>Return Date</label>
                        <DatePicker 
                            selected={this.state.returnDate} 
                            onChange={(date) => this.toDateChangeHandler(date)} 
                            minDate={new Date()}
                            placeholderText="Return Date"
                            className="date-inputs"
                        />
                    </div>
                    <div className="search-field-container">
                        <label><img src={Seat} alt="Seat"/></label>
                        <input defaultValue={this.props.searchInfo.seats} type="number"></input>
                    </div>
                    <div className="search-field-container">
                        <input type="checkbox" id="single_lady" name="single_lady" value="single_lady" defaultChecked={this.props.searchInfo.isSingleLady}/>
                        <label htmlFor="single_lady">Single Lady</label>
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

const mapStateToProps = (state) => {
    return {
        searchInfo: state.searchInfo.searchInfo
    }
}

export default connect(
    mapStateToProps,
    null
)(SearchMenu);