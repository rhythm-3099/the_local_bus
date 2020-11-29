import { SET_PASSENGER } from '../types/passengerTypes';

const initialState = {
    passengers: []
};

const passengerReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_PASSENGER:
            return {
                passengers: [
                    ...state.passengers,
                    action.payload
                ]
            }

        default:
            return state
    }
}

export default passengerReducer;