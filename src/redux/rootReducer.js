import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import seatReducer from './reducers/seatReducer';
import priceReducer from './reducers/priceReducer';
import busInfoReducer from './reducers/busInfoReducer';
import passengerReducer from './reducers/passengerReducer';
import contactReducer from './reducers/contactReducer';
import searchReducer from './reducers/searchReducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['seat', 'price', 'bus', 'passenger', 'contact', 'searchInfo']
}

const rootReducer = combineReducers({
    seat: seatReducer,
    price: priceReducer,
    bus: busInfoReducer,
    passenger: passengerReducer,
    contact: contactReducer,
    searchInfo: searchReducer
});

export default persistReducer(persistConfig, rootReducer);