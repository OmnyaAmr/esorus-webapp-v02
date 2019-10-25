import {
    ADMIN_PREV,
    MOD_PREV,
    STUDENT_PREV,
    USER_PREV,
    DROP_PREV,
    CONFIRMATION_REQUIRED,
    COMPLETION_REQUIRED
} from '../actions/types';
let initial_state = '';

export default function(state = initial_state, action) {
    switch (action.type) {
        case COMPLETION_REQUIRED:
            return COMPLETION_REQUIRED;
        case CONFIRMATION_REQUIRED:
            return CONFIRMATION_REQUIRED;
        case ADMIN_PREV:
            return ADMIN_PREV;
        case MOD_PREV:
            return MOD_PREV;
        case STUDENT_PREV:
            return STUDENT_PREV;
        case USER_PREV:
            return USER_PREV;
        case DROP_PREV:
            return '';
        default:
            return state;
    }
}
