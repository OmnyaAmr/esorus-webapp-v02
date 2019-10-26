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
                    <div>
                        <h4>
                            FF&E Personal Assistant for intrior designers and
                            Professional Buyers{' '}
                        </h4>
                        <p>
                            single place to find furniture materials, get qoutes
                            and purchase from over a 1000 different qualified
                            suppliers{' '}
                        </p>
                        <input
                            type='button'
                            className='btn-escrus'
                            value='Join Now'
                            onClick={this.onClick}
                        />
                        <Row>
                            <Col className='border'>Smart Sourcing</Col>
                            <Col className='border'>Recommendations</Col>
                            <Col className='border'> Follow-up</Col>
                            <Col className='border'>Best Price</Col>
                        </Row>
                    </div>
                </ReactCSSTransitionGroup>
            </Fragment>
        );
    }
}
export default Buyers;
