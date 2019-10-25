import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { fetchStudents, attend } from '../../../actions/yearWorkActions';
import isEmpty from '../../../validation/is-empty';

import {
    Row,
    Col,
    Button,
    CardHeader,
    Card,
    CardBody,
    TabContent,
    TabPane
} from 'reactstrap';

import PageTitle from '../../../Layout/AppMain/PageTitle';

import {
    faAngleUp,
    faArrowLeft,
    faDragon
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Attendance extends Component {
    constructor() {
        super();

        this.state = {
            dropdownOpen: false,
            activeTab1: '11',
            classNum: '',
            classDay: '',
            classTime: '',
            fetchedStudents: [],
            activeSearch: false,
            search: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onFetchClick = this.onFetchClick.bind(this);
        this.onAttendClick = this.onAttendClick.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.fetchedStudents) {
            this.setState({ fetchedStudents: nextProps.fetchedStudents });
        }
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    onFetchClick(e) {
        e.preventDefault();
        let { classNum, classDay, classTime } = this.state;
        let classSpecs = {};
        classSpecs.classNum = classNum;
        classSpecs.classDay = classDay;
        classSpecs.classTime = classTime;
        this.props.fetchStudents(classSpecs);
    }
    onAttendClick(id) {
        let { classNum, classDay, classTime } = this.state;
        let classSpecs = {};
        classSpecs.classNum = classNum;
        classSpecs.classDay = classDay;
        classSpecs.classTime = classTime;
        classSpecs.studentId = id;

        this.props.attend(classSpecs);
    }
    render() {
        let rows;
        let { fetchedStudents } = this.state;

        if (fetchedStudents) {
            rows = fetchedStudents
                .filter(student => {
                    return (
                        student.student_id
                            .toString()
                            .indexOf(this.state.search) !== -1 ||
                        student.name.indexOf(this.state.search) !== -1
                    );
                })
                .map(student => {
                    return (
                        <tr
                            key={student.student_id}
                            id={student.student_id}
                            className='text-center'
                        >
                            <td className='identity'>{student.student_id}</td>
                            <td className='identity-small'>{student.name}</td>
                            <td>{student.gender}</td>
                            <td className='identity-phone'>
                                {student.phone_father}
                            </td>
                            <td className='identity-phone'>
                                {student.phone_mother}
                            </td>
                            <td className='identity-phone'>
                                {student.phone_home}
                            </td>
                            <td>
                                <Button
                                    className='mb-2 mr-2'
                                    active
                                    color='success'
                                    onClick={() =>
                                        this.onAttendClick(student.student_id)
                                    }
                                >
                                    حضر
                                </Button>
                            </td>
                        </tr>
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
                            heading='غياب الطلاب'
                            subheading='يجب تحديد التايخ و الوقت للحصة التي يتم تسجيل غياب الطلاب بها'
                            icon='pe-7s-car icon-gradient bg-mean-fruit'
                        />
                        <Row>
                            <Col md='12' lg='8'>
                                <Card className='mb-3'>
                                    <CardHeader className='card-header-tab'>
                                        <div className='card-header-title'>
                                            <i className='header-icon lnr-rocket icon-gradient bg-tempting-azure'>
                                                {' '}
                                            </i>
                                            بدء حصة جديدة
                                        </div>
                                    </CardHeader>
                                    <TabContent
                                        activeTab={this.state.activeTab1}
                                    >
                                        <TabPane tabId='11'>
                                            {/* START GENERATE CLASS */}
                                            <CardBody className='pt-2'>
                                                <Row className='mt-3'>
                                                    <Col md='4'>
                                                        <div className='input-holder'>
                                                            <input
                                                                name='classNum'
                                                                className='form-control-lg form-control text-center mb-3'
                                                                value={
                                                                    this.state
                                                                        .classNum
                                                                }
                                                                onChange={
                                                                    this
                                                                        .onChange
                                                                }
                                                                placeholder='رقم الحصة'
                                                            />
                                                        </div>
                                                    </Col>
                                                    <Col md='4'>
                                                        <div className='input-holder'>
                                                            <input
                                                                name='classDay'
                                                                type='date'
                                                                onChange={
                                                                    this
                                                                        .onChange
                                                                }
                                                                value={
                                                                    this.state
                                                                        .classDay
                                                                }
                                                                className='form-control form-control-lg mb-3 text-center'
                                                                dir='rtl'
                                                            />
                                                        </div>
                                                    </Col>
                                                    <Col md='4'>
                                                        <div className='widget-content'>
                                                            <input
                                                                name='classTime'
                                                                type='time'
                                                                onChange={
                                                                    this
                                                                        .onChange
                                                                }
                                                                value={
                                                                    this.state
                                                                        .classTime
                                                                }
                                                                className='form-control form-control-lg text-center mb-3'
                                                            />
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <div className='divider mt-4' />
                                                <Row>
                                                    <Col md='12'>
                                                        <Button
                                                            block
                                                            className='mb-2 mr-2'
                                                            size='sm'
                                                            color='focus'
                                                            onClick={
                                                                this
                                                                    .onFetchClick
                                                            }
                                                        >
                                                            بدء
                                                        </Button>
                                                    </Col>
                                                </Row>
                                            </CardBody>
                                            {/* END GENERATE CLASS */}
                                            <div className='widget-chart p-0 mb-3'>
                                                <div className='widget-chart-content'>
                                                    <div className='widget-description mt-0 text-warning'>
                                                        <FontAwesomeIcon
                                                            icon={faDragon}
                                                        />
                                                        <span className='pl-1'>
                                                            HERE
                                                        </span>
                                                        <span className='text-muted opacity-8 pl-1'>
                                                            Show number of
                                                            Fetched Students
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </TabPane>
                                    </TabContent>
                                </Card>
                            </Col>
                            {/* REPORTS AREA */}
                            <Col md='6' lg='4'>
                                <Row>
                                    <Col md='6'>
                                        <div className='card mb-3 bg-arielle-smile widget-chart text-white card-border'>
                                            <div className='icon-wrapper rounded-circle'>
                                                <div className='icon-wrapper-bg bg-white opacity-10' />
                                                <i className='lnr-cog icon-gradient bg-arielle-smile' />
                                            </div>
                                            <div className='widget-numbers'>
                                                444
                                            </div>
                                            <div className='widget-subheading'>
                                                عدد الطلاب الحاضرين
                                            </div>
                                            <div className='widget-description text-white'>
                                                <FontAwesomeIcon
                                                    icon={faAngleUp}
                                                />
                                                <span className='pl-1'>
                                                    نسبة الحضور
                                                </span>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md='6'>
                                        <div className='card mb-3 bg-midnight-bloom widget-chart text-white card-border'>
                                            <div className='icon-wrapper rounded'>
                                                <div className='icon-wrapper-bg bg-white opacity-10' />
                                                <i className='lnr-screen icon-gradient bg-warm-flame' />
                                            </div>
                                            <div className='widget-numbers'>
                                                666
                                            </div>
                                            <div className='widget-subheading'>
                                                عدد الطلاب الغائبة
                                            </div>
                                            <div className='widget-description text-white'>
                                                <span className='pr-1'>
                                                    نسبة الغياب
                                                </span>
                                                <FontAwesomeIcon
                                                    icon={faArrowLeft}
                                                />
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <div className='card mb-3 widget-chart'>
                                    <div className='widget-chart-content'>
                                        <div className='icon-wrapper rounded-circle'>
                                            <div className='icon-wrapper-bg bg-warning' />
                                            <i className='lnr-heart icon-gradient bg-premium-dark'>
                                                {' '}
                                            </i>
                                        </div>
                                        <div className='widget-numbers'>
                                            444
                                        </div>
                                        <div className='widget-subheading'>
                                            عدد الحصص حتى الان
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md='12'>
                                <Card className='main-card mb-3'>
                                    <div className='card-header'>
                                        <div
                                            className={cx('search-wrapper', {
                                                active: this.state.activeSearch
                                            })}
                                        >
                                            <div className='input-holder mb-3 mt-3'>
                                                <input
                                                    type='text'
                                                    name='search'
                                                    className='search-input'
                                                    onChange={this.onChange}
                                                    value={this.state.search}
                                                />
                                                <button
                                                    onClick={() =>
                                                        this.setState({
                                                            activeSearch: !this
                                                                .state
                                                                .activeSearch
                                                        })
                                                    }
                                                    className='search-icon'
                                                >
                                                    <span />
                                                </button>
                                            </div>
                                            <button
                                                onClick={() =>
                                                    this.setState({
                                                        activeSearch: !this
                                                            .state.activeSearch
                                                    })
                                                }
                                                className='close'
                                            />
                                        </div>
                                        <div className='btn-actions-pane-right'>
                                            <h3>الطلاب</h3>
                                        </div>
                                    </div>
                                    <div className='table-responsive'>
                                        <table
                                            className='align-middle mb-0 table table-borderless table-striped table-hover'
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
                                                        النوع
                                                    </th>
                                                    <th className='text-center'>
                                                        الأب
                                                    </th>
                                                    <th className='text-center'>
                                                        الأم
                                                    </th>
                                                    <th className='text-center'>
                                                        البيت
                                                    </th>
                                                    <th className='text-center'>
                                                        حضر
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>{rows}</tbody>
                                        </table>
                                    </div>
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
    errors: state.errors,
    fetchedStudents: state.yearWork.fetchedStudents
});
export default connect(
    mapStateToProps,
    { fetchStudents, attend }
)(Attendance);
