import {
    ROLE_PROFESSIONAL_BUYER,
    ROLE_SUPPLIER,
    CONFIRMATION_REQUIRED,
    DROP_PREV
} from '../actions/types';
let initial_state = '';

export default function(state = initial_state, action) {
    switch (action.type) {
        case ROLE_PROFESSIONAL_BUYER:
            return ROLE_PROFESSIONAL_BUYER;
        case CONFIRMATION_REQUIRED:
            return CONFIRMATION_REQUIRED;
        case ROLE_SUPPLIER:
            return ROLE_SUPPLIER;
        case DROP_PREV:
            return '';
        default:
            return state;
    }
}
