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
    componentDidMount(){
    window.document.getElementById('professional-buyers').style.color='white';
    window.document.getElementById('suppliers').style.color='white';
    window.document.getElementById('sign-in').style.color='white';
    window.document.getElementById('header-logo').src=whiteLogo;
    window.document.getElementById('user-icon').src=whiteUser;

    }
    componentWillUnmount(){
        window.document.getElementById('professional-buyers').style.color='black';
        window.document.getElementById('suppliers').style.color='black';
        window.document.getElementById('sign-in').style.color='black';
        window.document.getElementById('header-logo').src=blackLogo;
        window.document.getElementById('user-icon').src=blackUser;

    }
    render() {
        let { enableHomeBackground, suppliersBackground } = this.props;
        let { isAuthenticated } = this.props.auth;
        let content;
        if (!isAuthenticated) {
            if (enableHomeBackground) {
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
            }
            else {
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
                        <div className='d-flex justify-content-center mt-4'>
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
                            backgroundImage: enableHomeBackground
                                ? 'url(' + suppliersBackground + ')'
                                : null,
                            height: '650px',
                        }}
                    >
                        <Row className='supplier-slogan-position '>
                            <Col>
                                <h2 className='supplier-text5'>
                                    For Suppliers and Manufacturers
                        </h2>
                                <p
                                    className='supplier-text4 '

                                >
                                    We take your brand around the world and expose
                            {enableHomeBackground && <br />}
                                    you to a wide network of professional buyers.
                        </p>
                                {content}
                            </Col>
                        </Row>
                    </div>

                    <div className='app-main-enhanced'>
                        <div className='pr-md-5 mr-md-5 text-md-left'>
                            <h2 style={{ color: 'black' }} className='mb-4'>
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
