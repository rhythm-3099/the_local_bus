import { SET_SEARCH_INFO } from '../types/searchTypes';

export const setSearchInfo = (searchInfo) => {
    return {    
        type: SET_SEARCH_INFO,
        payload: searchInfo,
        info: 'Action to set the search parameters'
    }
}