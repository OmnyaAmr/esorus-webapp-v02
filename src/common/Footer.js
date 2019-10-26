import React from 'react';
import { Row, Col } from 'reactstrap';

const Footer = () => {
    return (
        <footer id='contact' className='ftco-footer ftco-bg-dark ftco-section'>
            <Row className='p-lg-5'>
                <Col className='center' lg={true} md={true} sm={true} xs={true}>
                    <div className='ftco-footer-widget mb-4'>
                        <h2 className='ftco-heading-2'>e s o r u s</h2>
                        <p>Your FF&E Personal Assistant</p>
                        <ul className='ftco-footer-social list-unstyled float-md-left float-lft mt-3'>
                            <li className='ftco-animate'>
                                <a href='https://www.facebook.com/Esorus'>
                                    <span className='fa fa-facebook'></span>{' '}
                                </a>
                            </li>
                            <li className='ftco-animate'>
                                <a href='https://www.instagram.com/_esorus'>
                                    <span
                                        style={{ left: '27%' }}
                                        className='fa fa-instagram'
                                    ></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </Col>
                <Col lg={true} md={true} sm={true} xs={true}>
                    <div className='ftco-footer-widget mb-4'>
                        <ul className='list-unstyled'>
                            <li>
                                <h2 className='ftco-heading-2'>About Us</h2>
                            </li>
                            <li>
                                <a href='#projects-section'>Our Solutions</a>
                            </li>
                            <li>
                                <a href='#section-counter'>About Esorus</a>
                            </li>
                            <li>
                                <a href='#about'>How it Works</a>
                            </li>
                            <li>
                                <a href='#benefits'>Value Service</a>
                            </li>
                            <li>
                                <a href='#'>Terms &amp; Conditions</a>
                            </li>
                        </ul>
                    </div>
                </Col>
                <Col lg={true} md={true} sm={true} xs={true}>
                    <div className='ftco-footer-widget mb-4'>
                        <h2 className='ftco-heading-2'>
                            Courious and intrigued? Let's Talk!
                        </h2>
                        <div className='block-23 mb-3'>
                            <ul>
                                <li>
                                    <a href='#'>
                                        <span className='icon icon-phone'></span>
                                        <span className='text'>
                                            +201025035347
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href='#'>
                                        <span className='icon icon-envelope'></span>
                                        <span className='text'>
                                            admin@esorus.com
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Col>
            </Row>
        </footer>
    );
};

export default Footer;
