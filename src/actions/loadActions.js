import { LOADING, LOADED } from './types';

export const setLoading = () => {
    return{
        type: LOADING
    }
}

export const setLoaded = () => {
    return {
        type: LOADED
    }
}
