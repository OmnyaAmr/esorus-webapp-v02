import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import MetisMenu from 'react-metismenu';
import {
    CONFIRMATION_REQUIRED,
    COMPLETION_REQUIRED,
    ADMIN_PREV,
    MOD_PREV,
    STUDENT_PREV,
    USER_PREV
} from '../../actions/types';
import {
    AdminNav,
    ComponentsNav,
    FormsNav,
    WidgetsNav,
    ChartsNav,
    AuthNav,
    StudentNav,
    ModeratorNav,
    UserNav,
    ConfirmNav,
    AboutUs,
    CompleteNav
} from './NavItems';

class Nav extends Component {
    state = {};

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
            if (prev === ADMIN_PREV) {
                navContent = (
                    <Fragment>
                        <h5 className='app-sidebar__heading'>Dashboard</h5>
                        <MetisMenu
                            content={AdminNav}
                            activeLinkFromLocation
                            className='vertical-nav-menu'
                            iconNamePrefix=''
                            classNameStateIcon='pe-7s-angle-down'
                        />
                        <h5 className='app-sidebar__heading'>Moderator</h5>
                        <MetisMenu
                            content={ModeratorNav}
                            activeLinkFromLocation
                            className='vertical-nav-menu'
                            iconNamePrefix=''
                            classNameStateIcon='pe-7s-angle-down'
                        />
                        <h5 className='app-sidebar__heading'>UI Component</h5>
                        <MetisMenu
                            content={ComponentsNav}
                            activeLinkFromLocation
                            className='vertical-nav-menu'
                            iconNamePrefix=''
                            classNameStateIcon='pe-7s-angle-down'
                        />
                        <h5 className='app-sidebar__heading'>Forms</h5>
                        <MetisMenu
                            content={FormsNav}
                            activeLinkFromLocation
                            className='vertical-nav-menu'
                            iconNamePrefix=''
                            classNameStateIcon='pe-7s-angle-down'
                        />
                        <h5 className='app-sidebar__heading'>Widgets</h5>
                        <MetisMenu
                            content={WidgetsNav}
                            activeLinkFromLocation
                            className='vertical-nav-menu'
                            iconNamePrefix=''
                            classNameStateIcon='pe-7s-angle-down'
                        />
                        <h5 className='app-sidebar__heading'>Charts</h5>
                        <MetisMenu
                            content={ChartsNav}
                            activeLinkFromLocation
                            className='vertical-nav-menu'
                            iconNamePrefix=''
                            classNameStateIcon='pe-7s-angle-down'
                        />
                    </Fragment>
                );
            } else if (prev === MOD_PREV) {
                navContent = (
                    <Fragment>
                        <h5 className='app-sidebar__heading'>Dashboard</h5>
                        <MetisMenu
                            content={ModeratorNav}
                            activeLinkFromLocation
                            className='vertical-nav-menu'
                            iconNamePrefix=''
                            classNameStateIcon='pe-7s-angle-down'
                        />
                    </Fragment>
                );
            } else if (prev === STUDENT_PREV) {
                navContent = (
                    <Fragment>
                        <h5 className='app-sidebar__heading'>Register</h5>
                        <MetisMenu
                            content={StudentNav}
                            activeLinkFromLocation
                            className='vertical-nav-menu'
                            iconNamePrefix=''
                            classNameStateIcon='pe-7s-angle-down'
                        />
                    </Fragment>
                );
            } else if (prev === USER_PREV) {
                navContent = (
                    <Fragment>
                        <h5 className='app-sidebar__heading'>Register</h5>
                        <MetisMenu
                            content={UserNav}
                            activeLinkFromLocation
                            className='vertical-nav-menu'
                            iconNamePrefix=''
                            classNameStateIcon='pe-7s-angle-down'
                        />
                    </Fragment>
                );
            } else if (prev == COMPLETION_REQUIRED) {
                navContent = (
                    <Fragment>
                        <h5 className='app-sidebar__heading'>Complete</h5>
                        <MetisMenu
                            content={CompleteNav}
                            activeLinkFromLocation
                            className='vertical-nav-menu'
                            iconNamePrefix=''
                            classNameStateIcon='pe-7s-angle-down'
                        />
                    </Fragment>
                );
            } else if (prev == CONFIRMATION_REQUIRED) {
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

export default connect(
    mapStateToProps,
    {}
)(withRouter(Nav));

// switch (prev) {
//     case '':
//         return ();
//     case 'admin':
//         return ();
//     case 'moderator':
//         return ();
//     case 'student':
//         return ();
//     case 'user':
//         return ();
// }
