import React, { Component } from 'react';
import { bubble as Menu } from 'react-burger-menu';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { setEnableMobileMenu } from '../reducers/ThemeOptions';
import Nav from '../Layout/AppNav/VerticalNavWrapper';

class Sidebar extends Component {
    showSettings(event) {
        event.preventDefault();
        console.log('Clicked');
    }

    render() {
        return (
            <div className='left-side app-sidebar'>
                <Menu
                    burgerBarClassName='bm-menu bm-morph-shape'
                    burgerButtonClassName='bm-burger-button'
                    customBurgerIcon={
                        <img
                            src={require('../assets/utils/images/sidebar/menu.svg')}
                        />
                    }
                >
                    <Nav />
                </Menu>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    enableClosedSidebar: state.ThemeOptions.enableClosedSidebar,
    enableBackgroundImage: state.ThemeOptions.enableBackgroundImage,
    enableSidebarShadow: state.ThemeOptions.enableSidebarShadow,
    enableMobileMenu: state.ThemeOptions.enableMobileMenu,
    backgroundColor: state.ThemeOptions.backgroundColor,
    backgroundImage: state.ThemeOptions.backgroundImage,
    backgroundImageOpacity: state.ThemeOptions.backgroundImageOpacity
});

const mapDispatchToProps = dispatch => ({
    setEnableMobileMenu: enable => dispatch(setEnableMobileMenu(enable))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sidebar);
