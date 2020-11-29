import { SET_PASSENGER } from '../types/passengerTypes';

export const setPassenger = (passenger) => {
    return {
        type: SET_PASSENGER,
        payload: passenger,
        info: 'Action to set the information of the passenger'
    }
}