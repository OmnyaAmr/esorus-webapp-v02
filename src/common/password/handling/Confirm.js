import React, { Fragment, Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
    Button,
    Input,
    FormFeedback
} from 'reactstrap';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import { confirmPassword } from '../../../actions/authActions';
import Spinner from '../../Spinner';
import isEmpty from '../../../validation/is-empty';

class Confirm extends Component {
    constructor() {
        super();
        this.state = {
            code: '',
            password: '',
            password2: '',
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onClick(e) {
        e.preventDefault();
        let confirmSpecs = {};
        confirmSpecs.code = this.state.code.toUpperCase();
        confirmSpecs.password = this.state.password;
        confirmSpecs.password2 = this.state.password2;
        this.props.confirmPassword(confirmSpecs, this);
    }

    showToast = (type, msg) => toast[type](msg);

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
                        <Col lg={2} />
                        <Col lg='8'>
                            <Card className='main-card mb-3'>
                                <CardBody>
                                    <CardTitle>Verification</CardTitle>
                                    <div className='bg-warning text-white text-center'>
                                        Verification Code Required
                                    </div>

                                    <div className='divider' />

                                    <p className='lead'>
                                        You had received verification code to
                                        the email that you had specified, Kindly
                                        please specify that code and the new
                                        password and confirmation password .{' '}
                                    </p>
                                    <p>Hope to enjoy your being</p>

                                    <Input
                                        placeholder='Verification Code'
                                        onChange={this.onChange}
                                        name='code'
                                        value={this.state.code}
                                        invalid={!isEmpty(errors.code)}
                                        className='form-control-sm mb-2'
                                    />
                                    <FormFeedback>{errors.code}</FormFeedback>

                                    <Input
                                        placeholder='New Password'
                                        onChange={this.onChange}
                                        name='password'
                                        type='password'
                                        value={this.state.password}
                                        invalid={!isEmpty(errors.password)}
                                        className='form-control-sm mb-2'
                                    />
                                    <FormFeedback>
                                        {errors.password}
                                    </FormFeedback>
                                    <Input
                                        placeholder='Confirm Password'
                                        onChange={this.onChange}
                                        name='password2'
                                        type='password'
                                        value={this.state.password2}
                                        invalid={!isEmpty(errors.password2)}
                                        className='form-control-sm mb-2'
                                    />
                                    <div className='d-flex justify-content-center'>
                                        <Button
                                            color='primary'
                                            onClick={this.onClick}
                                        >
                                            Change
                                        </Button>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg={2} />
                    </Row>
                </ReactCSSTransitionGroup>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    loading: state.loading,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { confirmPassword }
)(Confirm);
