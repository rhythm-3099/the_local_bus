import { combineReducers } from 'redux';

import seatReducer from './reducers/seatReducer';
import priceReducer from './reducers/priceReducer';
import busInfoReducer from './reducers/busInfoReducer';
import passengerReducer from './reducers/passengerReducer';
import contactReducer from './reducers/contactReducer';
import searchReducer from './reducers/searchReducer';

const rootReducer = combineReducers({
    seat: seatReducer,
    price: priceReducer,
    bus: busInfoReducer,
    passenger: passengerReducer,
    contact: contactReducer,
    searchInfo: searchReducer
});

export default rootReducer;