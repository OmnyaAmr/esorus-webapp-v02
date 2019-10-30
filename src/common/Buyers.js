import React, { Component, Fragment } from 'react';
import { Row, Col } from 'reactstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';
import PerfectScrollbar from 'react-perfect-scrollbar';
import idea from '../assets/components/icons/idea.svg';
import analysis from '../assets/components/icons/analysis.svg';
import data from '../assets/components/icons/data.svg';
import startUp from '../assets/components/icons/startup.svg'
import buyersPic from '../assets/utils/images/originals/buyersPic.jpg'

class Buyers extends Component {
    constructor() {
        super();
        this.state = { email: '' };
        this.onClick = this.onClick.bind(this);
    }
    onClick(e) {
        e.preventDefault();
        this.props.history.push('/dashboard/request');
    }
    render() {
        let { enableHomeBackground, buyersBackground } = this.props;
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
                        <div className='app-main-enhanced' 
                            style={{
                                backgroundImage: enableHomeBackground
                                    ? 'url(' + buyersBackground + ')'
                                    : null,
                                height: '700px'
                            }}
                        >
                            <Row className='slogan-buyer-position ml-4'>
                                <Col>                            <h2 className="slogan-text">
                                    FF&E Personal Assistant for Interior Designers and{' '}
                                    <br />
                                    Professional Buyers{' '}
                                </h2>
                                    <p className='supplier-text3'>
                                        A single place to find furniture materials,
                            <br /> get qoutes and purchase from over a 1000{' '}
                                        <br /> different qualified suppliers.{' '}
                                    </p>
                                </Col>

                            </Row>

                        </div>
                    </PerfectScrollbar>
                    <div className='app-main-enhanced'>
                        <Row >
                            <Col>
                                <div className="heading-section mb-5 pt-5 pl-md-5">
                                    <div className="pr-md-5 mr-md-5 text-md-left">
                                        <h2 style={{ color: "black" }} className="mb-4">How it Works</h2>
                                    </div>
                                </div>
                                <div className="pr-md-3 pr-lg-5 pl-md-5 mr-md-5 mb-5">
                                    <div className="services-wrap d-flex">

                                        <div className="media-body pl-md-0 pl-4 pr-4 order-md-first text-md-left">
                                            <h3 className="heading">Fill in the Form</h3>
                                            <p>Send us your request for your project
                                                needs by signing up and using the
                                                source now button.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="services-wrap d-flex">

                                        <div className="media-body pl-md-0 pl-4 pr-4 order-md-first text-md-left">
                                            <h3 className="heading">Receive Quotations</h3>
                                            <p>Our suppliers provide multiple
                                                quotations for you to choose from.</p>
                                        </div>
                                    </div>
                                    <div className="services-wrap d-flex">

                                        <div className="media-body pl-md-0 pl-4 pr-4 order-md-first text-md-left">
                                            <h3 className="heading">Select</h3>
                                            <p>Choose from the quotations you
                                                received and we connect you
                                                directly with the Supplier.</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <img
                                    src={buyersPic}
                                    width='500'
                                    height='500'
                                    className='mb-2'
                                />
                            </Col>
                        </Row>

                        <Row>
                            <Col style={{ left: "50px" }}>
                                <p>
                                    We’re just a click away, send us
                                    your request and our FF&E Team
                                    will assist you.
                                </p>
                                <input
                                    type='button'
                                    className='btn-escrus mt-2'
                                    value='Source Now'

                                    onClick={this.onClick}
                                />
                            </Col>
                        </Row>
                        <Row className='pt-4 pb-5'>
                            <Col>
                                <div className='d-flex justify-content-center mt-4'>
                                    <img
                                        className="ml-1"
                                        src={idea}
                                        width='50'
                                        height='50'
                                        className='mb-2'
                                    />
                                </div>
                                <div className='d-flex justify-content-center mt-4'>
                                    <p className="ml-1 supplier-text">Smart Sourcing</p>
                                </div>
                                <div className='d-flex justify-content-center mt-4'>
                                    <p className="ml-1 supplier-text2">
                                        All you need for your
                                        project
                                    </p>
                                </div>
                                <div className='d-flex justify-content-center mt-4'>
                                    <p className="text-center ml-1 supplier-text2">is just a
                                        click away.</p>
                                </div>

                            </Col>
                            <Col>
                                <div className='d-flex justify-content-center mt-4'>
                                    <img
                                        className="ml-1"
                                        src={analysis}
                                        width='50'
                                        height='50'
                                        className='mb-2'
                                    />
                                </div>
                                <div className='d-flex justify-content-center mt-4'>
                                    <p className="ml-1 supplier-text">Recommendations</p>
                                </div>
                                <div className='d-flex justify-content-center mt-4'>
                                    <p className="ml-1 supplier-text2">
                                        Recommendation for effective materials from a  wide range of
                                    </p>
                                </div>
                                <div className='d-flex justify-content-center mt-4'>
                                    <p className="text-center ml-1 supplier-text2">
                                        suppliers
                                    </p>
                                </div>

                            </Col>
                            <Col >

                                <div className='d-flex justify-content-center mt-4'>
                                    <img
                                        className="ml-1"
                                        src={data}
                                        width='50'
                                        height='50'
                                        className='mb-2'
                                    />
                                </div>
                                <div className='d-flex justify-content-center mt-4'>
                                    <p className="ml-1 supplier-text">Follow-up</p>
                                </div>
                                <div className='d-flex justify-content-center mt-4'>
                                    <p className="ml-1  text-center supplier-text2">
                                        Dedicated support and follow-up ensuring you receive your
                                         materials within the agreed time frame with the  supplier.
                                    </p>
                                </div>


                            </Col>
                            <Col >
                                <div className='d-flex justify-content-center mt-4'>
                                    <img
                                        className="ml-1"
                                        src={startUp}
                                        width='50'
                                        height='50'
                                        className='mb-2'
                                    />
                                </div>
                                <div className='d-flex justify-content-center mt-4'>
                                    <p className="ml-1 supplier-text">Best Pricing</p>
                                </div>
                                <div className='d-flex justify-content-center mt-4'>
                                    <p className="ml-1  text-center supplier-text2">
                                        We make sure you get the best possible price
                                        in the market, with up to 45% additional discount.
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
    buyersBackground: state.ThemeOptions.buyersBackground
});

export default connect(mapStateToProps)(Buyers);
