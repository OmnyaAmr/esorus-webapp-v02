import React, { Component, Fragment } from 'react';
import { Row, Col } from 'reactstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';
import idea from '../assets/components/icons/idea.svg';
import analysis from '../assets/components/icons/analysis.svg';
import data from '../assets/components/icons/data.svg';
import startUp from '../assets/components/icons/startup.svg';
import buyersPic from '../assets/utils/images/originals/buyersPic.jpg';
import { ROLE_SUPPLIER } from '../actions/types';
import deizgLogo from '../assets/utils/images/Dezignablez_logo.png';
import alfaLogo from '../assets/utils/images/Alfa_Furniture_Logo.png';
import lumiLogo from '../assets/utils/images/lumi_logo.png';
import mizajLogo from '../assets/utils/images/Mizaj_Logo.png';
import tagoLogo from '../assets/utils/images/tago-logo.png';
import jassLogo from '../assets/utils/images/Jass.jpg';
import atlasLogo from '../assets/utils/images/Atlas_Concorde.png';

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
        let { enableBuyerBackground, buyersBackground } = this.props;
        let content;
        let { prev } = this.props;
        let dezWidth;let dezHeight;
        let alfaWidth;let alfaHeight;
        let lumiWidth; let lumiHeight;
        let mazajWidth; let mazajHeight;
        let tagWidth; let tagHeight;
        let jassWidth; let jassHeight;
        let atlasWidth;let atlasHeight;
        
        if(enableHomeBackground){
            dezWidth= '360'; dezHeight= '110';
            lumiWidth= '330';lumiHeight= '120';
            tagWidth= '400'; tagHeight='200';
            jassWidth= '350'; jassHeight= '100';
            atlasWidth='370'; atlasHeight='120'
        }
        else{
            dezWidth= '290'; dezHeight= '80';
            lumiWidth= '280';lumiHeight= '90';
            tagWidth= '330'; tagHeight='150';
            jassWidth= '290'; jassHeight= '80';
            atlasWidth='280'; atlasHeight='90'


        }

        if (prev !== ROLE_SUPPLIER) {
            content = (
                <div>
                    {' '}
                    <p>
                        We’re just a click away, send us your request and our
                        FF&E Team will assist you.
                    </p>
                    <input
                        type='button'
                        className='btn-escrus mt-2'
                        value='Source Now'
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
                    <div
                        className='app-main-enhanced buyers3-mobile'
                        style={{
                            backgroundImage: enableBuyerBackground
                                ? 'url(' + buyersBackground + ')'
                                : null,
                            height: '700px'
                        }}
                    >
                        <Row className='slogan-buyer-position ml-4'>
                            <Col>
                                {' '}
                                <h2 className='slogan8-text'>
                                    FF&E Personal Assistant for Interior
                                    Designers and <br />
                                    Professional Buyers{' '}
                                </h2>
                                {enableBuyerBackground ? (
                                    <p className='buyer-text3'>
                                        A single place to find furniture
                                        materials, get qoutes and purchase from
                                        over a 1000 <br /> different qualified
                                        suppliers.{' '}
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
                                    </p>
                                )}
                            </Col>
                            <Col
                                className='buyers2-mobile'
                                style={{ flexBasis: '100%' }}
                            >
                                {content}
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
                            />
                        )}
                    </Row>

                    <div className='app-main-enhanced'>
                        <Row>
                            <Col>
                                <div className='heading-section mb-5 pt-5 pl-md-5'>
                                    <div className='pr-md-5 mr-md-5 text-md-left'>
                                        <h2
                                            style={{ color: 'black' }}
                                            className='mb-4'
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
                                        </div>
                                    </div>
                                    <div className='services-wrap d-flex'>
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
                                    />
                                </Col>
                            )}
                        </Row>

                        <Row>
                            <Col
                                className='buyers2-mobile'
                                style={{ left: '50px' }}
                            >
                                {content}
                            </Col>
                        </Row>
                        <Row>
                            <Col className='buyers-mobile'>
                                <div className='d-flex justify-content-center mt-4'>
                                    <img
                                        src={idea}
                                        width='50'
                                        height='50'
                                        className='mb-2'
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
                        <Row>
                            <Col>
                                <h2 className='meet-our-text text-center'>
                                    Meet our network of Suppliers
                                </h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h5 className="meet-our-text3 text-center">
                                    We have a wide range of Suppliers both local
                                    and international, below are some of our
                                    featured Suppliers
                                </h5>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='meet-out-col'>
                                <a href='https://www.facebook.com/DezignablezArt/'>

                                    <img
                                        className='ml-1'
                                        src={deizgLogo}
                                        width={dezWidth}
                                        height={dezHeight}
                                        className='dez-logo'
                                    />


                                </a>
                            </Col>
                            <Col className='meet-out-col'>
                                <a href=' http://www.alfa.furniture/'>

                                    <img
                                        className='ml-1'
                                        src={alfaLogo}
                                        width='280'
                                        height='220'
                                        className='alfa-logo'
                                    />


                                </a>
                            </Col>
                            <Col className='meet-out-col'>
                                <a href='https://www.facebook.com/LumiereEgypt/'>

                                    <img
                                        className='ml-1'
                                        src={lumiLogo}
                                        width={lumiWidth}
                                        height={lumiHeight}
                                        className='lumi-logo'
                                    />
                                </a>
                            </Col>
                            <Col className='meet-out-col'>
                                <a href='https://www.facebook.com/Mizajtileseg/'>

                                    <img
                                        className='ml-1'
                                        src={mizajLogo}
                                        width='270'
                                        height='170'
                                        className='mizaj-logo'
                                    />
                                </a>
                            </Col>
                        </Row>
                        <Row className='meet-out-row'>
                            <Col className='meet-out-col'>
                                <a href='http://tagouryshouse.com/'>

                                    <img
                                        className='ml-1'
                                        src={tagoLogo}
                                        width={tagWidth}
                                        height={tagHeight}
                                        className='tag-logo'
                                    />
                                </a>
                            </Col>
                            <Col className='meet-out-col'>
                                <a href='https://www.facebook.com/JWardaniDesign/'>

                                    <img
                                        className='ml-1'
                                        src={jassLogo}
                                        width={jassWidth}
                                        height={jassHeight}
                                        className='jass-logo'
                                    />
                                </a>
                            </Col>
                            <Col className='meet-out-col'>
                                <a href='https://www.atlasconcorde.com/en/'>

                                    <img
                                        className='ml-1'
                                        src={atlasLogo}
                                        width={atlasWidth}
                                        height={atlasHeight}
                                        className='atlas-logo'
                                    />
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
    enableBuyerBackground: state.ThemeOptions.enableBuyerBackground,
    buyersBackground: state.ThemeOptions.buyersBackground,
    auth: state.auth,
    prev: state.prev
});

export default connect(mapStateToProps)(Buyers);
