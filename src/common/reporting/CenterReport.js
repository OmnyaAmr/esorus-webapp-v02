import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';

import {
    getAllCenters,
    fetchCenterData,
    flushCenterGroups
} from '../../actions/dashboardActions';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Row, Col, Card, ListGroup, ListGroupItem, Table } from 'reactstrap';
import PageTitle from '../PageTitle';
import Spinner from '../Spinner';

class CenterReport extends Component {
    constructor() {
        super();
        this.state = {
            centers: [],
            centerGroups: [],
            center_id: ''
        };
        this.onClick = this.onClick.bind(this);
    }
    componentWillMount() {
        this.props.getAllCenters();
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.centers) {
            this.setState({ centers: Array.from(nextProps.centers) });
        }
        if (nextProps.centerGroups) {
            this.setState({
                centerGroups: Array.from(nextProps.centerGroups)
            });
        }
    }
    componentWillUnmount() {
        this.props.flushCenterGroups();
    }
    onClick(e) {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
        let center = {};
        center.center_id = e.target.value;
        this.props.fetchCenterData(center);
    }

    render() {
        //HANDLE loading
        let { loading } = this.props.loading;
        if (loading) return <Spinner />;

        //HANDLE centerGroups
        let { centerGroups } = this.state;
        let centerGroupsRows;
        if (centerGroups) {
            centerGroupsRows = centerGroups.map(centerGroup => {
                return (
                    <tr
                        key={centerGroup.center_id}
                        className='text-center align-content-center'
                    >
                        <td>{centerGroup.NAME}</td>
                        <td>{centerGroup.date}</td>
                        <td>{centerGroup.time}</td>
                    </tr>
                );
            });
        }

        //HANDLE groups
        let { centers } = this.state;
        let centerOptions;
        if (centers) {
            centerOptions = centers.map(center => {
                return (
                    <ListGroupItem
                        onClick={this.onClick}
                        name='center_id'
                        value={center.center_id}
                        tag='button'
                        action
                        key={center.center_id}
                        active={this.state.center_id == center.center_id}
                    >
                        {center.Center}
                    </ListGroupItem>
                );
            });
        }

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
                        <PageTitle
                            heading='بيانات السناتر'
                            subheading='يتم طلب تقرير عن بيانات الطلاب داخل سنتر'
                            icon='pe-7s-note2 icon-gradient bg-mean-fruit'
                        />
                        <Row>
                            <Col md='2'>
                                <div>
                                    <ListGroup>{centerOptions}</ListGroup>
                                </div>
                            </Col>
                            <Col md='10'>
                                <Card className='main-card mb-3'>
                                    <div className='card-header'>
                                        <div className='btn-actions-pane-right'>
                                            <p className='text-info'>
                                                بيانات السناتر
                                            </p>
                                        </div>
                                    </div>
                                    <ReactCSSTransitionGroup
                                        component='div'
                                        transitionName='TableAnimation'
                                        transitionAppear={true}
                                        transitionAppearTimeout={0}
                                        transitionEnter={false}
                                        transitionLeave={false}
                                    >
                                        <div className='table-responsive'>
                                            <Table
                                                className='mb-0'
                                                bordered
                                                hover
                                                dark
                                                dir='rtl'
                                            >
                                                <thead>
                                                    <tr>
                                                        <th className='text-center'>
                                                            الاسم
                                                        </th>
                                                        <th className='text-center'>
                                                            اليوم{' '}
                                                        </th>
                                                        <th className='text-center'>
                                                            الوقت
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {centerGroupsRows}
                                                </tbody>
                                            </Table>
                                        </div>
                                    </ReactCSSTransitionGroup>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </ReactCSSTransitionGroup>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    loading: state.loading,
    centers: state.pool.centers,
    centerGroups: state.pool.centerGroups
});

export default connect(
    mapStateToProps,
    { getAllCenters, fetchCenterData, flushCenterGroups }
)(CenterReport);

//? toProps centers: state.pool.centers
//? actions import { getAllCenters } from '../../actions/dashboardActions';
