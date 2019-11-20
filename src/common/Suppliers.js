import React, { Component, Fragment } from 'react';
import { Row, Col } from 'reactstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';
import PerfectScrollbar from 'react-perfect-scrollbar';
import world from '../assets/components/icons/world.svg';
import buyer from '../assets/components/icons/buyer.svg';
import project from '../assets/components/icons/project.svg';
import order from '../assets/components/icons/order.svg';
import whiteLogo from '../assets/utils/images/white-logo.png';
import blackLogo from '../assets/utils/images/logo.png';
import whiteUser from '../assets/components/icons/white-user-icon.svg';
import blackUser from '../assets/utils/images/avatars/user.svg';
import encoreLogo from '../assets/utils/images/encore_logo.png';
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
    componentWillMount() {
        let x = window.document.getElementById('header');
        console.log(x);
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    componentDidMount() {
        window.document.getElementById('professional-buyers').style.color =
            'white';
        window.document.getElementById('suppliers').style.color = 'white';
        window.document.getElementById('sign-in').style.color = 'white';
        window.document.getElementById('header-logo').src = whiteLogo;
        let { isAuthenticated } = this.props.auth;
        if (!isAuthenticated) {
            window.document.getElementById('user-icon').src = whiteUser;
        }
    }
    componentWillUnmount() {
        window.document.getElementById('professional-buyers').style.color =
            'black';
        window.document.getElementById('suppliers').style.color = 'black';
        window.document.getElementById('sign-in').style.color = 'black';
        window.document.getElementById('header-logo').src = blackLogo;
        let { isAuthenticated } = this.props.auth;
        if (!isAuthenticated) {
            window.document.getElementById('user-icon').src = blackUser;
        }
    }
    render() {
        let { enableSupplierBackground, suppliersBackground } = this.props;
        let { isAuthenticated } = this.props.auth;
        let content;
        let encoreWidth;
        let encoreHeight;
        if (enableSupplierBackground) {
            encoreWidth = '450';
            encoreHeight = '150';
        } else {
            encoreWidth = '250';
            encoreHeight = '90';
        }
        if (!isAuthenticated) {
            if (enableSupplierBackground) {
                content = (
                    <div className='d-flex justify-content-left mt-4'>
                        <input
                            className='form-control-escrus form-control-lg-escrus ml-1'
                            onChange={this.onChange}
                            value={this.state.email}
                            placeholder='Enter your email here'
                            name='email'
                        />
                        <input
                            type='button'
                            className='btn-escrus ml-1'
                            value='Join Now'
                            onClick={this.onClick}
                        />
                    </div>
                );
            } else {
                content = (
                    <div>
                        <div className='d-flex justify-content-center mt-4'>
                            <input
                                className='form-control-escrus form-control-lg-escrus '
                                onChange={this.onChange}
                                value={this.state.email}
                                placeholder='Enter your email here'
                                name='email'
                            />
                        </div>
                        <div className='d-flex justify-content-center mt-2'>
                            <input
                                type='button'
                                className='btn-escrus '
                                value='Join Now'
                                onClick={this.onClick}
                            />
                        </div>
                    </div>
                );
            }
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
                    <div
                        className='app-main-enhanced buyers3-mobile'
                        style={{
                            backgroundImage: enableSupplierBackground
                                ? 'url(' + suppliersBackground + ')'
                                : null,
                            height: '650px'
                        }}
                    >
                        <Row className='supplier-slogan-position '>
                            <Col>
                                <h2 className='supplier-text5'>
                                    For Suppliers and Manufacturers
                                </h2>
                                <p className='supplier-text4 '>
                                    We take your brand around the world and
                                    expose
                                    {enableSupplierBackground && <br />}
                                    you to a wide network of professional
                                    buyers.
                                </p>
                                {content}
                            </Col>
                        </Row>
                    </div>

                    <div className='app-main-enhanced'>
                        <div className='text-center'>
                            <h2
                                style={{ color: 'black' }}
                                className='mb-4 align-self-center'
                            >
                                How can esorus help your brand?
                            </h2>
                        </div>
                        <Row className='pt-4 pb-5'>
                            <Col className='buyers-mobile'>
                                <div className='d-flex justify-content-center mt-4'>
                                    <img
                                        className='ml-1'
                                        src={world}
                                        width='50'
                                        height='50'
                                        className='mb-1'
                                    />
                                </div>

                                <div className='d-flex justify-content-center mt-4'>
                                    <p className=' supplier-text3 buttom-text text-center'>
                                        Gain access to our worldwide network of
                                        professional buyers.
                                    </p>
                                </div>
                            </Col>
                            <Col className='buyers-mobile'>
                                <div className='d-flex justify-content-center mt-4'>
                                    <img
                                        className='ml-1'
                                        src={buyer}
                                        width='50'
                                        height='50'
                                        className='mb-1'
                                    />
                                </div>
                                <div className='d-flex justify-content-center mt-4'>
                                    <p className=' supplier-text3 buttom-text text-center '>
                                        You deciede who buyes your product.
                                    </p>
                                </div>
                            </Col>
                            <Col className='buyers-mobile'>
                                <div className='d-flex justify-content-center mt-4'>
                                    <img
                                        className='ml-1'
                                        src={project}
                                        width='50'
                                        height='50'
                                        className='mb-2'
                                    />
                                </div>

                                <div className='d-flex justify-content-center mt-4'>
                                    <p className=' supplier-text3 buttom-text text-center '>
                                        Manage your brand and product easily.
                                    </p>
                                </div>
                            </Col>
                            <Col className='buyers-mobile'>
                                <div className='d-flex justify-content-center mt-4'>
                                    <img
                                        className='ml-1'
                                        src={order}
                                        width='50'
                                        height='50'
                                        className='mb-2'
                                    />
                                </div>
                                <div className='d-flex justify-content-center mt-4'>
                                    <p className=' supplier-text3 buttom-text text-center '>
                                        You can manage <br /> your orders.
                                    </p>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h2 className='meet-our-text text-center'>
                                    Meet our network of Professional Buyers
                                </h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h5 className='meet-our-text2 text-center'>
                                    We work with renowned Proffesional Buyers,
                                    below is one of our Designers
                                </h5>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <a href='http://www.encore-cf.com/'>
                                    <div className='d-flex justify-content-center mt-4'>
                                        <img
                                            className='ml-1'
                                            src={encoreLogo}
                                            width={encoreWidth}
                                            height={encoreHeight}
                                            className='mb-2'
                                        />
                                    </div>
                                </a>
                            </Col>
                        </Row>
                    </div>
                </ReactCSSTransitionGroup>
            </Fragment>
        );
    }
}
const mapStateToProps = state => ({
    enableSupplierBackground: state.ThemeOptions.enableSupplierBackground,
    suppliersBackground: state.ThemeOptions.suppliersBackground,
    auth: state.auth
});

export default connect(mapStateToProps)(Suppliers);
