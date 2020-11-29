import { SET_BUS_INFO, REMOVE_BUS_INFO } from '../types/busInfoTypes';

const initialState = {
    busData: null
};

const busInfoReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_BUS_INFO:
            return {
                ...state,
                busData: action.payload
            }

        case REMOVE_BUS_INFO:
            return {
                ...state,
                busData: null
            }

        default:
            return state
    }
}

export default busInfoReducer;