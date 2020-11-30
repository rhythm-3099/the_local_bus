import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../../css/components/searchResultPage/seat.css';

import { addSeat, removeSeat } from '../../redux/actions/seatAction';


import { Icon } from '@iconify/react';
import bedIcon from '@iconify/icons-mdi/bed';

class SeatUpper extends Component {

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
        if(this.state.seatProp === 'Available'){
            
            if(this.state.clicks % 2 === 0) {
                this.props.addSeat(this.props.seatNum);
            } else {
                this.props.removeSeat(this.props.seatNum);
            }

            this.setState({clicks: this.state.clicks+1});
        }
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

// const mapStateToProps = () => {

// }

const mapDispatchToProps = (dispatch) => {
    return {
        addSeat: (seatNum) => dispatch(addSeat(seatNum)),
        removeSeat: (seatNum) => dispatch(removeSeat(seatNum))
    }
}

export default connect(
    null,
    mapDispatchToProps
)(SeatUpper);
