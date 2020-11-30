import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSeat, removeSeat } from '../../redux/actions/seatAction';

import '../../css/components/searchResultPage/seat.css';

import { Icon } from '@iconify/react';
import seatPassenger from '@iconify/icons-mdi/seat-passenger';

class Seat extends Component {

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
        color: '#F964C6'
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

// const mapStateToProps = (state) => {
//     return {

//     }
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
)(Seat);