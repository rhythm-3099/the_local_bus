import { SET_CONTACT } from '../types/contactTypes';

const initialState = {
    contact: null
}

const contactReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_CONTACT:
            return {
                contact: action.payload
            }

        default:
            return state
    }
}

export default contactReducer;