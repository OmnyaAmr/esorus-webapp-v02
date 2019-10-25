import React, { Fragment, Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
    Button,
    InputGroup,
    InputGroupAddon,
    Input,
    FormFeedback
} from 'reactstrap';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import { resetPassword } from '../../../actions/authActions';
import Spinner from '../../Spinner';
import isEmpty from '../../../validation/is-empty';

class Reset extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
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
        this.props.resetPassword(this.state, this);
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
                                    <CardTitle>Forget Password</CardTitle>
                                    <div className='bg-warning text-white text-center'>
                                        Confirmation Required
                                    </div>

                                    <div className='divider' />

                                    <p className='lead'>
                                        You are here because you forgot your
                                        password, So please notice that{' '}
                                        <strong>
                                            you will receive a confirmation mail
                                            to reset your password .
                                        </strong>{' '}
                                    </p>
                                    <p>Hope to enjoy your being</p>

                                    <InputGroup>
                                        <Input
                                            placeholder='your email@example.com'
                                            onChange={this.onChange}
                                            name='email'
                                            value={this.state.email}
                                            invalid={!isEmpty(errors.email)}
                                        />
                                        <FormFeedback>
                                            {errors.email}
                                        </FormFeedback>
                                        <InputGroupAddon addonType='append'>
                                            <Button
                                                color='info'
                                                onClick={this.onClick}
                                            >
                                                Reset
                                            </Button>
                                        </InputGroupAddon>
                                    </InputGroup>
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
    { resetPassword }
)(Reset);
