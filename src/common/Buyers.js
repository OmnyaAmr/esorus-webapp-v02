import React, { Component, Fragment } from 'react';
import { Row, Col, Container } from 'reactstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';
import idea from '../assets/components/icons/idea.svg';
import analysis from '../assets/components/icons/analysis.svg';
import data from '../assets/components/icons/data.svg';
import startUp from '../assets/components/icons/startup.svg';
import buyersPic from '../assets/utils/images/originals/buyersPic.jpg';
import { ROLE_SUPPLIER } from '../actions/types';
import deizgLogo from '../assets/utils/images/Dezignablez_logo.jpg';
import alfaLogo from '../assets/utils/images/Alfa_Furniture_Logo.jpg';
import lumiLogo from '../assets/utils/images/lumi_logo.jpg';
import mizajLogo from '../assets/utils/images/Mizaj_Logo.jpg';
import tagoLogo from '../assets/utils/images/tago-logo.jpg';
import jassLogo from '../assets/utils/images/Jass.jpg';
import atlasLogo from '../assets/utils/images/Atlas_Concorde.jpg';
import emporLogo from '../assets/utils/images/empor-logo.jpg';
import carnegieLogo from '../assets/utils/images/carnegie-logo.jpg';
import tarekLogo from '../assets/utils/images/tarek-logo.jpg';
import mahalyLogo from '../assets/utils/images/mahaly-logo.jpg';
import classnames from 'classnames';

