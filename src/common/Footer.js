import React from 'react';
import { Row, Col } from 'reactstrap';

import {
    faHome,
    faMobileAlt,
    faMobile,
    faClock,
    faPenAlt,
    faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <footer
            id='contact'
            className='ftco-footer ftco-bg-dark ftco-section ml-4'
        >
            <Row className='p-lg-5'>
                <Col className='center' lg={true} md={true} sm={true} xs={true}>
                    <div className='ftco-footer-widget mb-4 center-footer'>
                        <h2 className='ftco-heading-2'>e s o r u s</h2>
                        <p>Your FF&E Personal Assistant</p>
                        <ul className='ftco-footer-social list-unstyled float-md-left float-lft mt-3'>
                            <li className='ftco-animate'>
                                <a href='https://www.facebook.com/Esorus'>
                                    <span className='fa fa-facebook'></span>
                                </a>
                            </li>
                            <li className='ftco-animate'>
                                <a href='https://www.instagram.com/_esorus'></a>
                            </li>
                        </ul>
                    </div>
                </Col>
                <Col lg={true} md={true} sm={true} xs={true}>
                    <div className='ftco-footer-widget mb-4 center-footer'>
                        <h2 className='ftco-heading-2'>
                            Courious and intrigued? Let's Talk!
                        </h2>
                        <div className='block-23 mb-3'>
                            <ul>
                                <li>
                                    <div className='widget-description text-white'>
                                        <FontAwesomeIcon icon={faMobileAlt} />
                                        <span className='pl-1'>
                                            +201025035347
                                        </span>
                                    </div>
                                </li>
                                <li>
                                    <div className='widget-description text-white'>
                                        <FontAwesomeIcon icon={faPenAlt} />
                                        <span className='pl-1'>
                                            admin@esorus.com
                                        </span>
                                    </div>
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
