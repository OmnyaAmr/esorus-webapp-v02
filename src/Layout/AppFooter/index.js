import React, { Fragment } from 'react';
import { Row, Col } from 'reactstrap';
import { faMobileAlt, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import location from '../../assets/components/icons/location.svg';
import phone from '../../assets/components/icons/phone.svg';
import envelope from '../../assets/components/icons/envelope.svg';
import facebook from '../../assets/components/icons/facebook.svg';

class AppFooter extends React.Component {
    render() {
        return (
            <Fragment>
                <div className='app-footer'>
                    <div className='app-footer__inner'>
                        <div className='app-footer-left ml-5'>
                            <Row>
                                <Col>
                                    <h2 style={{ marginTop: "30px" }}>e s o r u s</h2>
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
                                            className='mb-2'
                                        />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className='a-esorus'
                                                href='https://www.instagram.com/_esorus'
                                                target='_blank'
                                            >
                                                <FontAwesomeIcon
                                                    icon={faInstagram}
                                                    size='3x'
                                                />
                                            </a>
                                        </li>
                                    </ul>
                                </Col>
                            </Row>
                        </div>
                        <div className='app-footer-middle'>
                            <ul class="list-unstyled">
                                <li><h2 >Quick links</h2></li>
                                <li><a className='pl-1 ' href="#/dashboard/buyers">Professional Buyers</a></li>
                                <li><a className='pl-1' href="#/dashboard/suppliers">Suppliers</a></li>
                                <li><a className='pl-1' href="#/dashboard/about">About Esorus</a></li>
                            </ul>
                            <p className="copy-rights-text">All rights reserved. esorus © 2019</p>
                        </div>
                        <div className='app-footer-right'>
                            <h2 style={{ marginLeft: "35px", marginTop: "30px" }}>Curious and intrigued? Let's Talk!</h2>
                            <ul>
                                <li>
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
                                <li>
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
                    
                </div>
            </Fragment>
        );
    }
}

export default AppFooter;
