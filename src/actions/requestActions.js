import axios from 'axios';
import { setLoading, setLoaded } from './loadActions';
import { GET_ERRORS, FLUSH_ERRORS } from './types';
import validateRequestForm from '../validation/RequestValidation';

export const requestForm = (reqData, SRC) => dispatch => {
    dispatch({ type: FLUSH_ERRORS });

    let { isValid, errors } = validateRequestForm(reqData);

    if (!isValid) {
        dispatch({ type: GET_ERRORS, payload: errors });
        return;
    }

    dispatch(setLoading());
    axios
        .post('/api/request-for-supplier', reqData)
        .then(res => {
            SRC.showToast(
                'success',
                'Congratulations .. Your request has been successfully registered !'
            );
            SRC.props.history.push('/dashboard/home');
            dispatch(setLoaded());
        })
        .catch(err => {
            console.log('Request Error: ', err.response.data);
            dispatch({ type: GET_ERRORS, payload: err.response.data });
            dispatch(setLoaded());
        });
};
