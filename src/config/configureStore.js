import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const middleware = [thunk];
const INITIAL_STATE = {};

const store = createStore(
    rootReducer,
    INITIAL_STATE,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;
