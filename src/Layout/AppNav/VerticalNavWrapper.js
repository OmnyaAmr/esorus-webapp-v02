import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import MetisMenu from 'react-metismenu';
import {
    CONFIRMATION_REQUIRED,
    ROLE_PROFESSIONAL_BUYER,
    ROLE_SUPPLIER
} from '../../actions/types';
import { AuthNav, Supplier, AboutUs, ConfirmNav, Buyer } from './NavItems';
import { Button } from 'reactstrap';

class Nav extends Component {
    state = {};
    constructor() {
        super();
    }

    render() {
        let navContent;
        let { isAuthenticated, user } = this.props.auth;

        let { prev } = this.props;

        if (!isAuthenticated) {
            return (navContent = (
                <Fragment>
                    <h5 className='app-sidebar__heading'>Welcome</h5>
                    <MetisMenu
                        content={AuthNav}
                        activeLinkFromLocation
                        className='vertical-nav-menu'
                        iconNamePrefix=''
                        classNameStateIcon='pe-7s-angle-down'
                    />
                </Fragment>
            ));
        } else {
            if (prev === CONFIRMATION_REQUIRED) {
                navContent = (
                    <Fragment>
                        <h5 className='app-sidebar__heading'>Confirm</h5>
                        <MetisMenu
                            content={ConfirmNav}
                            activeLinkFromLocation
                            className='vertical-nav-menu'
                            iconNamePrefix=''
                            classNameStateIcon='pe-7s-angle-down'
                        />
                    </Fragment>
                );
            } else if (prev === ROLE_PROFESSIONAL_BUYER) {
                navContent = (
                    <Fragment>
                        <div>
                            <h5 className='app-sidebar__heading'>
                                Professional Buyer
                                {<h5>{user.name}</h5>}
                            </h5>
                        </div>
                        <MetisMenu
                            content={Buyer}
                            activeLinkFromLocation
                            className='vertical-nav-menu'
                            iconNamePrefix=''
                            classNameStateIcon='pe-7s-angle-down'
                        />
                    </Fragment>
                );
            } else if (prev === ROLE_SUPPLIER) {
                navContent = (
                    <Fragment>
                        <h5 className='app-sidebar__heading'>
                            Supplier{<h5>{user.name}</h5>}
                        </h5>
                        <MetisMenu
                            content={Supplier}
                            activeLinkFromLocation
                            className='vertical-nav-menu'
                            iconNamePrefix=''
                            classNameStateIcon='pe-7s-angle-down'
                        />
                    </Fragment>
                );
            } else {
                <Fragment>
                    <h5 className='app-sidebar__heading'>About Us</h5>
                    <MetisMenu
                        content={AboutUs}
                        activeLinkFromLocation
                        className='vertical-nav-menu'
                        iconNamePrefix=''
                        classNameStateIcon='pe-7s-angle-down'
                    />
                </Fragment>;
            }
        }

        return <Fragment>{navContent}</Fragment>;
    }

    isPathActive(path) {
        return this.props.location.pathname.startsWith(path);
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    prev: state.prev
});

export default connect(mapStateToProps, {})(withRouter(Nav));
