import { SET_PASSENGER, REMOVE_PASSENGER } from '../types/passengerTypes';

const initialState = {
    passengers: []
};

const passengerReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_PASSENGER:
            return {
                passengers: 
                    // ...state.passengers,
                    action.payload
                
            }

        case REMOVE_PASSENGER:
            return {
                passengers: []
            }

        default:
            return state
    }
}

export default passengerReducer;