class Buyers extends Component {
    constructor() {
        super();
        this.state = { email: '' };
        this.onClick1 = this.onClick1.bind(this);
        this.onClick2 = this.onClick2.bind(this);
    }
    onClick1(e) {
        e.preventDefault();
        window.location.href = 'https://forms.gle/4PFPJPC4Z1BFBV5X7';
    }
    onClick2(e) {
        e.preventDefault();
        this.props.history.push('/dashboard/request');
    }
    render() {
        let { enableBuyerBackground, buyersBackground } = this.props;
        let content1;
        let content2;
        let { prev } = this.props;
        let dezWidth;
        let dezHeight;
        let lumiWidth;
        let lumiHeight;
        let tagWidth;
        let tagHeight;
        let jassWidth;
        let jassHeight;
        let atlasWidth;
        let atlasHeight;
        let emporWidth;
        let emporHeight;
        let carnegieWidth;
        let carnegieHeight;
        let mahalyWidth;
        let mahalyHeight;
        if (enableBuyerBackground) {
            dezWidth = '250';
            dezHeight = '250';
            lumiWidth = '250';
            lumiHeight = '250';
            tagWidth = '250';
            tagHeight = '250';
            jassWidth = '250';
            jassHeight = '250';
            atlasWidth = '250';
            atlasHeight = '250';
            emporWidth = '250';
            emporHeight = '250';
            carnegieWidth = '250';
            carnegieHeight = '250';
            mahalyWidth = '250';
            mahalyHeight = '250';

        } else {
            dezWidth = '250';
            dezHeight = '250';
            lumiWidth = '250';
            lumiHeight = '250';
            tagWidth = '250';
            tagHeight = '250';
            jassWidth = '250';
            jassHeight = '250';
            atlasWidth = '250';
            atlasHeight = '250';
            emporWidth = '250';
            emporHeight = '250';
            carnegieWidth = '250';
            carnegieHeight = '250';
            mahalyWidth = '250';
            mahalyHeight = '250';
        }

        if (prev !== ROLE_SUPPLIER) {
            content1 = (
                <div className='click-away'>
                    <a
                        className='btn btn-escrus text-center'
                        href="https://forms.gle/4PFPJPC4Z1BFBV5X7"
                        target="_blank"
                        rel="noopener noreferrer"
                    >Source Now</a>
                </div>
            );
            content2 = (
                <div className='click-away'>
                    <a
                        className='btn btn-escrus text-center'
                        href="https://forms.gle/4PFPJPC4Z1BFBV5X7"
                        target="_blank"
                        rel="noopener noreferrer"
                    >Source Now</a>
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
                    <div
                        className='app-main-enhanced buyers3-mobile'
                        style={{
                            backgroundImage: enableBuyerBackground
                                ? 'url(' + buyersBackground + ')'
                                : null,
                            height: '700px',

                        }}
                    >
                        <Row className='slogan-buyer-position'>
                            <Col>
                                {' '}
                                <h1 className='slogan8-text'>
                                    FF&E Personal Assistant for Interior
                                    Designers <br /> and
                                    Professional Buyers{' '}
                                </h1>
                                {enableBuyerBackground ? (
                                    <p className='buyer-text3'>
                                        A single place to find furniture
                                        materials, get qoutes and purchase from
                                        over a 1000 <br /> different qualified
                                        suppliers.{' '} <br />
                                        <br />
                                        We’re just a click away, send us your request and our FF&E Team will assist you.
                                    </p>

                                ) : (
                                        <p
                                            className='buyer-text3'
                                            style={{ fontSize: '12px' }}
                                        >
                                            A single place to find furniture
                                            materials, get qoutes and purchase from
                                            over a 1000 different qualified
                                            suppliers.
                                            <br />
                                            <br />
                                            We’re just a click away, send us your request and our FF&E Team will assist you.
                                    </p>
                                    )}
                            </Col>
                            <Col
                                className='buyers4-mobile'
                                style={{ flexBasis: '100%' }}
                            >
                                {content1}
                            </Col>
                        </Row>
                    </div>
                    <Row>
                        {!enableBuyerBackground && (
                            <img
                                src={buyersPic}
                                width='100%'
                                height='500'
                                className='mb-2'
                                alt="buyers"
                            />
                        )}
                    </Row>

                    <div className='app-main-enhanced' >
                        <Row>
                            <Col>
                                <div className='heading-section mb-5 pt-5 pl-md-5'>
                                    <div

                                        className={classnames(
                                            { 'pr-md-5 mr-md-5 text-md-left': enableBuyerBackground },
                                            { 'text-center': !enableBuyerBackground }
                                        )}

                                    >
                                        <h2
                                            style={{ color: '#ecc503' }}
                                            className='mb-4 align-self-center'
                                        >
                                            How it Works
                                        </h2>
                                    </div>
                                </div>
                                <div className='pr-md-3 pr-lg-5 pl-md-5 mr-md-5 mb-5'>
                                    <div className='services-wrap d-flex'>
                                        <div className='media-body pl-md-0 pl-4 pr-4 order-md-first text-md-left'>
                                            <h3 className='heading'>
                                                Fill in the Form
                                            </h3>
                                            <p>
                                                Send us your request for your
                                                project needs by signing up and
                                                using the source now button.
                                            </p>
                                            <div>{content2}</div>
                                        </div>
                                    </div>
                                    <div className='services-wrap d-flex' style={{ marginTop: '23px' }}>
                                        <div className='media-body pl-md-0 pl-4 pr-4 order-md-first text-md-left'>
                                            <h3 className='heading'>
                                                Receive Quotations
                                            </h3>
                                            <p>
                                                Our suppliers provide multiple
                                                quotations for you to choose
                                                from.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='services-wrap d-flex'>
                                        <div className='media-body pl-md-0 pl-4 pr-4 order-md-first text-md-left'>
                                            <h3 className='heading'>Select</h3>
                                            <p>
                                                Choose from the quotations you
                                                received and we connect you
                                                directly with the Supplier.
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </Col>
                            {enableBuyerBackground && (
                                <Col>
                                    <img
                                        src={buyersPic}
                                        width='500'
                                        height='500'
                                        className='mb-2'
                                        alt="buyerpic"
                                    />
                                </Col>
                            )}
                        </Row>

                        <Row className='buyers-icon-section'>
                            <Col className='buyers-mobile'>
                                <div className='d-flex justify-content-center mt-4'>
                                    <img
                                        src={idea}
                                        width='50'
                                        color='white'
                                        height='50'
                                        className='mb-2'
                                        alt="buyer"
                                    />
                                </div>
                                <div className='d-flex justify-content-center mt-4'>
                                    <p className='ml-1 supplier-text'>
                                        Smart Sourcing
                                    </p>
                                </div>
                                <div className='d-flex justify-content-center mt-4'>
                                    <p className='text-center supplier-text2'>
                                        All you need for your project is just a
                                        click away.
                                    </p>
                                </div>
                            </Col>
                            <Col className='buyers-mobile'>
                                <div className='d-flex justify-content-center mt-4'>
                                    <img
                                        src={analysis}
                                        width='50'
                                        height='50'
                                        className='mb-2'
                                        alt="buyer"
                                    />
                                </div>
                                <div className='d-flex justify-content-center mt-4'>
                                    <p className='ml-1 supplier-text'>
                                        Recommendations
                                    </p>
                                </div>
                                <div className='d-flex justify-content-center mt-4'>
                                    <p className='text-center supplier-text2'>
                                        Recommendation for effective <br />{' '}
                                        materials from a wide range of suppliers
                                    </p>
                                </div>
                            </Col>
                            <Col className='buyers-mobile'>
                                <div className='d-flex justify-content-center mt-4'>
                                    <img
                                        src={data}
                                        width='50'
                                        height='50'
                                        className='mb-2'
                                        alt="buyer"
                                    />
                                </div>
                                <div className='d-flex justify-content-center mt-4'>
                                    <p className='supplier-text'>Follow-up</p>
                                </div>
                                <div className='d-flex justify-content-center mt-4'>
                                    <p className='ml-1  text-center supplier-text2'>
                                        Dedicated support and follow-up ensuring
                                        you receive your materials within the
                                        agreed time frame with the supplier.
                                    </p>
                                </div>
                            </Col>
                            <Col className='buyers-mobile'>
                                <div className='d-flex justify-content-center mt-4'>
                                    <img
                                        src={startUp}
                                        width='50'
                                        height='50'
                                        className='mb-2'
                                        alt="buyers"
                                    />
                                </div>
                                <div className='d-flex justify-content-center mt-4'>
                                    <p className='ml-1 supplier-text'>
                                        Best Pricing
                                    </p>
                                </div>
                                <div className='d-flex justify-content-center mt-4'>
                                    <p className='text-center supplier-text2'>
                                        We make sure you get the best possible
                                        price in the market, with up to 45%
                                        additional discount.
                                    </p>
                                </div>
                            </Col>
                        </Row>
                        <Container className='clients-buyer-section'>
                            <Row>
                                <Col className='meet-our-buyer-position'>
                                    <h2 className='meet-our-text text-center'>
                                        Meet our network of Suppliers
                                </h2>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h5 className='meet-our-text3 text-center'>
                                        We have a wide range of Suppliers both local
                                        and international, below are some of our
                                        featured Suppliers
                                </h5>
                                </Col>
                            </Row>
                            <div className='logo-container'>
                                <div className='logos'>
                                    <div>
                                        <a href='https://www.facebook.com/DezignablezArt/' target="_blank">
                                            <img
                                                className='ml-1'
                                                src={deizgLogo}
                                                width={dezWidth}
                                                height={dezHeight}
                                                alt="DeszignablezArt"
                                            />
                                        </a>
                                    </div>
                                    <div>
                                        <a href=' http://www.alfa.furniture/' target="_blank">
                                            <img
                                                className='ml-1'
                                                src={alfaLogo}
                                                width='250'
                                                height='250'
                                                alt="alfa"
                                            />
                                        </a>
                                    </div>
                                    <div>
                                        <a href='https://www.facebook.com/LumiereEgypt/' target="_blank">
                                            <img
                                                className='ml-1'
                                                src={lumiLogo}
                                                width={lumiWidth}
                                                height={lumiHeight}
                                                alt="lumiereEgypt"
                                            />
                                        </a>
                                    </div>
                                    <div>
                                        <a href='https://www.facebook.com/Mizajtileseg/' target="_blank">
                                            <img
                                                className='ml-1'
                                                src={mizajLogo}
                                                width='250'
                                                height='250'
                                                alt="Mazijtileseg"
                                            />
                                        </a>
                                    </div>
                                </div>
                                <div className='logos'>
                                    <div>
                                        <a href='http://tagouryshouse.com/' target="_blank">
                                            <img
                                                className='ml-1'
                                                src={tagoLogo}
                                                width={tagWidth}
                                                height={tagHeight}
                                                alt="tagouryshouse"
                                            />
                                        </a>
                                    </div>
                                    <div>
                                        <a href='https://www.facebook.com/JWardaniDesign/' target="_blank">
                                            <img
                                                className='ml-1'
                                                src={jassLogo}
                                                width={jassWidth}
                                                height={jassHeight}
                                                alt="JWardanDesign"
                                            />
                                        </a>
                                    </div>
                                    <div>
                                        <a href='https://www.atlasconcorde.com/en/' target="_blank">
                                            <img
                                                className='ml-1'
                                                src={atlasLogo}
                                                width={atlasWidth}
                                                height={atlasHeight}
                                                alt="atlascorde"
                                            />
                                        </a>
                                    </div>
                                    <div>
                                        <a href='http://designemporiumegypt.com/Home.html' target="_blank">
                                            <img
                                                className='ml-1'

                                                src={emporLogo}
                                                width={emporWidth}
                                                height={emporHeight}
                                                alt="designemporiumegypt"
                                            />
                                        </a>
                                    </div>
                                </div>
                                <div className='logos'>

                                    <div>
                                        <a href='https://carnegiefabrics.com/' target="_blank">
                                            <img
                                                className='ml-1'
                                                src={carnegieLogo}
                                                width={carnegieWidth}
                                                height={carnegieHeight}
                                                alt="carnegiefabrics"
                                            />
                                        </a>
                                    </div>
                                    <div>
                                        <a href='http://www.elnasrparquet.com/' target="_blank">
                                            <img
                                                className='ml-1'
                                                src={tarekLogo}
                                                width='250'
                                                height='250'
                                                alt="elnasrparquet"
                                            />
                                        </a>
                                    </div>
                                    <div>
                                        <a href='https://mahally.net/' target="_blank">
                                            <img
                                                className='ml-1'
                                                src={mahalyLogo}
                                                width={mahalyWidth}
                                                height={mahalyHeight}
                                                alt="mahally"
                                            />
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </Container>
                    </div>
                </ReactCSSTransitionGroup>
            </Fragment>
        );
    }
}
const mapStateToProps = state => ({
    enableBuyerBackground: state.ThemeOptions.enableBuyerBackground,
    buyersBackground: state.ThemeOptions.buyersBackground,
    auth: state.auth,
    prev: state.prev
});

export default connect(mapStateToProps)(Buyers);
