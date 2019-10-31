import React, { Component, Fragment } from 'react';
import { Row, Col } from 'reactstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';
import PerfectScrollbar from 'react-perfect-scrollbar';
import world from '../assets/components/icons/world.svg';
import buyer from '../assets/components/icons/buyer.svg';
import project from '../assets/components/icons/project.svg';
import order from '../assets/components/icons/order.svg';

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
        let { isAuthenticated } = this.props.auth;
        let content;
        if (!isAuthenticated) {
            content = (
                <div className='d-flex justify-content-left mt-4'>
                    <input
                        className='form-control-escrus form-control-lg-escrus ml-1'
                        onChange={this.onChange}
                        value={this.state.email}
                        placeholder='Enter your email here'
                        name='email'
                        style={{
                            fontSize: '15px',
                            width: '280px'
                        }}
                    />
                    <input
                        type='button'
                        className='btn-escrus ml-1'
                        value='Join Now'
                        onClick={this.onClick}
                    />
                </div>
            );
        }
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
                        <div
                            className='app-main-enhanced test'
                            style={{
                                backgroundImage: enableHomeBackground
                                    ? 'url(' + suppliersBackground + ')'
                                    : null,
                                height: '650px',
                                top: '28%'
                            }}
                        >
                            <h2 className='slogan-text'>
                                For Suppliers and Manufacturers
                            </h2>
                            <p className='supplier-text3'>
                                We take your brand around the world and expose
                                <br />
                                you to a wide network of professional buyers.
                            </p>
                            {content}
                        </div>
                    </PerfectScrollbar>
                    <div className='app-main-enhanced'>
                        <div className='pr-md-5 mr-md-5 text-md-left'>
                            <h2 style={{ color: 'black' }} className='mb-4'>
                                How can esorus help your brand?
                            </h2>
                        </div>
                        {/*<Row className='supplier-text3 buttom-text pb-lg-5'>
                            <Col lg={6}>
                                <p>
                                    Gain access to our <br /> worldwide network{' '}
                                    <br />
                                    of professional buyers.
                                </p>
                            </Col>
                            <Col className='' lg={6}>
                                You deciede <br /> who buyes your <br />{' '}
                                product.
                            </Col>
                            <Col className='' lg={6}>
                                Manage your brand <br /> and product easily.
                            </Col>
                            <Col className='' lg={6}>
                                You can manage <br /> your orders.
                            </Col>
                        </Row>*/}
                        <Row className='pt-4 pb-5'>
                            <Col>
                                <div className='d-flex justify-content-center mt-4'>
                                    <img
                                        className='ml-1'
                                        src={world}
                                        width='50'
                                        height='50'
                                        className='mb-1'
                                        style={{ marginRight: '50px' }}
                                    />
                                </div>

                                <div className='d-flex justify-content-center mt-4'>
                                    <p
                                        className=' supplier-text3 buttom-text'
                                        text-center
                                    >
                                        Gain access to our worldwide network of
                                        professional buyers.
                                    </p>
                                </div>
                            </Col>
                            <Col>
                                <div className='d-flex justify-content-center mt-4'>
                                    <img
                                        className='ml-1'
                                        src={buyer}
                                        width='50'
                                        height='50'
                                        className='mb-1'
                                        style={{ marginRight: '50px' }}
                                    />
                                </div>
                                <div className='d-flex justify-content-center mt-4'>
                                    <p className=' supplier-text3 buttom-text text-center '>
                                        You deciede who buyes your product.
                                    </p>
                                </div>
                            </Col>
                            <Col>
                                <div className='d-flex justify-content-center mt-4'>
                                    <img
                                        className='ml-1'
                                        src={project}
                                        width='50'
                                        height='50'
                                        className='mb-2'
                                        style={{ marginRight: '50px' }}
                                    />
                                </div>

                                <div className='d-flex justify-content-center mt-4'>
                                    <p className=' supplier-text3 buttom-text text-center '>
                                        Manage your brand and product easily.
                                    </p>
                                </div>
                            </Col>
                            <Col>
                                <div className='d-flex justify-content-center mt-4'>
                                    <img
                                        className='ml-1'
                                        src={order}
                                        width='50'
                                        height='50'
                                        className='mb-2'
                                        style={{ marginRight: '50px' }}
                                    />
                                </div>
                                <div className='d-flex justify-content-center mt-4'>
                                    <p className=' supplier-text3 buttom-text text-center '>
                                        You can manage <br /> your orders.
                                    </p>
                                </div>
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
    suppliersBackground: state.ThemeOptions.suppliersBackground,
    auth: state.auth
});

export default connect(mapStateToProps)(Suppliers);
