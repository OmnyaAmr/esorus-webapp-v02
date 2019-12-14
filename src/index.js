import React from 'react';
import ReactDOM from 'react-dom';
// import registerServiceWorker from './registerServiceWorker';
import { unregister } from './registerServiceWorker';

import { HashRouter, BrowserRouter as Router } from 'react-router-dom';
import './assets/base.css';
import Main from './DemoPages/Main';
import store from './config/configureStore';
import { Provider } from 'react-redux';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import {
	setCurrentUser,
	logoutUser,
	setCurrentUserPrev,
} from './actions/authActions';

const rootElement = document.getElementById('root');

if (localStorage.jwtToken) {
	// Decode
	const decoded = jwt_decode(localStorage.jwtToken);

	// Set Headers
	setAuthToken(localStorage.jwtToken);

	// Set Current User
	store.dispatch(setCurrentUser(decoded));

	// Set Current User Prev
	store.dispatch(setCurrentUserPrev(decoded));

	// Check for expired token
	const currentTime = Date.now() / 1000;
	if (decoded.exp < currentTime) {
		// Logout user
		store.dispatch(logoutUser());

		// Redirect to login
		window.location.href = '/dashboard/login';
	}
}

const renderApp = Component => {
	ReactDOM.render(
		<Provider store={store}>
			<HashRouter>
				<Component />
			</HashRouter>
		</Provider>,
		rootElement
	);
};

renderApp(Main);

if (module.hot) {
	module.hot.accept('./DemoPages/Main', () => {
		const NextApp = require('./DemoPages/Main').default;
		renderApp(NextApp);
	});
}
unregister();

// registerServiceWorker();
