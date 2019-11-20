import React, { Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
    Col,
    Row,
    Card,
    CardBody,
    CardTitle,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormFeedback
} from 'reactstrap';
import isEmpty from '../validation/is-empty';
import classnames from 'classnames';
import Spinner from './Spinner';
import { connect } from 'react-redux';
import { SignUpUser } from '../actions/authActions';
import { ROLE_PROFESSIONAL_BUYER, ROLE_SUPPLIER } from '../actions/types';


class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            password2: '',
            name: '',
            role: '',
            errors: {},
            companyName: '',
            companyDesc: '',
            url: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onCheck = this.onCheck.bind(this);
        this.onCancelClick = this.onCancelClick.bind(this);
    }

    onCancelClick() {
        this.props.history.push('/dashboard/home');
    }

    onCheck(e) {
        this.setState({ agreed: !this.state.agreed });
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit(e) {
        e.preventDefault();
        let newUser = this.state;
        this.props.SignUpUser(newUser, this.props.history);

    }
    componentWillMount() {
        if (this.props.location.state) {
            let { email } = this.props.location.state;
            this.setState({ email });
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }
    render() {
        //HANDLE loading
        let { loading } = this.props.loading;
        if (loading) return <Spinner />;
        //HANDLE errors;
        let { errors } = this.state;

        let { role } = this.state;
        let content;

        let required = <small className='required'>*</small>;

        if (role === ROLE_PROFESSIONAL_BUYER) {
            content = (
                <FormGroup row>
                    <Label for='name'>Company Name {required}</Label>
                    <Input
                        className='form-control-escrus'
                        type='text'
                        name='companyName'
                        id='companyName'
                        value={this.state.companyName}
                        onChange={this.onChange}
                        invalid={!isEmpty(errors.companyName)}
                    />
                    <FormFeedback>{errors.companyName}</FormFeedback>
                </FormGroup>
            );
        } else if (role === ROLE_SUPPLIER) {
            content = (
                <div>
                    <FormGroup row>
                        <Label for='name'>Company Name{required}</Label>
                        <Input
                            className='form-control-escrus'
                            type='text'
                            name='companyName'
                            id='companyName'
                            value={this.state.companyName}
                            onChange={this.onChange}
                            invalid={!isEmpty(errors.companyName)}
                        />
                        <FormFeedback>{errors.companyName}</FormFeedback>
                    </FormGroup>
                    <FormGroup row>
                        <Label for='name'>Company Description{required}</Label>
                        <Input
                            className='form-control-escrus'
                            type='text'
                            name='companyDesc'
                            id='companyDesc'
                            value={this.state.companyDesc}
                            onChange={this.onChange}
                            invalid={!isEmpty(errors.companyDesc)}
                        />
                        <FormFeedback>{errors.companyDesc}</FormFeedback>
                    </FormGroup>
                    <FormGroup row>
                        <Label for='name'>
                            Website / Facebook URL{required}
                        </Label>
                        <Input
                            className='form-control-escrus'
                            type='text'
                            name='url'
                            id='url'
                            value={this.state.url}
                            onChange={this.onChange}
                            invalid={!isEmpty(errors.url)}
                        />
                        <FormFeedback>{errors.url}</FormFeedback>
                    </FormGroup>
                </div>
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
                        <Row>
                            <Col>
                                <Card className='container'>
                                    <CardBody>
                                        <CardTitle className='text-center slogan4-text'>
                                            Sign up to esorus: become a
                                            community member
                                        </CardTitle>
                                        <Form
                                            onSubmit={this.onSubmit}
                                            className='form-esorus m-auto'
                                        >
                                            <FormGroup row>
                                                <Label for='firstName'>
                                                    Name{required}
                                                </Label>
                                                <Input
                                                    className='form-control-escrus'
                                                    type='text'
                                                    name='name'
                                                    id='name'
                                                    value={this.state.name}
                                                    onChange={this.onChange}
                                                    invalid={
                                                        !isEmpty(errors.name)
                                                    }
                                                />
                                                <FormFeedback>
                                                    {errors.name}
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
                                                    invalid={
                                                        !isEmpty(errors.email)
                                                    }
                                                />
                                                <FormFeedback>
                                                    {errors.email}
                                                </FormFeedback>
                                            </FormGroup>
                                            <FormGroup row>
                                                <Label for='password'>
                                                    Password{required}
                                                </Label>
                                                <Input
                                                    className='form-control-escrus'
                                                    type='password'
                                                    name='password'
                                                    id='password'
                                                    value={this.state.password}
                                                    onChange={this.onChange}
                                                    invalid={
                                                        !isEmpty(
                                                            errors.password
                                                        )
                                                    }
                                                />
                                                <FormFeedback>
                                                    {errors.password}
                                                </FormFeedback>
                                            </FormGroup>
                                            <FormGroup row>
                                                <Label for='password2'>
                                                    Confirm Password{required}
                                                </Label>
                                                <Input
                                                    className='form-control-escrus'
                                                    type='password'
                                                    name='password2'
                                                    id='password2'
                                                    value={this.state.password2}
                                                    onChange={this.onChange}
                                                    invalid={
                                                        !isEmpty(
                                                            errors.password2
                                                        )
                                                    }
                                                />
                                                <FormFeedback>
                                                    {errors.password2}
                                                </FormFeedback>
                                            </FormGroup>
                                            <FormGroup row>
                                                <Label for='role'>
                                                    Professional Role{required}
                                                </Label>
                                                <select
                                                    name='role'
                                                    className={classnames(
                                                        'custom-select custom-select-md form-control-escrus',
                                                        {
                                                            'is-invalid':
                                                                errors.role
                                                        }
                                                    )}
                                                    onChange={this.onChange}
                                                    value={this.state.role}
                                                >
                                                    <option value=''>
                                                        Select your role ...
                                                    </option>
                                                    <option value='ROLE_PROFESSIONAL_BUYER'>
                                                        Professional Buyer
                                                    </option>
                                                    <option value='ROLE_SUPPLIER'>
                                                        Supplier
                                                    </option>
                                                </select>
                                                {errors.role && (
                                                    <FormFeedback>
                                                        {errors.role}
                                                    </FormFeedback>
                                                )}
                                            </FormGroup>
                                            <div>{content}</div>

                                            <FormGroup row>
                                                <Button className='btn-escrus log-in block mt-4 mb-2'>
                                                    Sign up
                                                </Button>
                                                <Button
                                                    className='btn-escrus-inv block log-in'
                                                    onClick={this.onCancelClick}
                                                >
                                                    Cancel
                                                </Button>
                                            </FormGroup>
                                        </Form>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </ReactCSSTransitionGroup>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    loading: state.loading,
    errors: state.errors
});

export default connect(mapStateToProps, { SignUpUser })(SignUp);
