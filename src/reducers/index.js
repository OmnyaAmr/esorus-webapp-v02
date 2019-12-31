import { combineReducers } from 'redux';
import ThemeOptions from './ThemeOptions';
import authReducer from './authReducer';
import errorReducer from './errorReducer';

import loadingReducer from './loadingReducer';

import contentReducer from './contentReducer';

import prevReducer from './prevReducer';

export default combineReducers({
	ThemeOptions: ThemeOptions,
	auth: authReducer,
	errors: errorReducer,
	loading: loadingReducer,
	prev: prevReducer,
	content: contentReducer,
});
