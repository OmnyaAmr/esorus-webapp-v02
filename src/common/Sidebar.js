import React, { Component } from 'react';
import { bubble as Menu } from 'react-burger-menu';

import Nav from '../Layout/AppNav/VerticalNavWrapper';

class Sidebar extends Component {
    showSettings(event) {
        event.preventDefault();
        console.log('Clicked');
    }

    render() {
        return (
            <div>
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

export default Sidebar;
