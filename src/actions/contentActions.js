import { HOME, BUYER, SUPPLIER, GET_ERRORS } from './types';
import axios from 'axios';
import { setLoading, setLoaded } from './loadActions';

const token = 'a8f5f167f44f4964e6c998dee827110c';

export const homeContent = () => dispatch => {
	dispatch(setLoading());

	axios.defaults.headers.common['token'] = token;

	axios
		.get('/api/home/3')
		.then(res => {
			dispatch({ type: HOME, payload: res.data });
			dispatch(setLoaded());
		})
		.catch(err => {
			dispatch({ type: GET_ERRORS, payload: err.response.data });
			dispatch(setLoaded());
		});
};

export const buyerContent = () => dispatch => {
	dispatch(setLoading());
	axios.defaults.headers.common['token'] = token;
	axios
		.get('/api/home/4')
		.then(res => {
			dispatch({ type: BUYER, payload: res.data });
			dispatch(setLoaded());
		})
		.catch(err => {
			dispatch({ type: GET_ERRORS, payload: err.respose.data });
			dispatch(setLoaded());
		});
};

export const supplierContent = () => dispatch => {
	dispatch(setLoading());
	axios.defaults.headers.common['token'] = token;
	axios
		.get('/api/home/5')
		.then(res => {
			dispatch({ type: SUPPLIER, payload: res.data });
			dispatch(setLoaded());
		})
		.catch(err => {
			dispatch({ type: GET_ERRORS, payload: err.response.data });
			dispatch(setLoaded());
		});
};

// "proxy": "https://esorus.herokuapp.com"
