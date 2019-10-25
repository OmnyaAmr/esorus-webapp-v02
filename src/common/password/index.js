import React, { Fragment, Component } from 'react';

import { Route } from 'react-router-dom';

//Component
import Reset from './handling/Reset';
import Confirm from './handling/Confirm';

// Layout
import AppHeader from '../../Layout/AppHeader';
import AppSidebar from '../../Layout/AppSidebar';
import AppFooter from '../../Layout/AppFooter';

const ForgetPassword = ({ match }) => {
    console.log('MATCH: ', match);
    return (
        <Fragment>
            <AppHeader />
            <div className='app-main'>
                <AppSidebar />
                <div className='app-main__outer'>
                    <div className='app-main__inner'>
                        <Route
                            exact
                            path={`${match.url}/reset`}
                            component={Reset}
                        />
                        <Route
                            exact
                            path={`${match.url}/confirm`}
                            component={Confirm}
                        />
                    </div>
                    <AppFooter />
                </div>
            </div>
        </Fragment>
    );
};

export default ForgetPassword;
