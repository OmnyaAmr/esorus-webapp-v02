import React, { Fragment } from 'react';

import { faMobileAlt, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class AppFooter extends React.Component {
    render() {
        return (
            <Fragment>
                <div className='app-footer'>
                    <div className='app-footer__inner'>
                        <div className='app-footer-left ml-5'>
                            <ul className='nav'>
                                <li className='nav-item mr-5'>
                                    <a
                                        className='a-esorus'
                                        href='https://www.facebook.com/Esorus'
                                        target='_blank'
                                    >
                                        <FontAwesomeIcon
                                            icon={faFacebook}
                                            size='3x'
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
                        </div>
                        <div className='app-footer-right'>
                            <h2>Curious and intrigued? Let's Talk!</h2>
                            <ul>
                                <li>
                                    <div className='text-white'>
                                        <FontAwesomeIcon icon={faMobileAlt} />
                                        <span className='pl-1'>
                                            +201025035347
                                        </span>
                                    </div>
                                </li>
                                <li>
                                    <div className='text-white'>
                                        <FontAwesomeIcon icon={faAddressCard} />
                                        <span className='pl-1'>
                                            admin@esorus.com
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
