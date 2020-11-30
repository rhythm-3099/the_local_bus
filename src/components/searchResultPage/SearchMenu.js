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

import { setSearchInfo } from '../../redux/actions/searchAction';

class SearchMenu extends Component {

    state = {from: this.props.searchInfo.from, to: this.props.searchInfo.to, onwardDate: this.props.searchInfo.fromDate, returnDate: this.props.searchInfo.toDate, seats: this.props.searchInfo.seats, isSingleLady: this.props.searchInfo.isSingleLady};

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
        this.setState({seats: parseInt(e.target.value)});
    }

    isSingleLadyChangeHandler = (e) => {
        this.setState({isSingleLady: !this.state.isSingleLady})
    }

    modifySearchClickHandler = (e) => {
        e.preventDefault();
        let searchInfo = {
            from: this.state.from,
            to: this.state.to,
            fromDate: this.getStringifiedDate(this.state.onwardDate),
            toDate: this.getStringifiedDate(this.state.returnDate),
            seats: this.state.seats,
            isSingleLady: this.state.isSingleLady
        }
        this.props.setSearchInfo(searchInfo);
    }

    getStringifiedDate = (date) => {
        let dd = String(date.getDate()).padStart(2, '0');
        let mm = String(date.getMonth() + 1).padStart(2, '0'); 
        let yyyy = date.getFullYear();

        let newDate = mm + '/' + dd + '/' + yyyy;
        return newDate;
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
                            placeholderText={this.props.searchInfo.fromDate}
                            onChange={(date) => this.fromDateChangeHandler(date)} 
                            minDate={new Date()}
                            className="date-inputs"
                        />
                    </div>
                    <div className="search-field-container">
                        <img src={DateTo} alt="date-from"/>
                        <label>Return Date</label>
                        <DatePicker 
                            placeholderText={this.props.searchInfo.toDate}
                            onChange={(date) => this.toDateChangeHandler(date)} 
                            minDate={new Date()}
                            placeholderText="Return Date"
                            className="date-inputs"
                        />
                    </div>
                    <div className="search-field-container">
                        <label><img src={Seat} alt="Seat"/></label>
                        <input defaultValue={this.props.searchInfo.seats} type="number" onChange={this.seatsChangeHandler}></input>
                    </div>
                    <div className="search-field-container">
                        <input type="checkbox" id="single_lady" name="single_lady" value="single_lady" defaultChecked={this.props.searchInfo.isSingleLady} onClick={this.isSingleLadyChangeHandler}/>
                        <label htmlFor="single_lady" onClick={this.isSingleLadyChangeHandler}>Single Lady</label>
                    </div>
                    <div className="search-field-container">
                        <div className="modify-search-button" onClick={this.modifySearchClickHandler}>
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

const mapDispatchToProps = (dispatch) => {
    return {
        setSearchInfo: (searchInfo) => dispatch(setSearchInfo(searchInfo))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchMenu);