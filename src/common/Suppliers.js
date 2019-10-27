import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Suppliers extends Component {
    constructor() {
        super();
        this.state = {
            email: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }
    onClick(e) {
        e.preventDefault();
        let { email } = this.state;
        this.props.history.push({
            pathname: '/dashboard/signup',
            state: { email: email }
        });
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
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
                        <h2>esorus for suppliers and manufacturers</h2>
                        <p className='supplier-text'>
                            We take your brand around the <br /> World and
                            expose you to a wide <br />
                            network of professional buyers.
                        </p>
                        <Row className='mb-4'>
                            <Col>
                                {' '}
                                <div className='d-flex justify-content-center mt-4'>
                                    <input
                                        className='form-control-escrus form-control-lg-escrus'
                                        onChange={this.onChange}
                                        value={this.state.email}
                                        name='email'
                                    />
                                    <input
                                        type='button'
                                        className='btn-escrus ml-1'
                                        value='Join Now'
                                        onClick={this.onClick}
                                    />
                                </div>
                            </Col>
                            <Col />
                        </Row>

                        <Row className='supplier-text pb-lg-5'>
                            <Col className='' lg={6}>
                                <p>
                                    Gain access to our <br /> worldwide network{' '}
                                    <br />
                                    of professional buyers
                                </p>
                            </Col>
                            <Col className='' lg={6}>
                                You deciede <br /> who buyes your <br /> product
                            </Col>
                            <Col className='' lg={6}>
                                manage your brand <br /> and product easily
                            </Col>
                            <Col className='' lg={6}>
                                You can manage <br /> your orders
                            </Col>
                        </Row>
                    </div>
                </ReactCSSTransitionGroup>
            </Fragment>
        );
    }
}
export default Suppliers;
