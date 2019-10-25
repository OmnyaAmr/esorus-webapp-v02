import React, { Fragment, Component } from 'react';

// Layout
import AppHeader from '../Layout/AppHeader';
import AppSidebar from '../Layout/AppSidebar';
import AppFooter from '../Layout/AppFooter';

const ForgetPassword = () => {
    return (
        <Fragment>
            <AppHeader />
            <div className='app-main'>
                <AppSidebar />
                <div className='app-main__outer'>
                    <div className='app-main__inner'>
                        <h1>Forget Password</h1>
                    </div>
                    <AppFooter />
                </div>
            </div>
        </Fragment>
    );
};

export default ForgetPassword;
