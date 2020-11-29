import { combineReducers } from 'redux';

import seatReducer from './reducers/seatReducer';

const rootReducer = combineReducers({
    seat: seatReducer
});

export default rootReducer;