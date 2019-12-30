import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Button, UncontrolledTooltip } from 'reactstrap';

import unknownUser from '../../../assets/utils/images/avatars/user.svg';

import { connect } from 'react-redux';
import { logoutUser } from '../../../actions/authActions';

class UserBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			active: false,
		};
		this.onLogoutClick = this.onLogoutClick.bind(this);
		this.onClick = this.onClick.bind(this);
	}

	onLogoutClick(e) {
		e.preventDefault();
		this.props.logoutUser();
	}

	onClick(e) {
		e.preventDefault();
	}

	render() {
		let { isAuthenticated } = this.props.auth;
		let avatar;

		avatar = unknownUser;

		let navbarMenu;

		if (isAuthenticated) {
			navbarMenu = (
				<div className="header-btn-lg pr-0">
					<div className="widget-content p-0">
						<div className="widget-content-wrapper">
							<div className="widget-content-left">
								<div className="d-flex justify-content-center align-items-center mt-2">
									<Link
										className="btn custom-signin-btn mt-2 ml-4"
										to="/dashboard/buyers"
									>
										<button
											className="btn-navBar"
											id="professional-buyers"
										>
											Interior Designers
										</button>
									</Link>
									<Link
										className="btn custom-signin-btn mt-2 ml-4 mr-4"
										to="/dashboard/suppliers"
									>
										<button
											className="btn-navBar"
											id="suppliers"
										>
											Suppliers
										</button>
									</Link>
								</div>
							</div>

							<div className="widget-content-right header-user-info ml-3">
								<Button
									className="btn-escrus p-1"
									size="sm"
									onClick={this.onLogoutClick}
									color="info"
									id="sign-in"
									style={{ width: '90px', height: '40px' }}
								>
									Log out
								</Button>
								<UncontrolledTooltip
									placement="bottom"
									target={'sign-in'}
								>
									Click Here To Logout
								</UncontrolledTooltip>
							</div>
						</div>
					</div>
				</div>
			);
		} else {
			navbarMenu = (
				<div className="header-btn-lg pr-0">
					<div className="widget-content p-0">
						<div className="widget-content-wrapper">
							<div className="widget-content-left">
								<div className="d-flex justify-content-center align-items-center mt-2">
									<Link
										className="btn custom-signin-btn mt-2 ml-4"
										to="/dashboard/buyers"
									>
										<button
											className="btn-navBar"
											id="professional-buyers"
										>
											Interior Designers
										</button>
									</Link>
									<Link
										className="btn custom-signin-btn mt-2 ml-4 mr-4"
										to="/dashboard/suppliers"
									>
										<button
											className="btn-navBar"
											id="suppliers"
										>
											Suppliers
										</button>
									</Link>

									<Link
										className="btn ml-1 custom-signin-btn mt-2"
										to="/dashboard/login"
									>
										<button
											className="btn-navBar"
											id="sign-in"
										>
											<img
												src={unknownUser}
												width="20"
												height="20"
												className="mb-2"
												id="user-icon"
												alt="unknown"
											/>
											Sign In
										</button>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			);
		}

		return <Fragment>{navbarMenu}</Fragment>;
	}
}

const mapStateToProps = state => ({
	auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(UserBox);
