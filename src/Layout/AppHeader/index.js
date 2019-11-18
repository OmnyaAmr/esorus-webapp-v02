import React, { Fragment } from 'react';
import cx from 'classnames';
import logo from '../../assets/utils/images/logo.png';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import HeaderLogo from '../AppLogo';
import UserBox from './Components/UserBox';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    componentDidMount() {
        window.onscroll = function() {
            if (window.pageYOffset === 0) {
                this.document.getElementById('header').style.backgroundColor =
                    'transparent';
            } else {
                this.document.getElementById('header').style.backgroundColor =
                    '#bfbfbf';
            }
        };
    }
    render() {
        let {
            headerBackgroundColor,
            enableMobileMenuSmall,
            enableHeaderShadow
        } = this.props;

        return (
            <Fragment>
                <ReactCSSTransitionGroup
                    component='div'
                    className={cx('app-header', headerBackgroundColor, {
                        'header-shadow': enableHeaderShadow
                    })}
                    transitionName='HeaderAnimation'
                    transitionAppear={true}
                    transitionAppearTimeout={1500}
                    transitionEnter={false}
                    transitionLeave={false}
                >
                    <HeaderLogo />
                    <div
                        className={cx('app-header__content', {
                            'header-mobile-open': enableMobileMenuSmall
                        })}
                        id='header'
                    >
                        <div className='app-header-left'>
                            <Link to='/dashboard/home'>
                                <img
                                    src={logo}
                                    width='160'
                                    heigth='100'
                                    id='header-logo'
                                />
                            </Link>
                        </div>
                        <div className='app-header-right'>
                            <UserBox />
                        </div>
                    </div>
                </ReactCSSTransitionGroup>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    enableHeaderShadow: state.ThemeOptions.enableHeaderShadow,
    closedSmallerSidebar: state.ThemeOptions.closedSmallerSidebar,
    headerBackgroundColor: state.ThemeOptions.headerBackgroundColor,
    enableMobileMenuSmall: state.ThemeOptions.enableMobileMenuSmall
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
