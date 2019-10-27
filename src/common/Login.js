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
import { Link, withRouter } from 'react-router-dom';
import isEmpty from '../validation/is-empty';
import logo from '../assets/utils/images/logo.png';
import { connect } from 'react-redux';
import { loginUser } from '../actions/authActions';
import Spinner from './Spinner';

import {
    CONFIRMATION_REQUIRED,
    COMPLETION_REQUIRED,
    ADMIN_PREV,
    USER_PREV,
    MOD_PREV,
    STUDENT_PREV
} from '../actions/types';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {}
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSignupClick = this.onSignupClick.bind(this);
        this.onForgetPasswordClick = this.onForgetPasswordClick.bind(this);
    }
    componentWillMount() {
        if (this.props.auth.isAuthenticated) {
            let { prev } = this.props;
            if (prev === ADMIN_PREV || prev === MOD_PREV) {
                this.props.history.push('/dashboard/attendance');
            } else if (prev === COMPLETION_REQUIRED) {
                this.props.history.push('/dashboard/completesignup');
            } else if (prev === CONFIRMATION_REQUIRED) {
                this.props.history.push('/dashboard/confirm');
            } else if (prev === USER_PREV) {
                this.props.history.push('/dashboard/application');
            } else if (prev === STUDENT_PREV) {
                this.props.history.push('/dashboard/application');
            } else {
                this.props.history.push('/dashboard/aboutus');
            }
        }
    }
    onSignupClick(e) {
        e.preventDefault();
        this.props.history.push('/dashboard/signup');
    }
    onForgetPasswordClick(e) {
        e.preventDefault();
        console.log('forget password');
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.prev) {
            let { prev } = nextProps;
            //HANDLE NAVIGATION PREV
        }
    }

    onSubmit(e) {
        e.preventDefault();
        let { email, password } = this.state;
        let user = {};
        user.email = email;
        user.password = password;
        this.props.loginUser(user);
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        //HANDLE loading
        let { loading } = this.props.loading;
        if (loading) return <Spinner />;
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
                        <Row>
                            <Col md={2}></Col>
                            <Col md={8}>
                                <Card className='container'>
                                    <CardBody>
                                        <CardTitle className='text-center'>
                                            <img
                                                src={logo}
                                                width='200'
                                                height='40'
                                            />
                                        </CardTitle>
                                        <Form
                                            onSubmit={this.onSubmit}
                                            className='form-esorus m-auto'
                                        >
                                            <Row>
                                                <Col>
                                                    <FormGroup>
                                                        <Label for='exampleEmail11'>
                                                            Email{required}
                                                        </Label>
                                                        <Input
                                                            className='form-control-escrus'
                                                            type='text'
                                                            name='email'
                                                            id='exampleEmail11'
                                                            value={
                                                                this.state.email
                                                            }
                                                            onChange={
                                                                this.onChange
                                                            }
                                                            invalid={
                                                                !isEmpty(
                                                                    errors.email
                                                                )
                                                            }
                                                        />
                                                        <FormFeedback tooltip>
                                                            {errors.email}
                                                        </FormFeedback>
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <FormGroup>
                                                        <Label for='examplePassword11'>
                                                            Password{required}
                                                        </Label>
                                                        <Input
                                                            className='form-control-escrus'
                                                            type='password'
                                                            name='password'
                                                            id='examplePassword11'
                                                            value={
                                                                this.state
                                                                    .password
                                                            }
                                                            onChange={
                                                                this.onChange
                                                            }
                                                            invalid={
                                                                !isEmpty(
                                                                    errors.password
                                                                )
                                                            }
                                                        />
                                                        <FormFeedback tooltip>
                                                            {errors.password}
                                                        </FormFeedback>
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <Button className='btn-escrus block'>
                                                        LOG IN
                                                    </Button>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <Button
                                                        className='btn-escrus-inv block mt-3'
                                                        onClick={
                                                            this.onSignupClick
                                                        }
                                                    >
                                                        SIGN UP
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={2}></Col>
                        </Row>
                    </div>
                </ReactCSSTransitionGroup>
            </Fragment>
        );
    }
}
const mapStateToProps = state => ({
    auth: state.auth,
    prev: state.prev,
    errors: state.errors,
    loading: state.loading
});
export default withRouter(
    connect(
        mapStateToProps,
        { loginUser }
    )(Login)
);
