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
                                        <div className='text-white text-center bg-warning'>
                                            <FormText color='white'>
                                                <strong>
                                                    Activate Account
                                                </strong>
                                            </FormText>
                                        </div>

                                        <div className='divider' />

                                        <p>
                                            Message: For security reasons,
                                            please check your email to activate
                                            your account.
                                        </p>
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

export default connect(mapStateToProps, { changeEmail, confirmEmail })(
    Confirmation
);
