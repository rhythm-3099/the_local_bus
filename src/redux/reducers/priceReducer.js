import { SET_PRICE, SET_FINAL_PRICE } from '../types/priceTypes';

const initialState = {
    price: 0,
    finalPrice: 0
}

const priceReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_PRICE:
            return {
                ...state,
                price: action.payload
            }

        case SET_FINAL_PRICE:
            return {
                ...state,
                finalPrice: action.payload
            }
        
        default:
            return state
    }
}

export default priceReducer;