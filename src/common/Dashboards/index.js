import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';

// DASHBOARDS
import PrivateRoute from '../PrivateRoute';
import Login from '../Login';
import SignUp from '../SignUp';

//HOME
import Home from '../Home';
import Suppliers from '../Suppliers';
import Buyers from '../Buyers';
import Request from '../Request';
import AboutUs from '../AboutUs';
import Activition from '../Activition';
import Confirmation from '../Confirmation';

//params ALL THE APP ROUTES WILL BE HERE

// Layout

import AppHeader from '../../Layout/AppHeader/';
import AppFooter from '../../Layout/AppFooter/';
import AppSidebar from '../../Layout/AppSidebar';

const Dashboards = ({ match }) => (
    <Fragment>
        <AppHeader />
        <AppSidebar />

        <Route path={`${match.url}/home`} component={Home} />

        <Route path={`${match.url}/login`} component={Login} />
        <Route path={`${match.url}/signup`} component={SignUp} />
        <Route path={`${match.url}/suppliers`} component={Suppliers} />
        <Route path={`${match.url}/buyers`} component={Buyers} />
        <Route path={`${match.url}/confirm`} component={Confirmation} />
        <PrivateRoute path={`${match.url}/request`} component={Request} />
        <Route path={`${match.url}/activated/:key`} component={Activition} />

        <Route path={`${match.url}/about`} component={AboutUs} />

        <AppFooter />
    </Fragment>
);

export default Dashboards;
