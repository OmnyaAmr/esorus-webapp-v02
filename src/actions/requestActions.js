import axios from 'axios';
import { setLoading, setLoaded } from './loadActions';
import { GET_ERRORS, FLUSH_ERRORS } from './types';
import validateRequestForm from '../validation/RequestValidation';

export const requestForm = reqData => dispatch => {
    dispatch({ type: FLUSH_ERRORS });

    let { isValid, errors } = validateRequestForm(reqData);

    if (!isValid) {
        dispatch({ type: GET_ERRORS, payload: errors });
        return;
    }

    dispatch(setLoading());
    axios
        .post('/api/request-for-supplier')
        .then(res => {
            dispatch(setLoaded());
        })
        .catch(err => {
            dispatch({ type: GET_ERRORS, payload: err.response.data });
            dispatch(setLoaded());
        });
};
