import React, { Component, Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import isEmpty from '../validation/is-empty';
import axios from 'axios';
import classnames from 'classnames';
import {
    Card,
    CardBody,
    CardTitle,
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
            role: '',
            projectType: '',
            projectPhase: '',
            typeOfWorkNeeded: '',
            uploadedBOQ: '',
            details: '',
            boq: '',
            deliveryDate: '',
            errors: {},
            file: null,
            quantity: '',
            token: '',
            uploadedPic: ''
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
            this.setState({ token: user.token });
        }
    }
    onCheck(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    onUpload(e) {
        this.setState({ [e.target.name]: e.target.files[0] });
        let formdata = new FormData();
        formdata.append('file', this.state.file);
        axios
            .post('/api/upload-files', formdata)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
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
        let required = <small className='required'>*</small>;
        let boqContent;
        if (this.state.boq === 'false') {
            boqContent = (
                <FormGroup row>
                    <Label for='quantity'>Quantity{required}</Label>
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
                        <Card className='container'>
                            <CardBody>
                                <CardTitle className='text-center slogan4-text'>
                                    Request Form
                                </CardTitle>
                                <Form
                                    className='form-esorus m-auto'
                                    onSubmit={this.onSubmit}
                                >
                                    <FormGroup row>
                                        <Label for='name'>Name{required}</Label>
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

                                    <FormGroup row>
                                        <Label for='email'>
                                            Email{required}
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
                                    <FormGroup row>
                                        <Label for='role'>
                                            Professional role{required}
                                        </Label>
                                        <select
                                            name='role'
                                            className={classnames(
                                                'custom-select custom-select-md form-control-escrus',
                                                {
                                                    'is-invalid': errors.role
                                                }
                                            )}
                                            onChange={this.onChange}
                                            value={this.state.role}
                                        >
                                            <option value=''>
                                                Select your role ...
                                            </option>
                                            <option value='contractor'>
                                                Contractor
                                            </option>
                                            <option value='conslutant'>
                                                Consultant
                                            </option>
                                            <option value='project_owner'>
                                                Project owner
                                            </option>
                                            <option value='freelancer'>
                                                Freelancer intrior
                                                designer/Architect
                                            </option>
                                        </select>
                                        {errors.role && (
                                            <FormFeedback>
                                                {errors.role}
                                            </FormFeedback>
                                        )}
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for='projectType'>
                                            Project Type{required}
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
                                                Select your project type ...
                                            </option>
                                            <option value='residential'>
                                                Residential
                                            </option>
                                            <option value='restaurant'>
                                                Restaurant/Cafe
                                            </option>
                                            <option value='retail_shop'>
                                                Retial shop
                                            </option>
                                            <option value='hotel'>Hotel</option>
                                            <option value='office_space'>
                                                Office space
                                            </option>
                                            <option value='beauty_salon'>
                                                Spa/Beauty salon
                                            </option>
                                            <option value='hospital'>
                                                Hospital/Clinic
                                            </option>
                                            <option value='education_center'>
                                                School/Nursery/Education center
                                            </option>
                                            <option value='sport'>
                                                Sport/Gym/Fitness center
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
                                    <FormGroup row>
                                        <Label for='projectPhase'>
                                            Project Phase{required}
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
                                                Select your project phase ...
                                            </option>
                                            <option value='inspiration'>
                                                Still looking for inspirations
                                            </option>
                                            <option value='design_phase'>
                                                Design phase
                                            </option>
                                            <option value='technical_phase'>
                                                Technical phase
                                            </option>
                                            <option value='budget_estimation'>
                                                budget estimation
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
                                    <FormGroup row>
                                        <Label for='typeOfWorkNeeded'>
                                            What are you looking for ?{required}
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
                                                Select what you need ...
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
                                    <FormGroup row>
                                        <Label for='exampleFile'>
                                            Attach an image similar to what
                                            you're looking for in any of the
                                            following formats: jpg, png, pdf{' '}
                                            {required}
                                        </Label>
                                        <Input
                                            type='file'
                                            name='file'
                                            id='exampleFile'
                                            accept='image/*, pdf'
                                            onChange={event => {
                                                this.onUpload(event);
                                            }}
                                        />
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label>Additional Details</Label>
                                        <Input
                                            className='form-control-escrus'
                                            name='details'
                                            onChange={this.onChange}
                                            id='details'
                                            value={this.state.details}
                                        />
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label className='block'>
                                            Do you have a BoQ?{required}
                                        </Label>
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
                                    <FormGroup row>
                                        <Label>Date{required}</Label>
                                        <Input
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
                                            className='btn-escrus log-in block'
                                            onClick={this.onSubmit}
                                        >
                                            Submit Request{' '}
                                        </Button>
                                    </FormGroup>
                                    <FormGroup row>
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
export default connect(
    mapStateToProps,
    { requestForm }
)(Request);
