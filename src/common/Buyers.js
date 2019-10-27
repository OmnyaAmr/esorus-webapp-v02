import React, { Component, Fragment } from 'react';
import { Row, Col } from 'reactstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
class Buyers extends Component {
    constructor() {
        super();
        this.state = { email: '' };
        this.onClick = this.onClick.bind(this);
    }
    onClick(e) {
        e.preventDefault();
        this.props.history.push('/dashboard/request');
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
                        <h2>
                            FF&E Personal Assistant for intrior designers and{' '}
                            <br />
                            Professional Buyers{' '}
                        </h2>
                        <p className='supplier-text'>
                            single place to find furniture materials,
                            <br /> get qoutes and purchase from over a 1000{' '}
                            <br /> different qualified suppliers{' '}
                        </p>
                        <input
                            type='button'
                            className='btn-escrus mt-2'
                            value='Join Now'
                            onClick={this.onClick}
                        />
                        <Row className='pt-4 pb-5'>
                            <Col className='supplier-text'>Smart Sourcing</Col>
                            <Col className='supplier-text'>Recommendations</Col>
                            <Col className='supplier-text'> Follow-up</Col>
                            <Col className='supplier-text'>Best Price</Col>
                        </Row>
                    </div>
                </ReactCSSTransitionGroup>
            </Fragment>
        );
    }
}
export default Buyers;
