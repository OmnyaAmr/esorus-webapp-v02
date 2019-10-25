import React, { Component, Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import classnames from 'classnames';

import Spinner from '../Spinner';

import {
    Row,
    Col,
    Button,
    CardHeader,
    Card,
    CardBody,
    Progress,
    TabContent,
    TabPane,
    Input
} from 'reactstrap';

import PageTitle from '../PageTitle';

import { connect } from 'react-redux';
import { getAllGroups } from '../../actions/dashboardActions';
import {
    generateClassReport,
    getClassesInfo
} from '../../actions/yearWorkActions';

class ClassReport extends Component {
    constructor() {
        super();
        this.state = {
            groups: [],
            classes: [],
            class_no: '',
            day: '',
            time: '',
            group_id: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onClick(e) {
        e.preventDefault();
        let reportSpecs = {};
        reportSpecs.class_no = this.state.class_no;
        reportSpecs.day = this.state.day;
        reportSpecs.time = this.state.time;
        reportSpecs.defaultGroup = this.state.group_id;

        this.props.generateClassReport(reportSpecs);
    }

    componentWillMount() {
        this.props.getAllGroups();
        this.props.getClassesInfo();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.classes) {
            this.setState({ classes: Array.from(nextProps.classes) });
        }
        if (nextProps.groups) {
            this.setState({ groups: Array.from(nextProps.groups) });
        }
    }

    render() {
        //HANDLE loading
        let { loading } = this.props.loading;
        if (loading) return <Spinner />;

        //HANDLE groups
        let { groups } = this.state;
        let groupsOptions;
        if (groups) {
            groupsOptions = groups.map(group => {
                return (
                    <option key={group.group_id} value={group.group_id}>
                        {group.Group}
                    </option>
                );
            });
        }
        //HANDLE classes
        let { classes } = this.state;
        let classesOptions;
        if (classes) {
            classesOptions = classes.map(clas => {
                return (
                    <option key={clas} value={clas}>
                        {clas}
                    </option>
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
                            heading='تقرير الحصص'
                            subheading='يتم طلب تقارير الحصة عن طريق تحديد المجموعة و تاريخ و وقت الحصة و رقمها '
                            icon='pe-7s-note2 icon-gradient bg-mean-fruit'
                        />
                        <Row>
                            <Col md={2}></Col>
                            <Col md={8}>
                                <Card>
                                    <CardHeader>
                                        <div className='card-header-title'>
                                            <i className='header-icon lnr-rocket icon-gradient bg-tempting-azure'>
                                                {' '}
                                            </i>
                                            معلومات الحصة
                                        </div>
                                    </CardHeader>
                                    <CardBody className='pt-2'>
                                        <div className='input-holder'>
                                            <select
                                                name='class_no'
                                                onChange={this.onChange}
                                                value={this.state.class_no}
                                                className='custom-select-sm custom-select mb-1'
                                                dir='rtl'
                                            >
                                                <option value=''>
                                                    رقم الحصة
                                                </option>
                                                {classesOptions}
                                            </select>
                                        </div>

                                        <div className='input-holder'>
                                            <select
                                                name='group_id'
                                                value={this.state.group_id}
                                                onChange={this.onChange}
                                                className='custom-select-sm custom-select mb-1 text-center'
                                                dir='rtl'
                                            >
                                                <option>اسم المجموعة</option>
                                                {groupsOptions}
                                            </select>
                                        </div>

                                        <div className='input-holder'>
                                            <input
                                                name='day'
                                                type='date'
                                                onChange={this.onChange}
                                                value={this.state.day}
                                                className='form-control form-control-sm mb-1 text-center'
                                                dir='rtl'
                                            />
                                        </div>

                                        <div className='widget-content'>
                                            <input
                                                name='time'
                                                type='time'
                                                onChange={this.onChange}
                                                value={this.state.time}
                                                className='form-control form-control-sm text-center mb-1'
                                            />
                                        </div>

                                        <Button
                                            block
                                            className='mb-2 mr-2'
                                            size='sm'
                                            color='focus'
                                            onClick={this.onClick}
                                        >
                                            طلب تقرير
                                        </Button>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={2}></Col>
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
    classes: state.yearWork.classesInfo.classes
});

export default connect(
    mapStateToProps,
    { generateClassReport, getAllGroups, getClassesInfo }
)(ClassReport);

{
    /*
     */
}
