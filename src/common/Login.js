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
import { withRouter } from 'react-router-dom';
import isEmpty from '../validation/is-empty';
import { connect } from 'react-redux';
import { loginUser } from '../actions/authActions';
import Spinner from './Spinner';

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
    }
    componentWillMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/dashboard/home');
        }
    }
    onSignupClick(e) {
        e.preventDefault();
        this.props.history.push('/dashboard/signup');
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/dashboard/home');
        }
        let { errors } = this.state;
        if (errors.title && errors.title === 'Unauthorized') {
            this.props.history.push('/dashboard/confirm');
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
                                        <CardTitle className='text-center slogan4-text'>
                                            Welcome back to esorus
                                        </CardTitle>
                                        <Form
                                            onSubmit={this.onSubmit}
                                            className='m-auto'
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
                                                        <FormFeedback>
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
                                                        <FormFeedback>
                                                            {errors.password}
                                                        </FormFeedback>
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <Button className='btn-escrus block log-in mt-4 mb-2'>
                                                        Log In
                                                    </Button>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <Button
                                                        className='btn-escrus-inv block log-in'
                                                        onClick={
                                                            this.onSignupClick
                                                        }
                                                    >
                                                        Sign up
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
export default withRouter(connect(mapStateToProps, { loginUser })(Login));
