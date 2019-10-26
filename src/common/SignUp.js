import React, { Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
    Col,
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

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            password2: '',
            name: '',
            gender: '',
            username: '',
            image: null,
            errors: {}
        };
        this.onImageChange = this.onImageChange.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onImageChange(e) {
        console.log(e.target.files[0]);
        this.setState({ [e.target.name]: e.target.files[0] });
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
                    <Card className='main-card mb-3'>
                        <CardBody>
                            <CardTitle>Sign Up</CardTitle>
                            <Form onSubmit={this.onSubmit}>
                                <FormGroup row>
                                    <Label for='name' sm={2}>
                                        Name
                                    </Label>
                                    <Col sm={4}>
                                        <Input
                                            type='text'
                                            name='name'
                                            id='name'
                                            placeholder='Your Name'
                                            value={this.state.name}
                                            onChange={this.onChange}
                                            invalid={!isEmpty(errors.name)}
                                        />
                                        <FormFeedback>
                                            {errors.name}
                                        </FormFeedback>
                                    </Col>
                                    <Label for='username' sm={2}>
                                        username
                                    </Label>
                                    <Col sm={4}>
                                        <Input
                                            type='text'
                                            name='username'
                                            id='username'
                                            placeholder='Your username'
                                            value={this.state.username}
                                            onChange={this.onChange}
                                            invalid={!isEmpty(errors.username)}
                                        />
                                        <FormFeedback>
                                            {errors.username}
                                        </FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for='email' sm={2}>
                                        Email
                                    </Label>
                                    <Col sm={10}>
                                        <Input
                                            type='email'
                                            name='email'
                                            id='email'
                                            placeholder='Your Email@elmoarkh.com'
                                            value={this.state.email}
                                            onChange={this.onChange}
                                            invalid={!isEmpty(errors.email)}
                                        />
                                        <FormFeedback>
                                            {errors.email}
                                        </FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for='password' sm={2}>
                                        Password
                                    </Label>
                                    <Col sm={10}>
                                        <Input
                                            type='password'
                                            name='password'
                                            id='password'
                                            placeholder='Your Password'
                                            value={this.state.password}
                                            onChange={this.onChange}
                                            invalid={!isEmpty(errors.password)}
                                        />
                                        <FormFeedback>
                                            {errors.password}
                                        </FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for='password2' sm={2}>
                                        Confirm Password
                                    </Label>
                                    <Col sm={10}>
                                        <Input
                                            type='password'
                                            name='password2'
                                            id='password2'
                                            placeholder='Confirm Password'
                                            value={this.state.password2}
                                            onChange={this.onChange}
                                            invalid={!isEmpty(errors.password2)}
                                        />
                                        <FormFeedback>
                                            {errors.password2}
                                        </FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for='gender' sm={2}>
                                        Gender
                                    </Label>
                                    <Col sm={4}>
                                        <select
                                            name='gender'
                                            className={classnames(
                                                'custom-select custom-select-md',
                                                {
                                                    'is-invalid': errors.gender
                                                }
                                            )}
                                            onChange={this.onChange}
                                            value={this.state.gender}
                                        >
                                            <option value=''>Select ...</option>
                                            <option value='male'>Male</option>
                                            <option value='female'>
                                                Female
                                            </option>
                                        </select>
                                        {errors.gender && (
                                            <FormFeedback>
                                                {errors.gender}
                                            </FormFeedback>
                                        )}
                                    </Col>
                                    <Col sm={6}>
                                        <FormGroup row>
                                            <Label for='exampleFile' sm={4}>
                                                Picture
                                            </Label>
                                            <Col sm={8}>
                                                <Input
                                                    type='file'
                                                    name='image'
                                                    id='exampleFile'
                                                    accept='image/*'
                                                    onChange={event => {
                                                        this.onImageChange(
                                                            event
                                                        );
                                                    }}
                                                />
                                            </Col>
                                        </FormGroup>
                                    </Col>
                                </FormGroup>

                                <FormGroup check row>
                                    <Col sm={{ size: 10, offset: 2 }}>
                                        <Button color='primary'>Submit</Button>
                                    </Col>
                                </FormGroup>
                            </Form>
                        </CardBody>
                    </Card>
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
    { SignUpUser }
)(SignUp);
