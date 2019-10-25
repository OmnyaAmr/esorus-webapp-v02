import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import {
    DropdownToggle,
    DropdownMenu,
    Nav,
    Button,
    NavItem,
    NavLink,
    UncontrolledTooltip,
    UncontrolledButtonDropdown
} from 'reactstrap';

import {
    faSignInAlt,
    faAngleDown,
    faSignOutAlt,
    faUpload,
    faInfo
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import unknownUser from '../../../assets/utils/images/avatars/unknown.jpg';

import { connect } from 'react-redux';
import { logoutUser } from '../../../actions/authActions';

class UserBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
        this.onLogoutClick = this.onLogoutClick.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onLogoutClick(e) {
        e.preventDefault();
        this.props.logoutUser();
    }

    onClick(e) {
        e.preventDefault();
    }

    render() {
        let { isAuthenticated, user } = this.props.auth;
        let avatar;

        avatar =
            isAuthenticated && user.image
                ? 'http://localhost:5000/' + user.image
                : unknownUser;

        let navbarMenu;

        if (isAuthenticated) {
            navbarMenu = (
                <div className='header-btn-lg pr-0'>
                    <div className='widget-content p-0'>
                        <div className='widget-content-wrapper'>
                            <div className='widget-content-left'>
                                <UncontrolledButtonDropdown>
                                    <DropdownToggle
                                        color='link'
                                        className='p-0'
                                    >
                                        <img
                                            width={50}
                                            height={50}
                                            className='rounded-circle'
                                            src={avatar}
                                            alt=''
                                        />
                                        <FontAwesomeIcon
                                            className='ml-2 opacity-8'
                                            icon={faAngleDown}
                                        />
                                    </DropdownToggle>
                                    <DropdownMenu
                                        right
                                        className='rm-pointers dropdown-menu-lg'
                                    >
                                        <Nav vertical>
                                            <NavItem className='nav-item-header'>
                                                Admin Panal
                                            </NavItem>
                                            <NavItem>
                                                <NavLink>
                                                    Posts
                                                    <div className='ml-auto badge badge-pill badge-info'>
                                                        888
                                                    </div>
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink>
                                                    Change Password
                                                </NavLink>
                                            </NavItem>
                                            <NavItem className='nav-item-header'>
                                                My Account
                                            </NavItem>
                                            <NavItem>
                                                <NavLink href='#/dashboard/settings'>
                                                    Settings
                                                    <div className='ml-auto badge badge-success'>
                                                        New
                                                    </div>
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    onClick={this.onLogoutClick}
                                                >
                                                    Logout
                                                </NavLink>
                                            </NavItem>

                                            <NavItem>
                                                <NavLink>
                                                    About Us
                                                    <FontAwesomeIcon
                                                        className='ml-auto opacity-8'
                                                        icon={faInfo}
                                                    />
                                                </NavLink>
                                            </NavItem>
                                        </Nav>
                                    </DropdownMenu>
                                </UncontrolledButtonDropdown>
                            </div>

                            <div className='widget-content-left  ml-3 header-user-info'>
                                <div className='widget-heading'>
                                    {user ? user.name : ''}
                                </div>
                            </div>

                            <div className='widget-content-right header-user-info ml-3'>
                                <Button
                                    className='btn-shadow p-1'
                                    size='sm'
                                    onClick={this.onLogoutClick}
                                    color='info'
                                    id='Tooltip-1'
                                >
                                    <FontAwesomeIcon
                                        className='mr-2 ml-2'
                                        icon={faSignOutAlt}
                                    />
                                </Button>
                                <UncontrolledTooltip
                                    placement='bottom'
                                    target={'Tooltip-1'}
                                >
                                    Click Here To Logout
                                </UncontrolledTooltip>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            navbarMenu = (
                <div className='header-btn-lg pr-0'>
                    <div className='widget-content p-0'>
                        <div className='widget-content-wrapper'>
                            <div className='widget-content-left'>
                                <UncontrolledButtonDropdown>
                                    <DropdownToggle
                                        color='link'
                                        className='p-0'
                                    >
                                        <img
                                            width={42}
                                            className='rounded-circle'
                                            src={unknownUser}
                                            alt=''
                                        />
                                        <FontAwesomeIcon
                                            className='ml-2 opacity-8'
                                            icon={faAngleDown}
                                        />
                                    </DropdownToggle>
                                    <DropdownMenu
                                        right
                                        className='rm-pointers dropdown-menu-lg'
                                    >
                                        <Nav vertical>
                                            <NavItem className='nav-item-header'>
                                                Join us
                                                <FontAwesomeIcon
                                                    className='ml-2 opacity-8'
                                                    icon={faAngleDown}
                                                />
                                            </NavItem>
                                            <NavItem>
                                                <NavLink href='#/dashboard/signup'>
                                                    <FontAwesomeIcon
                                                        className='ml-2 opacity-8 mr-1'
                                                        icon={faUpload}
                                                    />
                                                    Sign up
                                                </NavLink>
                                            </NavItem>
                                            <NavItem className='nav-item-header'>
                                                Already have account
                                            </NavItem>
                                            <NavItem>
                                                <NavLink href='#/dashboard/login'>
                                                    <FontAwesomeIcon
                                                        className='ml-2 opacity-8 mr-1'
                                                        icon={faSignInAlt}
                                                    />
                                                    Login
                                                </NavLink>
                                            </NavItem>

                                            <NavItem>
                                                <NavLink>
                                                    <FontAwesomeIcon
                                                        className='ml-2 opacity-8 mr-1'
                                                        icon={faInfo}
                                                    />
                                                    About Us
                                                </NavLink>
                                            </NavItem>
                                        </Nav>
                                    </DropdownMenu>
                                </UncontrolledButtonDropdown>
                            </div>

                            <div className='widget-content-left  ml-3 header-user-info'>
                                <div className='widget-heading'>
                                    {user ? user.name : ''}
                                </div>
                            </div>

                            <div className='widget-content-right header-user-info ml-3'>
                                <Link
                                    className='btn-shadow p-1 btn-info'
                                    size='sm'
                                    to='/dashboard/signup'
                                    color='info'
                                    id='Tooltip-1'
                                >
                                    <FontAwesomeIcon
                                        className='mr-2 ml-2'
                                        icon={faUpload}
                                    />
                                </Link>
                                <UncontrolledTooltip
                                    placement='bottom'
                                    target={'Tooltip-1'}
                                >
                                    It's pleasure to join us
                                </UncontrolledTooltip>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        return <Fragment>{navbarMenu}</Fragment>;
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(UserBox);
