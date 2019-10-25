import { GET_ERRORS, FLUSH, FLUSH_ERRORS } from '../actions/types';

const INITIAL_STATE = {};

export default function (state = INITIAL_STATE ,action) {
    switch(action.type) {
        case FLUSH:
            return {};
        case GET_ERRORS:
            return action.payload;
        case FLUSH_ERRORS:
            return {};
        default:
            return state;
    }
}
