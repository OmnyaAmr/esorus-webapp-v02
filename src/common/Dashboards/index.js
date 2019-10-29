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
//params ALL THE APP ROUTES WILL BE HERE

// Layout

import AppHeader from '../../Layout/AppHeader/';
import Sidebar from '../Sidebar';
import AppFooter from '../../Layout/AppFooter/';

const Dashboards = ({ match }) => (
    <Fragment>
        <AppHeader />
        <div className='left-side'>
            <Sidebar />
        </div>
        <Route path={`${match.url}/home`} component={Home} />
        <Route path={`${match.url}/login`} component={Login} />
        <Route path={`${match.url}/signup`} component={SignUp} />
        <Route path={`${match.url}/suppliers`} component={Suppliers} />
        <Route path={`${match.url}/buyers`} component={Buyers} />
        <Route path={`${match.url}/request`} component={Request} />
        <Route path={`${match.url}/about`} component={AboutUs} />
        <Route path={`${match.url}/activition`} component={Activition} />
        <AppFooter />
    </Fragment>
);

export default Dashboards;

// <div className='app-main'>
//     <div className='app-main__outer'>
//         <div className='app-main__inner'></div>
//     </div>
// </div>
