import { SET_SEARCH_INFO } from '../types/searchTypes';

const initialState = {
    searchInfo: null
};

const searchReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_SEARCH_INFO: 
            return {
                searchInfo: action.payload
            }

        default:
            return state
    }
}

export default searchReducer;