import { ADD_SEAT, REMOVE_SEAT } from '../types/seatTypes';

const initialState = {
    seats: []
}

const seatReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_SEAT: 
            return {
                seats: [...state.seats, action.payload]
            }

        case REMOVE_SEAT:
            let seatsArr = [...state.seats];
            return {
                seats: seatsArr.filter(seat => seat!=action.payload)
            }

        default:
            return state
    }
}

export default seatReducer;