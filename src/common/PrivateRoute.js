import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props =>
                auth.isAuthenticated === true ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/dashboard/login',
                            state: { from: props.location }
                        }}
                    />
                )
            }
        />
    );
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);
//? DESCRIPTION for the private route
// this is a reusable component which take a Componet which we need to protect and ...rest and that mean
// all the rest arguments in the component seperated by WHITESPACE and render them when i need
// we call render and get the props this props contains history, location and match and this is the props
// for any componnent .. i want to put this props to the next component if this user is authenticated
// to insure that there nothing that i lost i'm just a middleware to protect this component and i did
// so i 'as a private route' can't change any data or any props so i take the props from route to another with no
// interact or process in that data
