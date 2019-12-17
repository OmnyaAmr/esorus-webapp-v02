import { Route, Redirect } from 'react-router-dom';
import React, { Suspense, lazy, Fragment } from 'react';
import { ToastContainer } from 'react-toastify';
import robots from '../../common/robots.txt';
//HANDLE change dashboards to the common folder
const Dashboards = lazy(() => import('../../common/Dashboards'));
//common/robots.txt

const AppMain = () => {
	return (
		<Fragment>
			<Suspense
				fallback={
					<div className="loader-container">
						<div className="loader-container-inner">
							<h6 className="mt-3">
								Please wait while your Dashboard is loading
							</h6>
						</div>
					</div>
				}
			>
				<Route path="/dashboard" component={Dashboards} />
			</Suspense>

			<Route
				exact
				path="/"
				render={() => <Redirect to="/dashboard/home" />}
			/>
			<Route exact path="/robots" component={robots} />

			<ToastContainer />
		</Fragment>
	);
};

export default AppMain;
