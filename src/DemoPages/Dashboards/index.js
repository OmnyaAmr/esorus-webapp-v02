import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';

// DASHBOARDS
import PrivateRoute from '../../common/PrivateRoute';
import Students from '../../common/Students';
import Attendance from '../../common/Attendance';
import Login from '../../common/Login';
import Declined from '../../common/Declined';
import ClassWork from '../../common/ClassWork';
import SignUp from '../../common/SignUp';
import Application from '../../common/Application';
import Identity from '../../common/Identity';
import StudentsData from '../../common/StudentsData';
import YearWork from '../../common/YearWork';
import GroupReport from '../../common/reporting/GroupReport';
import CenterReport from '../../common/reporting/CenterReport';
import ClassReport from '../../common/reporting/ClassReport';
import AdminPanel from '../../common/AdminPanel';

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
                <div className='app-main__inner'>
                    <PrivateRoute
                        exact
                        path={`${match.url}/attendance`}
                        component={Attendance}
                    />
                    <PrivateRoute
                        exact
                        path={`${match.url}/students`}
                        component={Students}
                    />
                    <PrivateRoute
                        exact
                        path={`${match.url}/declined`}
                        component={Declined}
                    />
                    <PrivateRoute
                        exact
                        path={`${match.url}/classwork`}
                        component={ClassWork}
                    />
                    <PrivateRoute
                        exact
                        path={`${match.url}/application`}
                        component={Application}
                    />
                    <PrivateRoute
                        exact
                        path={`${match.url}/identity`}
                        component={Identity}
                    />
                    <PrivateRoute
                        exact
                        path={`${match.url}/student-data`}
                        component={StudentsData}
                    />
                    <PrivateRoute
                        exact
                        path={`${match.url}/yearwork`}
                        component={YearWork}
                    />
                    <PrivateRoute
                        exact
                        path={`${match.url}/reportgroup`}
                        component={GroupReport}
                    />
                    <PrivateRoute
                        exact
                        path={`${match.url}/reportcenter`}
                        component={CenterReport}
                    />
                    <PrivateRoute
                        exact
                        path={`${match.url}/reportclasses`}
                        component={ClassReport}
                    />
                    <PrivateRoute
                        exact
                        path={`${match.url}/adminpanel`}
                        component={AdminPanel}
                    />
                    <Route path={`${match.url}/login`} component={Login} />
                    <Route path={`${match.url}/signup`} component={SignUp} />
                </div>
                <AppFooter />
            </div>
        </div>
    </Fragment>
);

export default Dashboards;
