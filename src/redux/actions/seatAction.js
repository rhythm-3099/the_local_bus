import { ADD_SEAT, REMOVE_SEAT } from '../types/seatTypes';

export const addSeat = (seatNum) => {
    return {
        type: ADD_SEAT,
        info: 'Action to add a seat',
        payload: seatNum
    }
}

export const removeSeat = (seatNum) => {
    return {
        type: REMOVE_SEAT,
        info: 'Action to remove a seat',
        payload: seatNum
    }
}
