import { combineReducers } from 'redux';

import seatReducer from './reducers/seatReducer';
import priceReducer from './reducers/priceReducer';
import busInfoReducer from './reducers/busInfoReducer';
import passengerReducer from './reducers/passengerReducer';

const rootReducer = combineReducers({
    seat: seatReducer,
    price: priceReducer,
    bus: busInfoReducer,
    passenger: passengerReducer
});

export default rootReducer;