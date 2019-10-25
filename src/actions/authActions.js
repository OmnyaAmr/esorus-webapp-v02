import {
    GET_ERRORS,
    SET_CURRENT_USER,
    FLUSH_ERRORS,
    ADMIN_PREV,
    STUDENT_PREV,
    USER_PREV,
    MOD_PREV,
    DROP_PREV,
    CONFIRMATION_REQUIRED,
    COMPLETION_REQUIRED
} from './types';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import { setLoading, setLoaded } from './loadActions';

export const SignUpUser = (userData, history) => dispatch => {
    //LOADING
    dispatch(setLoading());
    let formdata = new FormData();

    formdata.append('image', userData.image);
    formdata.set('name', userData.name);
    formdata.set('email', userData.email);
    formdata.set('password', userData.password);
    formdata.set('password2', userData.password2);
    formdata.set('gender', userData.gender);
    formdata.set('username', userData.username);

    axios
        .post('/api/user/signup', formdata)
        .then(res => {
            if (res) {
                history.push('/dashboard/login');
                dispatch(setLoaded());
                dispatch({
                    type: FLUSH_ERRORS
                });
            }
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
            dispatch(setLoaded());
        });
};

export const loginUser = userData => dispatch => {
    dispatch(setLoading());
    axios
        .post('/api/user/login', userData)
        .then(res => {
            dispatch({ type: FLUSH_ERRORS });
            //* Take the token and store it in Local Storage
            const { token } = res.data;
            localStorage.setItem('jwtToken', token);

            //* Set Authorization Headers to every Requiest
            setAuthToken(token);

            //Decode the token
            const decoded = jwt_decode(token);

            //Set Current User
            dispatch(setCurrentUser(decoded));

            //Set Current User Prev
            dispatch(setCurrentUserPrev(decoded));

            dispatch(setLoaded());
        })
        .catch(err => {
            dispatch({ type: GET_ERRORS, payload: err.response.data });
            dispatch(setLoaded());
        });
};

export const setCurrentUserPrev = decoded => {
    if (decoded === undefined) {
        return {
            type: DROP_PREV
        };
    }
    if (decoded.confirm) {
        let { TYPE } = decoded;
        if (TYPE === 'admin') {
            return {
                type: ADMIN_PREV
            };
        } else if (TYPE === 'student') {
            return {
                type: STUDENT_PREV
            };
        } else if (TYPE === 'regular') {
            return {
                type: USER_PREV
            };
        } else if (TYPE === 'moderator') {
            return {
                type: MOD_PREV
            };
        } else {
            return {
                type: DROP_PREV
            };
        }
    } else {
        if (decoded.incomplete) {
            return {
                type: COMPLETION_REQUIRED
            };
        } else {
            return {
                type: CONFIRMATION_REQUIRED
            };
        }
    }
};

//Set logged in user
export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    };
};

export const logoutUser = () => dispatch => {
    dispatch(setLoading());
    //Remove the token from Local Storage
    localStorage.removeItem('jwtToken');

    //Remove the auth header
    setAuthToken(false);

    // Set Current user to {} and isAuthenticated to false
    dispatch(setCurrentUser());
    dispatch(setCurrentUserPrev());
    dispatch({ type: FLUSH_ERRORS });
    dispatch(setLoaded());
};

// changeEmail

export const changeEmail = (emailSpecs, src) => dispatch => {
    axios
        .post('/api/user/signup/change-email', emailSpecs)
        .then(res => {
            src.showToast(
                'success',
                `Your confirmation email sent successfully to ${
                    res.data.accepted[0]
                }`
            );
            dispatch(logoutUser());
        })
        .catch(err => {
            dispatch({ type: GET_ERRORS, payload: err.response.data });
        });
};

// resetAction

export const resetPassword = (resetSpecs, SRC) => dispatch => {
    dispatch(setLoading());
    axios
        .post('/api/user/forgot', resetSpecs)
        .then(res => {
            SRC.showToast(
                'success',
                `Verification code sent to ${res.data.accepted[0]}`
            );
            SRC.props.history.push('/forget/confirm');
            dispatch(setLoaded());
        })
        .catch(err => {
            dispatch({ type: GET_ERRORS, payload: err.response.data });
            dispatch(setLoaded());
        });
};

// confirm

export const confirmEmail = SRC => dispatch => {
    dispatch(setLoading());
    axios
        .post('/api/user/signup/confirm')
        .then(res => {
            SRC.showToast(
                'success',
                `your confiramtion mail sent successfully to ${
                    res.data.accepted[0]
                }`
            );
            dispatch(logoutUser());
        })
        .catch(err => {
            dispatch({ type: GET_ERRORS, payload: err.response.data });
            dispatch(setLoaded());
        });
};

export const completeSignup = (userSpecs, SRC) => dispatch => {
    dispatch(setLoading());
    axios
        .post('/api/user/signup/complete', userSpecs)
        .then(res => {
            SRC.showToast(
                'success',
                `Confirmation mail sent successfuly to ${res.data.accepted[0]}`
            );
            dispatch(logoutUser());
        })
        .catch(err => {
            dispatch({ type: GET_ERRORS, payload: err.response.data });
            dispatch(setLoaded());
        });
};

export const confirmPassword = (passwordSpecs, SRC) => dispatch => {
    dispatch(setLoading());
    axios
        .post('/api/user/forgot/reset', passwordSpecs)
        .then(res => {
            SRC.showToast('success', 'Password Changed Successfuly !');
            SRC.props.history.push('/dashboard/login');
            dispatch(setLoaded());
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: GET_ERRORS, payload: err.response.data });
            dispatch(setLoaded());
        });
};
