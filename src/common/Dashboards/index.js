import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';

// DASHBOARDS
import PrivateRoute from '../PrivateRoute';
import Login from '../Login';
import SignUp from '../SignUp';

//HOME
import Home from '../Home';
//params ALL THE APP ROUTES WILL BE HERE

// Layout

import AppHeader from '../../Layout/AppHeader/';
import AppSidebar from '../../Layout/AppSidebar/';
import AppFooter from '../../Layout/AppFooter/';

const Dashboards = ({ match }) => (
    <Fragment>
        <AppHeader />
        <div className='app-main'>
            <AppSidebar />
            <div className='app-main__outer'>
                <Route path={`${match.url}/home`} component={Home} />
                <div className='app-main__inner'>
                    <Route path={`${match.url}/login`} component={Login} />
                    <Route path={`${match.url}/signup`} component={SignUp} />
                </div>
                <AppFooter />
            </div>
        </div>
    </Fragment>
);

export default Dashboards;
