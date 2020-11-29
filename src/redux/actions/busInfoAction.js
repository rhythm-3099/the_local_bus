import { SET_BUS_INFO, REMOVE_BUS_INFO } from '../types/busInfoTypes';

export const setBusInfo = (busData) => {
    return {
        type: SET_BUS_INFO,
        payload: busData,
        info: 'Action to set the bus data'
    }
}

export const removeBusInfo = () => {
    return {
        type: REMOVE_BUS_INFO,
        info: 'Action to remove the bus data'
    }
}