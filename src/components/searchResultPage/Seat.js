import React, { Component } from 'react';

import '../../css/components/searchResultPage/seat.css';

import { Icon } from '@iconify/react';
import seatPassenger from '@iconify/icons-mdi/seat-passenger';

export default class Seat extends Component {

    state = {clicks: 0, seatProp: this.props.seatProp}

    availableStyle = {
        color: '#acacac'
    };

    bookedStyle = {
        color: '#2BA6FF'
    };

    selectedStyle = {
        color: '#42FF49'
    };

    ladiesStyle = {
        color: '#E3FF37'
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
        if(this.state.seatProp === 'Available')
            this.setState({clicks: this.state.clicks+1});
    }


    render() {
        return (
            <div>
                <Icon 
                    icon={seatPassenger} 
                    style={this.getSeatStyle()} 
                    hFlip={true}
                    onClick={this.onClickHandler} 
                    className="seat"   
                />
            </div>
        )
    }
}
