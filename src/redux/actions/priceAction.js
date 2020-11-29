import { SET_PRICE, SET_FINAL_PRICE } from '../types/priceTypes';

export const setPrice = (price) => {
    return {
        type: SET_PRICE,
        payload: price,
        info: 'Action to set the price of one bus ticket'
    }
}

export const setFinalPrice = (finalPrice) => {
    return {
        type: SET_FINAL_PRICE,
        payload: finalPrice,
        info: 'Action to set the total billable amount'
    }
}