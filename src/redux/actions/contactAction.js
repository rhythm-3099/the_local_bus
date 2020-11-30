import { SET_CONTACT } from '../types/contactTypes';

export const setContact = (contact) => {
    return {
        type: SET_CONTACT,
        payload: contact,
        info: 'Action to set the contact information'
    }
}