import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import Hamburger from 'react-hamburgers';

import cx from 'classnames';

import unknownUser from '../../assets/utils/images/avatars/user-inverse.svg';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../actions/authActions';

import {
	setEnableMobileMenu,
	setEnableMobileMenuSmall,
} from '../../reducers/ThemeOptions';

class AppMobileMenu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			active: false,
			mobile: false,
			activeSecondaryMenuMobile: false,
		};
		this.onClick = this.onClick.bind(this);
	}

	onClick(e) {
		e.preventDefault();
		console.log(this.props);
		this.props.logoutUser();
	}

	toggleMobileSidebar = () => {
		let { enableMobileMenu, setEnableMobileMenu } = this.props;
		setEnableMobileMenu(!enableMobileMenu);
	};

	toggleMobileSmall = () => {
		let { enableMobileMenuSmall, setEnableMobileMenuSmall } = this.props;
		setEnableMobileMenuSmall(!enableMobileMenuSmall);
	};

	state = {
		openLeft: false,
		openRight: false,
		relativeWidth: false,
		width: 280,
		noTouchOpen: false,
		noTouchClose: false,
	};

	render() {
		let { enableMobileMenu } = this.props;
		let { isAuthenticated } = this.props.auth;
		let content;
		if (isAuthenticated) {
			content = (
				<span onClick={this.onClick}>
					<Button
						size="sm"
						className={cx('btn-icon btn-icon-only', {
							active: this.state.activeSecondaryMenuMobile,
						})}
						color="primary"
					>
						<img
							src={unknownUser}
							width="20"
							height="20"
							className="mb-2"
							alt="unknown"
						/>
					</Button>
				</span>
			);
		} else {
			content = (
				<span>
					<Link to="/dashboard/login">
						<Button
							size="sm"
							className={cx('btn-icon btn-icon-only', {
								active: this.state.activeSecondaryMenuMobile,
							})}
							color="primary"
						>
							<img
								src={unknownUser}
								width="20"
								height="20"
								className="mb-2"
								alt="unknown"
							/>
						</Button>
					</Link>
				</span>
			);
		}

		return (
			<Fragment>
				<div className="app-header__mobile-menu">
					<div onClick={this.toggleMobileSidebar}>
						<Hamburger
							active={enableMobileMenu}
							type="elastic"
							onClick={() => {
								this.setState({
									activeMobile: !this.state.activeMobile,
								});
							}}
						/>
					</div>
				</div>
				<div className="app-header__menu">{content}</div>
			</Fragment>
		);
	}
}

const mapStateToProps = state => ({
	closedSmallerSidebar: state.ThemeOptions.closedSmallerSidebar,
	enableMobileMenu: state.ThemeOptions.enableMobileMenu,
	enableMobileMenuSmall: state.ThemeOptions.enableMobileMenuSmall,
	auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
	setEnableMobileMenu: enable => dispatch(setEnableMobileMenu(enable)),
	setEnableMobileMenuSmall: enable =>
		dispatch(setEnableMobileMenuSmall(enable)),
	logoutUser: () => dispatch(logoutUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppMobileMenu);
