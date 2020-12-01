import { SET_PASSENGER, REMOVE_PASSENGER } from '../types/passengerTypes';

export const setPassenger = (passenger) => {
    return {
        type: SET_PASSENGER,
        payload: passenger,
        info: 'Action to set the information of the passenger'
    }
}

export const removePassenger = () => {
    return {
        type: REMOVE_PASSENGER,
        info: 'Action to clear all passenger information'
    }
}