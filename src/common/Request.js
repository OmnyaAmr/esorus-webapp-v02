import React, { Component, Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import isEmpty from '../validation/is-empty';
import classnames from 'classnames';
import {
    Card,
    CardBody,
    Button,
    Input,
    FormGroup,
    Label,
    FormFeedback,
    Form
} from 'reactstrap';
import { connect } from 'react-redux';
import { requestForm } from '../actions/requestActions';
import Spinner from './Spinner';
import { toast } from 'react-toastify';

class Request extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            phone: '',
            professionalRole: '',
            projectType: '',
            projectPhase: '',
            typeOfWorkNeeded: '',
            details: '',
            boq: '',
            deliveryDate: '',
            errors: {},
            file: null,
            quantity: '',
            token: '',
            uploadedPic: '',
            boqfile: null,
            reqs: '',
            other: ''
        };
        this.onClick = this.onClick.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onCheck = this.onCheck.bind(this);
        this.onUpload = this.onUpload.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }
    showToast = (type, msg) => toast[type](msg);
    componentWillMount() {
        let { user, isAuthenticated } = this.props.auth;
        if (isAuthenticated) {
            this.setState({ email: user.email });
            this.setState({ name: user.name });
        }
    }

    onCheck(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    onUpload(e) {
        this.setState({ [e.target.name]: e.target.files[0] });
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit(e) {
        e.preventDefault();
        let request = this.state;
        this.props.requestForm(request, this);
    }
    onClick(e) {
        e.preventDefault();
        this.state = {};
        this.props.history.push('/dashboard/home');
    }

    render() {
        //HANDLE loading
        let { loading } = this.props.loading;
        if (loading) return <Spinner />;
        //HANDLE errors
        let { errors } = this.state;
        let boqContent;
        if (this.state.boq === 'false') {
            boqContent = (
                <FormGroup row>
                    <Label for='quantity'>No problem, can you just write down the quantity?</Label>
                    <Input
                        className='form-control-escrus'
                        type='quantity'
                        name='quantity'
                        id='quantity'
                        value={this.state.quantity}
                        onChange={this.onChange}
                        invalid={!isEmpty(errors.quantity)}
                    />
                    <FormFeedback>{errors.quantity}</FormFeedback>
                </FormGroup>
            );
        } else if (this.state.boq === 'true') {
            boqContent = <FormGroup row>
            <Label for='exampleFile' className="block">
                Can you please upload it here?
            </Label>
            <p className="request-form-tip">
                Your file has to be 
                in any of the following 
                formats: jpg, png or pdf
            </p>
            <Input
                type='file'
                name='boqfile'
                id='exampleFile'
                accept='image/*, pdf'
                onChange={event => {
                    this.onUpload(event);
                }}
            />
            {errors.boqfile && (
                <FormFeedback>
                    {errors.boqfile}
                </FormFeedback>
            )}
        </FormGroup>
        }

        return (
            <Fragment>
                <ReactCSSTransitionGroup
                    component='div'
                    transitionName='TabsAnimation'
                    transitionAppear={true}
                    transitionAppearTimeout={0}
                    transitionEnter={false}
                    transitionLeave={false}
                >
                    <div className='app-main-enhanced'>
                        <Card className='container request-form'>
                            <CardBody>
                                <h4 className='text-center request-form-font'>
                                    Request Form
                                </h4>
                                <p className="text-center requesst-form-font request-form-p">
                                    Let’s get you started! Answer a 
                                    few questions and our team will 
                                    help you find what you’re looking for.
                                </p>
                                <Form
                                    className='form-esorus m-auto'
                                    onSubmit={this.onSubmit}
                                >

                                    <div className="text-center mt-5 mb-5 request-header">
                                        <h6 className="request-header-text mt-2">Your Information</h6>
                                    </div>

                                <div className="request-section mb-5">
                                    <div className="request-subsection">
                                        <FormGroup >
                                            <Label for='name' className="request-fields">Name</Label>
                                            <Input
                                                className='form-control-escrus'
                                                type='name'
                                                name='name'
                                                id='name'
                                                value={this.state.name}
                                                onChange={this.onChange}
                                                invalid={!isEmpty(errors.name)}
                                            />
                                            <FormFeedback>
                                                {errors.email}
                                            </FormFeedback>
                                        </FormGroup>

                                        <FormGroup >
                                            <Label for='email' className="request-fields">
                                                Email
                                            </Label>
                                            <Input
                                                className='form-control-escrus'
                                                type='email'
                                                name='email'
                                                id='email'
                                                value={this.state.email}
                                                onChange={this.onChange}
                                                invalid={!isEmpty(errors.email)}
                                            />
                                            <FormFeedback>
                                                {errors.email}
                                            </FormFeedback>
                                        </FormGroup>
                                    </div>
                                    <div className="request-subsection">
                                        <FormGroup >
                                            <Label className="request-fields ">
                                                Phone Number
                                            </Label>
                                            <Input 
                                                className='form-control-escrus'
                                                name="phone" 
                                                id="phone"
                                                placeholder="Write your number here"
                                                value={this.state.phone} 
                                                onChange={this.onChange} 
                                                invalid = {!isEmpty(errors.phone)} 
                                            />
                                        </FormGroup>

                                        <FormGroup >
                                            <Label for='professionalRole' className="request-fields">
                                                Role
                                            </Label>
                                            <select
                                                name='professionalRole'
                                                className={classnames(
                                                    'form-control-escrus',
                                                    {
                                                        'is-invalid':
                                                            errors.professionalRole
                                                    }
                                                )}
                                                onChange={this.onChange}
                                                value={this.state.professionalRole}
                                            >
                                                <option value=''>
                                                    Select one ...
                                                </option>
                                                <option value='contractor'>
                                                    Contractor
                                                </option>
                                                <option value='conslutant'>
                                                    Consultant  
                                                </option>
                                                <option value='project_owner'>
                                                    Interior Designer / Architect
                                                </option>
                                                <option value='freelancer'>
                                                    Freelance Interior Designer/ Architect
                                                </option>
                                                <option value='other'>
                                                    Other
                                                </option>
                                            </select>
                                            {this.state.professionalRole === 'other' 
                                            && 
                                            (<Input 
                                                className="form-control-escrus mt-2"
                                                name="other" 
                                                onChange={this.onChange}
                                                value={this.state.other}
                                                placeholder="Please specify"
                                            />)}
                                            
                                            {errors.professionalRole && (
                                                <FormFeedback>
                                                    {errors.professionalRole}
                                                </FormFeedback>
                                            )}
                                            </FormGroup>
                                    </div>
                                </div>
                                <div className="text-center mb-5 request-header">
                                        <h6 className="request-header-text mt-2">Project Information</h6>
                                    </div>

                                        <FormGroup className="mb-3">
                                            <Label for='projectType' className="request-fields">
                                                What type of Project do you need our help in?
                                            </Label>
                                            <select
                                                id='projectType'
                                                name='projectType'
                                                className={classnames(
                                                    'custom-select custom-select-md form-control-escrus',
                                                    {
                                                        'is-invalid':
                                                            errors.projectType
                                                    }
                                                )}
                                                onChange={this.onChange}
                                                value={this.state.projectType}
                                            >
                                                <option value=''>
                                                    Select one ...
                                                </option>
                                                <option value='residential'>
                                                    Residential
                                                </option>
                                                <option value='restaurant'>
                                                    Restaurant/ Cafe
                                                </option>
                                                <option value='retail_shop'>
                                                    Retial Shop
                                                </option>
                                                <option value='hotel'>Hotel</option>
                                                <option value='office_space'>
                                                    Office Space
                                                </option>
                                                <option value='beauty_salon'>
                                                    Spa/ Beauty Salon
                                                </option>
                                                <option value='hospital'>
                                                    Hospital/ Clinic
                                                </option>
                                                <option value='education_center'>
                                                    School/ Nursery/ Education Center
                                                </option>
                                                <option value='sport'>
                                                    Gym/ Fitness center
                                                </option>
                                                <option value='landscape'>
                                                    Landscape
                                                </option>
                                            </select>
                                            {errors.projectType && (
                                                <FormFeedback>
                                                    {errors.projectType}
                                                </FormFeedback>
                                            )}
                                        </FormGroup>
                                        <FormGroup className="mb-3" >
                                            <Label for='projectPhase' className="request-fields">
                                                What Project phase are you in right now ?
                                            </Label>
                                            <select
                                                id='projectPhase'
                                                name='projectPhase'
                                                className={classnames(
                                                    'custom-select custom-select-md form-control-escrus',
                                                    {
                                                        'is-invalid':
                                                            errors.projectPhase
                                                    }
                                                )}
                                                onChange={this.onChange}
                                                value={this.state.projectPhase}
                                            >
                                                <option value=''>
                                                    Select one ...
                                                </option>
                                                <option value='inspiration'>
                                                    Still looking for inspiration
                                                </option>
                                                <option value='design_phase'>
                                                    Design Phase
                                                </option>
                                                <option value='technical_phase'>
                                                    Technical Phase
                                                </option>
                                                <option value='budget_estimation'>
                                                    Budget Estimation
                                                </option>
                                                <option value='execution'>
                                                    Execution
                                                </option>
                                            </select>
                                            {errors.projectPhase && (
                                                <FormFeedback>
                                                    {errors.projectPhase}
                                                </FormFeedback>
                                            )}
                                        </FormGroup>
                                    
                                    <FormGroup className= "mb-5">
                                        <Label for='typeOfWorkNeeded' className="request-fields">
                                            What are you looking for ?
                                        </Label>
                                        <select
                                            id='typeOfWorkNeeded'
                                            name='typeOfWorkNeeded'
                                            className={classnames(
                                                'custom-select custom-select-md form-control-escrus',
                                                {
                                                    'is-invalid':
                                                        errors.typeOfWorkNeeded
                                                }
                                            )}
                                            onChange={this.onChange}
                                            value={this.state.typeOfWorkNeeded}
                                        >
                                            <option value=''>
                                                Select one ...
                                            </option>
                                            <option value='finishing'>
                                                Finishing
                                            </option>
                                            <option value='furniture'>
                                                Furniture
                                            </option>
                                            <option value='accessories'>
                                                Accessories
                                            </option>
                                            <option value='fabrics'>
                                                Fabrics
                                            </option>
                                        </select>
                                        {errors.typeOfWorkNeeded && (
                                            <FormFeedback>
                                                {errors.typeOfWorkNeeded}
                                            </FormFeedback>
                                        )}
                                    </FormGroup>
                                    <FormGroup className="mb-3">
                                        <Label className="block request-fields mb-0">
                                            Please describe what you’re looking for
                                        </Label>
                                        <p className="request-form-tip">
                                            We will understand 
                                            if you wrote in any language, 
                                            try to be as detailed as possible
                                        </p>
                                        <Input
                                            className='form-control-escrus'
                                            name='details'
                                            onChange={this.onChange}
                                            id='details'
                                            value={this.state.details}
                                            invalid={!isEmpty(errors.details)}
                                        />
                                        {errors.details && (
                                            <FormFeedback>
                                                {errors.details}
                                            </FormFeedback>
                                        )}
                                    </FormGroup>
                                    <FormGroup className="mb-3">
                                        <Label for='exampleFile' className="block request-fields mb-0">
                                            Great! 
                                            If you have a picture similar to what you’re looking for, 
                                            please upload it.
                                        </Label>
                                        <p className="request-form-tip">
                                            Your image has to be 
                                            in any of the following 
                                            formats: jpg, png or pdf
                                        </p>
                                        <Input
                                            type='file'
                                            name='file'
                                            id='exampleFile'
                                            accept='image/*, pdf'
                                            onChange={event => {
                                                this.onUpload(event);
                                            }}
                                        />
                                        {errors.file && (
                                            <FormFeedback>
                                                {errors.file}
                                            </FormFeedback>
                                        )}
                                    </FormGroup>

                                    <FormGroup className="mb-3">
                                        <Label className='block request-fields'>
                                            Do you have a BoQ?
                                        </Label>
                                        <p className="request-form-tip" >
                                            Note: Bill of Quantity.
                                        </p>
                                        <div className='form-check block'>
                                            <input
                                                type='radio'
                                                className='form-check-input'
                                                id='boq'
                                                name='boq'
                                                value={true}
                                                onChange={this.onCheck}
                                            />
                                            <Label>Yes</Label>
                                        </div>
                                        <div className='form-check block'>
                                            <input
                                                type='radio'
                                                className='form-check-input'
                                                id='boq'
                                                name='boq'
                                                value={false}
                                                onChange={this.onCheck}
                                            />
                                            <Label>No</Label>
                                        </div>
                                        {errors.boq && (
                                            <FormFeedback>
                                                {errors.boq}
                                            </FormFeedback>
                                        )}
                                    </FormGroup>
                                    {boqContent}
                                    <FormGroup className="mb-3">
                                        <Label className="request-fields">
                                            We’re almost done, 
                                            do you have special 
                                            requirements for your request?
                                        </Label>
                                        <Input
                                            name="reqs"
                                            value={this.state.reqs}
                                            className='form-control-escrus'
                                            onChange={this.onChange}
                                        />
                                    </FormGroup>
                                    <FormGroup className="mb-3">
                                        <Label className="block request-fields mb-0">
                                            Lastly, 
                                            when do you 
                                            need it delivered?
                                        </Label>
                                        <p className="request-form-tip">
                                            Note: If less than 3-5 days, it will have to be something in stock.
                                        </p>
                                        <input
                                            type='date'
                                            className={classnames(
                                                'form-control-escrus',
                                                {
                                                    'is-invalid': !isEmpty(
                                                        errors.deliveryDate
                                                    )
                                                }
                                            )}
                                            name='deliveryDate'
                                            id='deliveryDate'
                                            value={this.state.deliveryDate}
                                            onChange={this.onChange}
                                        />
                                        {errors.deliveryDate && (
                                            <FormFeedback>
                                                {errors.deliveryDate}
                                            </FormFeedback>
                                        )}
                                    </FormGroup>

                                    <FormGroup row>
                                        <Button
                                            className='btn-escrus log-in block mt-4 mb-2'
                                            onClick={this.onSubmit}
                                        >
                                            Submit Request{' '}
                                        </Button>
                                        <Button
                                            className='btn-escrus-inv log-in block'
                                            onClick={this.onClick}
                                        >
                                            Cancel{' '}
                                        </Button>
                                    </FormGroup>
                                </Form>
                            </CardBody>
                        </Card>
                    </div>
                </ReactCSSTransitionGroup>
            </Fragment>
        );
    }
}
const mapStateToProps = state => ({
    loading: state.loading,
    errors: state.errors,
    auth: state.auth
});
export default connect(mapStateToProps, { requestForm })(Request);
