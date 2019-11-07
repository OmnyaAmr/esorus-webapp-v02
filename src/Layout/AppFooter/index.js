import React, { Fragment } from 'react';
import { Row, Col } from 'reactstrap';
import location from '../../assets/components/icons/location.svg';
import phone from '../../assets/components/icons/phone.svg';
import envelope from '../../assets/components/icons/envelope.svg';
import facebook from '../../assets/components/icons/facebook.svg';
import instagram from '../../assets/components/icons/instagram.svg';
class AppFooter extends React.Component {
    render() {
        return (
            <Fragment>
                <div className='app-footer'>
                    <div className='copyright-container'>
                        <div className='app-footer__inner'>
                            <div className='app-footer-left'>
                                <Row>
                                    <Col>
                                        <h2>e s o r u s</h2>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <p>Your FF&E Personal Assistant</p>
                                        <ul className='nav'>
                                            <li className='nav-item mr-5'>
                                                <a
                                                    className='a-esorus'
                                                    href='https://www.facebook.com/Esorus'
                                                    target='_blank'
                                                >
                                                    <img
                                                        src={facebook}
                                                        width='25'
                                                        height='25'
                                                    />
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className='a-esorus'
                                                    href='https://www.instagram.com/_esorus'
                                                    target='_blank'
                                                >
                                                    <img
                                                        src={instagram}
                                                        width='25'
                                                        height='25'
                                                        style={{
                                                            marginLeft: '-35px'
                                                        }}
                                                    />
                                                </a>
                                            </li>
                                        </ul>
                                    </Col>
                                </Row>
                            </div>
                            <div className='app-footer-middle'>
                                <ul className='list-unstyled'>
                                    <li className='mb-3'>
                                        <h2>Quick Links</h2>
                                    </li>
                                    <li className='mb-3'>
                                        <a
                                            className='pl-1'
                                            href='#/dashboard/buyers'
                                        >
                                            Professional Buyers
                                        </a>
                                    </li>
                                    <li className='mb-3'>
                                        <a
                                            className='pl-1'
                                            href='#/dashboard/suppliers'
                                        >
                                            Suppliers
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className='pl-1'
                                            href='#/dashboard/home#aboutUs'
                                        >
                                            About Esorus
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className='app-footer-right'>
                                <h2
                                    style={{
                                        marginLeft: '35px',
                                        marginTop: '30px'
                                    }}
                                >
                                    Curious and intrigued? Let's Talk!
                                </h2>
                                <ul>
                                    <li className='mb-3'>
                                        <div className='text-white'>
                                            <img
                                                src={location}
                                                width='15'
                                                height='15'
                                                className='mb-2'
                                            />
                                            <span className='pl-1'>
                                                {'  '}AUC, New Cairo, Egypt
                                            </span>
                                        </div>
                                    </li>
                                    <li className='mb-3'>
                                        <div className='text-white'>
                                            <img
                                                src={phone}
                                                width='15'
                                                height='15'
                                                className='mb-2'
                                            />
                                            <span className='pl-1'>
                                                {'  '}+201025035347
                                            </span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='text-white'>
                                            <img
                                                src={envelope}
                                                width='15'
                                                height='15'
                                                className='mb-2'
                                            />
                                            <span className='pl-1'>
                                                {'  '}admin@esorus.com
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='text-center pb-2'>
                            <p className='copy-rights-text'>
                                All rights reserved. esorus &copy;{' '}
                                {new Date().getFullYear()}
                            </p>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default AppFooter;
