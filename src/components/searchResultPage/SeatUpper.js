import React, { Component } from 'react';

import '../../css/components/searchResultPage/seat.css';


import { Icon } from '@iconify/react';
import seatPassenger from '@iconify/icons-mdi/seat-passenger';
import bedIcon from '@iconify/icons-mdi/bed';

export default class SeatUpper extends Component {

    state = {clicks: 0, seatProp: this.props.seatProp}

    availableStyle = {
        color: '#acacac',
        height: '30px',
        width: '30px'
    };

    bookedStyle = {
        color: '#2BA6FF',
        height: '30px',
        width: '30px'
    };

    selectedStyle = {
        color: '#42FF49',
        height: '30px',
        width: '30px'
    };

    ladiesStyle = {
        color: '#E3FF37',
        height: '30px',
        width: '30px'
    };

    getSeatStyle = () => {
        if(this.state.seatProp === 'Available') {
            if(this.state.clicks % 2 === 0) {
                return this.availableStyle;
            } else {
                return this.selectedStyle;
            }
        } else if(this.state.seatProp === 'Booked') {
            return this.bookedStyle;
        } else {
            return this.ladiesStyle;
        }
        // else if(this.state.seatProp === 'Lady') {
        //     return this.ladiesStyle;
        // }
    }

    onClickHandler = () => {
        this.setState({clicks: this.state.clicks+1});
    }

    render() {
        return (
            <div>
                <Icon 
                    icon={bedIcon} 
                    style={this.getSeatStyle()} 
                    hFlip={true}
                    onClick={this.onClickHandler}   
                    className="seat"
                />
            </div>
        )
    }
}
