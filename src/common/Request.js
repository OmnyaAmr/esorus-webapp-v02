import React, { Component, Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import isEmpty from '../validation/is-empty';
import Uploader from './Uploader';
import classnames from 'classnames';
import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Button,
    Input,
    FormGroup,
    Row,
    Col,
    Label,
    FormFeedback,
    Form
} from 'reactstrap';

class Request extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            role: '',
            projectType: '',
            projectPhase: '',
            lookingFor: '',
            fileLink: '',
            details: '',
            boq: '',
            deliveryDate: '',
            errors: {},
            file: ''
        };
        this.onClick = this.onClick.bind(this);
        this.onChange = this.onChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
        this.onFileUpload = this.onFileUpload.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onCheck = this.onCheck.bind(this);
    }
    onCheck(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    onFileUpload(meta) {
        console.log('PARENT: ', meta);
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit(e) {
        e.preventDefault();
        let request = this.state;
        console.log('REq: ', request);
    }
    onClick(e) {
        e.preventDefault();
        this.props.history.push('/dashboard/home');
    }
    handleUpload() {
        console.log('HANDLE UPLOAD');
    }
    render() {
        //HANDLE errors
        let { errors } = this.state;
        let required = <small className='required'>*</small>;
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
                                <CardTitle className='text-center'>
                                    Request Form
                                </CardTitle>
                                <Form
                                    className='form-esorus m-auto'
                                    onSubmit={this.onSubmit}
                                >
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
                                            <option value='consultant'>
                                                Consultant
                                            </option>
                                            <option value='project owner'>
                                                Project owner
                                            </option>
                                            <option value='freelance interior designer/architect'>
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
                                            <option value='restaurant/cafe'>
                                                Restaurant/Cafe
                                            </option>
                                            <option value='retial shop'>
                                                Retial shop/
                                            </option>
                                            <option value='hotel'>Hotel</option>
                                            <option value='office'>
                                                Office space
                                            </option>
                                            <option value='spa/beauty salon'>
                                                Spa/Beauty salon
                                            </option>
                                            <option value='hospital/clinic'>
                                                Hospital/Clinic
                                            </option>
                                            <option value='school/nursery/education center'>
                                                School/Nursery/Education center
                                            </option>
                                            <option value='sport/gym/fitness center'>
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
                                            <option value='still looking for inspiration'>
                                                Still looking for inspirations
                                            </option>
                                            <option value='design phase'>
                                                Design phase
                                            </option>
                                            <option value='technical phase'>
                                                Technical phase
                                            </option>
                                            <option value='budget estimation'>
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
                                        <Label for='lookingFor'>
                                            what are you looking for ?{required}
                                        </Label>
                                        <select
                                            id='lookingFor'
                                            name='lookingFor'
                                            className={classnames(
                                                'custom-select custom-select-md form-control-escrus',
                                                {
                                                    'is-invalid':
                                                        errors.lookingFor
                                                }
                                            )}
                                            onChange={this.onChange}
                                            value={this.state.lookingFor}
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
                                        {errors.lookingFor && (
                                            <FormFeedback>
                                                {errors.lookingFor}
                                            </FormFeedback>
                                        )}
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for='uploader'>
                                            Attach an image to what you're
                                            looking for
                                            <br />
                                            in any of the following formats .jpg
                                            / .png / .pdf:{required}
                                        </Label>
                                        <Uploader
                                            id='uploader'
                                            onUpload={this.onFileUpload}
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
                                                value='yes'
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
                                                value='no'
                                                onChange={this.onCheck}
                                            />
                                            <Label>No</Label>
                                        </div>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Label>Date</Label>
                                        <Input
                                            type='date'
                                            className='form-control-escrus'
                                            name='deliveryDate'
                                            id='deliveryDate'
                                            value={this.state.deliveryDate}
                                            onChange={this.onChange}
                                        />
                                    </FormGroup>
                                    <FormGroup row>
                                        <Button
                                            className='btn-escrus block'
                                            onClick={this.onSubmit}
                                        >
                                            SUBMIT REQUEST{' '}
                                        </Button>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Button
                                            className='btn-escrus-inv block'
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

export default Request;
