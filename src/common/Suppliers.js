import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';
import PerfectScrollbar from 'react-perfect-scrollbar';

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
        let { enableHomeBackground, suppliersBackground } = this.props;
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
                    <PerfectScrollbar>

                        <div className='app-main-enhanced test'
                            style={{
                                backgroundImage: enableHomeBackground
                                    ? 'url(' + suppliersBackground + ')'
                                    : null,
                                height: '650px',
                                top: "28%"

                            }}>
                            <h2 className="slogan-text">esorus for Suppliers and Manufacturers</h2>
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
                                            placeholder="Enter your Email here"
                                            style={{ fontSize: "15px" }}
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
                        </div>
                    </PerfectScrollbar>
                    <div className="app-main-enhanced">
                        <Row className='supplier-text buttom-text pb-lg-5'>
                            <Col lg={6}>
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
const mapStateToProps = state => ({
    enableHomeBackground: state.ThemeOptions.enableHomeBackground,
    suppliersBackground: state.ThemeOptions.suppliersBackground
});

export default connect(mapStateToProps)(Suppliers);
