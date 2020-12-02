import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../../css/components/searchResultPage/searchMenu.css';

import { Icon } from '@iconify/react';
import telegramIcon from '@iconify/icons-mdi/telegram';
import mapMarker from '@iconify/icons-mdi/map-marker';
import calendarStart from '@iconify/icons-mdi/calendar-start';
import calendarEnd from '@iconify/icons-mdi/calendar-end';
import seatOutline from '@iconify/icons-mdi/seat-outline';


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

    makeDateObject = (dateString) => {

        if(dateString === ''){
            return null;
        }
        
        let dateArr = dateString.split('/');
        console.log('dateArr, ', dateArr);

        let day = parseInt(dateArr[1]);
        let month = parseInt(dateArr[0]) - 1;
        let year = parseInt(dateArr[2]);

        console.log('year, ', year);
        console.log('month, ', month);
        console.log('day, ', day);

        let dateObj = new Date(year, month, day);
        console.log('herer ', dateObj);
        return dateObj;
    }

    render() {
        return (
            <div className="search-menu">
                <form className="search-form">
                    <div className="search-field-container">
                        <Icon icon={telegramIcon} style={{color: '#61B15A'}} className="home-form-icon"/>
                        <label>From</label>
                        <input type="text" onChange={this.fromChangeHandler} defaultValue={this.props.searchInfo.from}/>
                    </div>
                    <div className="search-field-container">
                        <Icon icon={mapMarker} style={{color: '#C75643'}} className="home-form-icon"/>
                        <label>To</label>
                        <input type="text" onChange={this.toChangeHandler} defaultValue={this.props.searchInfo.to}/>
                    </div>
                    <div className="search-field-container">
                        <Icon icon={calendarStart} style={{color: '#000000'}} className="home-form-icon"/>
                        <label>Date</label>
                        <DatePicker 
                            selected={this.makeDateObject(this.props.searchInfo.fromDate)}
                            onChange={(date) => this.fromDateChangeHandler(date)} 
                            minDate={new Date()}
                            className="date-inputs"
                        />
                    </div>
                    <div className="search-field-container">
                        <Icon icon={calendarEnd} style={{color: '#000000'}} className="home-form-icon"/>
                        <label>Return Date</label>
                        <DatePicker 
                            selected={this.makeDateObject(this.props.searchInfo.toDate)}
                            onChange={(date) => this.toDateChangeHandler(date)} 
                            minDate={new Date()}
                            placeholderText="Return Date"
                            className="date-inputs"
                        />
                    </div>
                    <div className="search-field-container">
                        <label><Icon icon={seatOutline} style={{color: '#000000'}} className="home-form-icon"/></label>
                        <input defaultValue={this.props.searchInfo.seats} type="number" onChange={this.seatsChangeHandler}></input>
                    </div>
                    <div className="search-field-container single-lady-field-container">
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