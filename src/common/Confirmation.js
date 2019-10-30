import React, { Fragment, Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Button,
    Alert,
    FormText,
    Input,
    FormFeedback
} from 'reactstrap';
import { toast } from 'react-toastify';
import Spinner from './Spinner';

import { connect } from 'react-redux';
import { changeEmail, confirmEmail } from '../actions/authActions';
import isEmpty from '../validation/is-empty';

class Confirmation extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            email2: '',
            modal: false,
            username: '',
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
        this.toggle = this.toggle.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.onConfirm = this.onConfirm.bind(this);
        this.onChangeClick = this.onChangeClick.bind(this);
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    onChangeClick(e) {
        e.preventDefault();
        let emailSpecs = {};
        emailSpecs.email = this.state.email;
        emailSpecs.email2 = this.state.email2;
        this.props.changeEmail(emailSpecs, this);
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }
    onCancel(e) {
        e.preventDefault();
        this.setState({ notified: !this.state.notified });
        this.setState({ modal: !this.state.modal });
    }
    onClick(e) {
        this.toggle();
    }
    showToast = (type, msg) => toast[type](msg);
    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }
    onConfirm(e) {
        e.preventDefault();
        this.props.confirmEmail(this);
    }
    render() {
        //HANDLE loading
        let { loading } = this.props.loading;
        if (loading) {
            return <Spinner />;
        }
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
                    <div className='app-main-enhanced'>
                        <Row>
                            <Col lg={3} />
                            <Col lg='6'>
                                <Card className='main-card mb-3'>
                                    <CardBody>
                                        <CardTitle>Announcement</CardTitle>
                                        <div className='bg-warning text-white text-center'>
                                            <FormText
                                                color='white'
                                                className='text-uppercase'
                                            >
                                                <strong>
                                                    Confirmation Required
                                                </strong>
                                            </FormText>
                                        </div>

                                        <div className='divider' />

                                        <p>
                                            For security reasons it's required
                                            to confirm your email to have{' '}
                                            <strong>full control</strong> on
                                            your account
                                        </p>
                                        <p>Hope to enjoy your being</p>
                                        <Modal
                                            isOpen={this.state.modal}
                                            fade={true}
                                            toggle={this.toggle}
                                            centered
                                        >
                                            <ModalHeader toggle={this.toggle}>
                                                Note
                                            </ModalHeader>
                                            <ModalBody>
                                                <Alert color='focus'>
                                                    <h4 className='alert-heading'>
                                                        <strong className='text-uppercase'>
                                                            be careful
                                                        </strong>
                                                    </h4>
                                                    <p>
                                                        Kindly note that you
                                                        will receive a
                                                        confirmation link to
                                                        that email you will
                                                        specify, so make sure
                                                        that you can access that
                                                        email to be able to
                                                        complete your
                                                        registration .
                                                    </p>
                                                    <hr />
                                                </Alert>
                                                <Alert color='danger'>
                                                    <Input
                                                        type='text'
                                                        name='email'
                                                        className='form-control form-control-sm mb-2'
                                                        placeholder='Your Old Email'
                                                        onChange={this.onChange}
                                                        invalid={
                                                            !isEmpty(
                                                                errors.email
                                                            )
                                                        }
                                                    />
                                                    <FormFeedback>
                                                        {errors.email}
                                                    </FormFeedback>
                                                    <Input
                                                        type='text'
                                                        name='email2'
                                                        className='form-control form-control-sm mb-2'
                                                        placeholder='Your New Email'
                                                        onChange={this.onChange}
                                                        invalid={
                                                            !isEmpty(
                                                                errors.email2
                                                            )
                                                        }
                                                    />
                                                    <FormFeedback>
                                                        {errors.email2}
                                                    </FormFeedback>
                                                </Alert>
                                            </ModalBody>
                                            <ModalFooter>
                                                <Button
                                                    color='link'
                                                    onClick={this.onCancel}
                                                >
                                                    Cancel
                                                </Button>
                                                <Button
                                                    color='primary'
                                                    onClick={this.onChangeClick}
                                                >
                                                    Change
                                                </Button>{' '}
                                            </ModalFooter>
                                        </Modal>
                                        <input
                                            type='button'
                                            name='change'
                                            className='btn-escrus-inv block log-in mb-3'
                                            value='change email'
                                            onClick={this.onClick}
                                        />
                                        <input
                                            type='button'
                                            name='confirm'
                                            className='btn-escrus block log-in'
                                            value='send again'
                                            onClick={this.onConfirm}
                                        />
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg={3} />
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

export default connect(
    mapStateToProps,
    { changeEmail, confirmEmail }
)(Confirmation);
