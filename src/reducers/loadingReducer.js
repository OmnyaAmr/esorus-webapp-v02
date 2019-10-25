import { LOADING, LOADED } from '../actions/types'

const INITIAL_STATE = {
    loading: false
}

export default function (state = INITIAL_STATE ,action) {
    switch(action.type) {
        case LOADING:
            return {
                ...state,
            loading: true
            }
        case LOADED:
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
}
