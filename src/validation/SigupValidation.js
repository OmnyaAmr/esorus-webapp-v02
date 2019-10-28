import isEmpty from './is-empty';
import Validator from 'validator';

import { ROLE_PROFESSIONAL_BUYER, ROLE_SUPPLIER } from '../actions/types';

const validateSignupInput = data => {
    let errors = {};

    data.name = !isEmpty(data.name) ? data.name : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    data.password2 = !isEmpty(data.password2) ? data.password2 : '';
    data.authorities[0] = !isEmpty(data.authorities[0])
        ? data.authorities[0]
        : '';
    data.company.name = !isEmpty(data.company.name) ? data.company.name : '';
    data.company.description = !isEmpty(data.company.description)
        ? data.company.description
        : '';
    data.company.url = !isEmpty(data.company.url) ? data.company.url : '';

    if (!isEmpty(data.authorities[0])) {
        let role = data.authorities[0];
        if (role === ROLE_PROFESSIONAL_BUYER) {
            if (Validator.isEmpty(data.company.name)) {
                errors.companyName = 'Company name is required';
            }
        }
        if (role === ROLE_SUPPLIER) {
            if (Validator.isEmpty(data.company.name)) {
                errors.companyName = 'Company name is required';
            }
            if (Validator.isEmpty(data.company.description)) {
                errors.companyDesc = 'Company description is required';
            }
            if (Validator.isEmpty(data.company.url)) {
                errors.url = 'Company URL or Facebook is required';
            }
        }
    } else {
        errors.role = 'Role is required';
    }

    if (!Validator.isLength(data.name, { min: 6, max: 30 })) {
        errors.name = 'Name is must be between 6 and 30 characters';
    }

    if (!Validator.isLength(data.email, { min: 6, max: 30 })) {
        errors.email = 'Email is must be between 6 and 30';
    }

    if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = 'Password is must be between 6 and 30';
    }

    if (!Validator.isEmail(data.email)) {
        errors.email = 'Email is not valid';
    }

    if (!Validator.equals(data.password, data.password2)) {
        errors.password2 = 'Kindly check the Confirm Password';
    }

    if (Validator.isEmpty(data.name)) {
        errors.name = 'Name must specified';
    }

    if (Validator.isEmpty(data.email)) {
        errors.email = 'Email must specified';
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = 'Password must specified';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};

export default validateSignupInput;
