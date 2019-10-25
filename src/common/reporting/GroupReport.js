import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';
import {
    getGroupStudents,
    getAllGroups,
    flushGroupStudents
} from '../../actions/dashboardActions';
import { generateGroupReport } from '../../actions/yearWorkActions';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Row, Col, Card, ListGroup, ListGroupItem, Table } from 'reactstrap';
import PageTitle from '../PageTitle';
import Spinner from '../Spinner';

class GroupReport extends Component {
    constructor() {
        super();
        this.state = {
            groups: [],
            groupStudents: [],
            group_id: ''
        };
        this.onClick = this.onClick.bind(this);
        this.onDemandReportClick = this.onDemandReportClick.bind(this);
    }
    componentWillMount() {
        this.props.getAllGroups();
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.groups) {
            this.setState({ groups: Array.from(nextProps.groups) });
        }
        if (nextProps.groupStudents) {
            this.setState({
                groupStudents: Array.from(nextProps.groupStudents)
            });
        }
    }

    componentWillUnmount() {
        this.props.flushGroupStudents();
    }

    onClick(e) {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
        this.props.getGroupStudents(e.target.value);
    }
    onDemandReportClick(e) {
        e.preventDefault();
        let { group_id, groupStudents } = this.state;
        if (group_id && groupStudents.length > 0) {
            this.props.generateGroupReport(group_id);
        }
    }
    render() {
        //HANDLE loading
        let { loading } = this.props.loading;
        if (loading) return <Spinner />;

        //HANDLE groupStudents
        let { groupStudents } = this.state;
        let groupStudentsRows;
        if (groupStudents) {
            groupStudentsRows = groupStudents.map(student => {
                return (
                    <tr
                        key={student.student_id}
                        className='text-center align-content-center'
                    >
                        <td>{student.student_id}</td>
                        <td>{student.name}</td>
                        <td>{student.phone_personal}</td>
                        <td>{student.phone_home}</td>
                        <td>{student.phone_father}</td>
                        <td>{student.phone_mother}</td>
                        <td>{student.job_father}</td>
                    </tr>
                );
            });
        }

        //HANDLE groups
        let { groups } = this.state;
        let groupsOptions;
        if (groups) {
            groupsOptions = groups.map(group => {
                return (
                    <ListGroupItem
                        onClick={this.onClick}
                        name='group_id'
                        value={group.group_id}
                        tag='button'
                        action
                        key={group.group_id}
                        active={this.state.group_id == group.group_id}
                    >
                        {group.Group}
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
                            heading='بيانات المجموعات'
                            subheading='يتم طلب تقرير عن بيانات المجموعات والطلاب المسجلة فيها'
                            icon='pe-7s-note2 icon-gradient bg-mean-fruit'
                        />
                        <Row>
                            <Col md='2'>
                                <div>
                                    <ListGroup>{groupsOptions}</ListGroup>
                                </div>
                            </Col>
                            <Col md='10'>
                                <Card className='main-card mb-3'>
                                    <div className='card-header'>
                                        <div className='active'>
                                            <div className='input-holder mb-3 mt-3'>
                                                <input
                                                    type='button'
                                                    name='report'
                                                    className='search-input'
                                                    onClick={
                                                        this.onDemandReportClick
                                                    }
                                                    value='طلب تقرير'
                                                />
                                            </div>
                                        </div>
                                        <div className='btn-actions-pane-right'>
                                            <p className='text-info'>
                                                بيانات المجموعات
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
                                                            الكود
                                                        </th>
                                                        <th className='text-center'>
                                                            الاسم
                                                        </th>
                                                        <th className='text-center'>
                                                            الطالب
                                                        </th>
                                                        <th className='text-center'>
                                                            المنزل
                                                        </th>
                                                        <th className='text-center'>
                                                            الاب
                                                        </th>
                                                        <th className='text-center'>
                                                            الام
                                                        </th>
                                                        <th className='text-center'>
                                                            وظيفة الاب
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {groupStudentsRows}
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
    groups: state.pool.groups,
    groupStudents: state.pool.groupStudents
});

export default connect(
    mapStateToProps,
    { getGroupStudents, getAllGroups, generateGroupReport, flushGroupStudents }
)(GroupReport);
