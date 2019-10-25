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
    onForgetPasswordClick(e) {
        e.preventDefault();
        console.log('forget password');
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.prev) {
            let { prev } = nextProps;
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
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
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
                    <Row>
                        <Col md={2}></Col>
                        <Col md={8}>
                            <Card className='main-card mb-3'>
                                <CardBody>
                                    <CardTitle className='text-center'>
                                        Login
                                    </CardTitle>
                                    <Form onSubmit={this.onSubmit}>
                                        <Row>
                                            {/* <Col md={3}></Col> */}
                                            <Col md={12}>
                                                <FormGroup>
                                                    <Label for='exampleEmail11'>
                                                        Email
                                                    </Label>
                                                    <Input
                                                        type='text'
                                                        name='email'
                                                        id='exampleEmail11'
                                                        placeholder='Your username or email'
                                                        value={this.state.email}
                                                        onChange={this.onChange}
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
                                            {/* <Col md={3}></Col> */}
                                        </Row>
                                        <Row>
                                            {/* <Col md={3}></Col> */}
                                            <Col md={12}>
                                                <FormGroup>
                                                    <Label for='examplePassword11'>
                                                        Password
                                                    </Label>
                                                    <Input
                                                        type='password'
                                                        name='password'
                                                        id='examplePassword11'
                                                        placeholder='Your password'
                                                        value={
                                                            this.state.password
                                                        }
                                                        onChange={this.onChange}
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
                                            {/* <Col md={3}></Col> */}
                                        </Row>
                                        <Row>
                                            <Col md={3}></Col>
                                            <Col md={6}>
                                                <Button
                                                    color='primary'
                                                    className='mt-2'
                                                    block
                                                >
                                                    Sign in
                                                </Button>
                                            </Col>
                                            <Col md={3}></Col>
                                        </Row>
                                        <div className='d-flex justify-content-center'>
                                            <Link to='/forget'>
                                                forget password ?
                                            </Link>
                                        </div>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md={2}></Col>
                    </Row>
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
