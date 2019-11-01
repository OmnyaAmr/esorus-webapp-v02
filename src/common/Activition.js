import React, { Fragment, Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { confirmEmail } from '../actions/authActions';
import { connect } from 'react-redux';

class Activition extends Component {
    componentDidMount() {
        let { key } = this.props.match.params;
        this.props.confirmEmail(key, this.props.history);
    }
    render() {
        return (
            <Fragment>
                <ReactCSSTransitionGroup
                    component='div'
                    transitionName='TabsAnimation'
                    transitionAppear={true}
                    transitionAppearTimeout={0}
                    transitionEnter={false}
                    transitionLeave={false}
                >
                    <div className='app-main-enhanced'>
                        <div>
                            <h1>Something went wrong !</h1>
                        </div>
                    </div>
                </ReactCSSTransitionGroup>
            </Fragment>
        );
    }
}

export default connect(
    null,
    { confirmEmail }
)(Activition);
