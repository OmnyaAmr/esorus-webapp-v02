import React, { Fragment } from 'react';
import cx from 'classnames';
import logo from '../../assets/utils/images/logo.png'; //'assets/utils/images/logo.png'

import { connect } from 'react-redux';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import HeaderLogo from '../AppLogo';

import UserBox from './Components/UserBox';
import { Link } from 'react-router-dom';

class Header extends React.Component {
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
                    <div
                        className={cx('app-header__content', 'fix-shadow', {
                            'header-mobile-open': enableMobileMenuSmall
                        })}
                    >
                        <div className='app-header-left'>
                            <Link to='/dashboard/home'>
                                <img src={logo} width='180' heigth='100' />
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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
