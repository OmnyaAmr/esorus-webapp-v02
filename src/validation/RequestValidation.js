import Validator from 'validator';
import isEmpty from './is-empty';

const validateReqeustInput = data => {
    let errors = {};
    data.name = !isEmpty(data.name) ? data.name : '';
    data.quantity = !isEmpty(data.quantity) ? data.quantity : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.professionalRole = !isEmpty(data.professionalRole)
        ? data.professionalRole
        : '';
    data.projectType = !isEmpty(data.projectType) ? data.projectType : '';
    data.projectPhase = !isEmpty(data.projectPhase) ? data.projectPhase : '';
    data.deliveryDate = !isEmpty(data.deliveryDate) ? data.deliveryDate : '';
    data.boq = !isEmpty(data.boq) ? data.boq : '';
    data.typeOfWorkNeeded = !isEmpty(data.typeOfWorkNeeded)
        ? data.typeOfWorkNeeded
        : '';
    if (Validator.isEmpty(data.name)) {
        errors.name = 'Name is required';
    }
    if (Validator.isEmpty(data.email)) {
        errors.email = 'Email required';
    }

    if (!Validator.isEmail(data.email)) {
        errors.email = 'Please check your email format';
    }

    if (Validator.isEmpty(data.professionalRole)) {
        errors.professionalRole = 'Role is required';
    }
    if (Validator.isEmpty(data.projectType)) {
        errors.projectType = 'Project type is required';
    }

    if (Validator.isEmpty(data.projectPhase)) {
        errors.projectPhase = 'Project phase is required';
    }

    if (Validator.isEmpty(data.deliveryDate)) {
        errors.deliveryDate = 'Delivery date is required';
    }

    if (Validator.isEmpty(data.typeOfWorkNeeded)) {
        errors.typeOfWorkNeeded = 'Kindly specify what you are looking for';
    }

    if (Validator.isEmpty(data.boq)) {
        errors.boq = 'BoQ is required';
    }

    if (data.boq === 'false') {
        if (Validator.isEmpty(data.quantity)) {
            errors.quantity = 'Quantity is required';
        }
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};

export default validateReqeustInput;
