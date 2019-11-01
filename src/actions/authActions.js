import {
    GET_ERRORS,
    SET_CURRENT_USER,
    FLUSH_ERRORS,
    DROP_PREV,
    CONFIRMATION_REQUIRED,
    ROLE_PROFESSIONAL_BUYER,
    ROLE_SUPPLIER
} from './types';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import { setLoading, setLoaded } from './loadActions';

//HANDLE validations
import validateSignupInput from '../validation/SigupValidation';
import validateLoginInput from '../validation/LoginValidation';

export const SignUpUser = (userData, history) => dispatch => {
    dispatch({ type: FLUSH_ERRORS });
    let {
        companyName,
        companyDesc,
        url,
        name,
        email,
        role,
        password,
        password2
    } = userData;

    let newUser = {};
    newUser.authorities = [];

    let company = {};
    company.name = companyName;
    company.description = companyDesc;
    company.url = url;

    newUser.name = name;
    newUser.email = email;
    newUser.authorities.push(role);
    newUser.company = company;
    newUser.password = password;
    newUser.password2 = password2;

    let { isValid, errors } = validateSignupInput(newUser);

    if (!isValid) {
        dispatch({ type: GET_ERRORS, payload: errors });
        return;
    }

    dispatch(setLoading());
    axios
        .post('/api/register', newUser)
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
    dispatch({ type: FLUSH_ERRORS });
    let { isValid, errors } = validateLoginInput(userData);

    if (!isValid) {
        dispatch({ type: GET_ERRORS, payload: errors });
        return;
    }
    dispatch(setLoading());
    axios
        .post('/api/authenticate', userData)
        .then(res => {
            dispatch({ type: FLUSH_ERRORS });
            //* Take the token and store it in Local Storage
            const { id_token } = res.data;
            localStorage.setItem('jwtToken', id_token);

            //* Set Authorization Headers to every Requiest
            setAuthToken(id_token);

            //Decode the token

            let decoded = jwt_decode(id_token);
            decoded.token = id_token;

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
    if (decoded.active) {
        let { auth } = decoded;

        if (auth === 'ROLE_PROFESSIONAL_BUYER,ROLE_USER') {
            return {
                type: ROLE_PROFESSIONAL_BUYER
            };
        } else if (auth === 'ROLE_SUPPLIER,ROLE_USER') {
            return {
                type: ROLE_SUPPLIER
            };
        } else {
            return {
                type: DROP_PREV
            };
        }
    } else {
        return {
            type: CONFIRMATION_REQUIRED
        };
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

export const confirmEmail = (activitionKey, history) => dispatch => {
   
    dispatch(setLoading());
    axios
        .get('/api/activate?key=' + activitionKey)
        .then(res => {
            dispatch(setloaded());
            history.push('/dashboard/login');
        })
        .catch(err => {
            dispatch(setloaded());
            history.push('/dashboard/login');
        });
};
