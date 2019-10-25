import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Row, Col } from 'reactstrap';
import AnimatedNumber from 'react-animated-number';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            count: false,
            value: 0
        };
        this.onClick = this.onClick.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        document.addEventListener('scroll', this.trackScrolling);
    }

    trackScrolling = () => {
        const wrappedElement = document.getElementById('parallex');
        let isTop = this.isTop(wrappedElement);
        if (isTop) {
            this.setState({ count: true });
            document.removeEventListener('scroll', this.trackScrolling);
        }
    };

    isTop(element) {
        return element.getBoundingClientRect().top <= window.innerHeight;
    }

    formatValue = value => value.toFixed(2);

    onClick(e) {
        e.preventDefault();
        let { email } = this.state;
        this.props.history.push({
            pathname: '/dashboard/signup',
            state: { email: email }
        });
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        let { enableHomeBackground, homeBackground } = this.props;

        return (
            <Fragment>
                <ReactCSSTransitionGroup
                    component='div'
                    transitionName='TabsAnimation'
                    transitionAppear={true}
                    transitionAppearTimeout={1500}
                    transitionEnter={false}
                    transitionLeave={false}
                />
                <div>
                    <PerfectScrollbar>
                        <div
                            className='home-background'
                            style={{
                                backgroundImage: enableHomeBackground
                                    ? 'url(' + homeBackground + ')'
                                    : null,
                                height: '660px'
                            }}
                        >
                            <Row className='slogan-position ml-2'>
                                <Col>
                                    <h1 className='slogan-text'>Interior</h1>
                                    <h1 className='slogan-text'>Sourcing</h1>
                                    <h1 className='slogan-text'>Made Easy</h1>
                                    <div className='d-flex justify-content-center mt-4'>
                                        <input
                                            className='form-control-escrus form-control-lg-escrus ml-1'
                                            onChange={this.onChange}
                                            value={this.state.email}
                                            name='email'
                                        />
                                        <input
                                            type='button'
                                            className='btn btn-lg btn-escrus ml-1'
                                            value='Join Now'
                                            onClick={this.onClick}
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </PerfectScrollbar>
                </div>
                <div className='mt-5 ml-2'>
                    <h1 className='slogan2-text'>
                        We Are <strong>Reinventing</strong>
                    </h1>
                    <h1 className='slogan2-text'>
                        The Interior Sourcing Process !
                    </h1>
                </div>
                <div className='review-background-escrus'>
                    <div className='handsome-background-escrus' id='parallex'>
                        <Row>
                            <Col className='slogan3-text'>
                                <h1>Some</h1>
                                <h1>Interesting Facts</h1>
                            </Col>
                            <Col className='slogan3-text'>
                                <AnimatedNumber
                                    value={1000}
                                    style={{
                                        transition: '0.8s ease-out',
                                        fontSize: 55,
                                        color: 'white',
                                        fontWeight: '500',
                                        transitionProperty:
                                            'background-color, color, opacity'
                                    }}
                                    frameStyle={perc =>
                                        perc === 100
                                            ? {}
                                            : { backgroundColor: 'transparent' }
                                    }
                                    duration={5000}
                                    formatValue={value =>
                                        Number(value).toFixed(0)
                                    }
                                />
                                <h1>Suppliers</h1>
                            </Col>
                            <Col className='slogan3-text'>
                                <AnimatedNumber value={35} duration={50} />
                                <h1>Our Projects</h1>
                            </Col>
                            <Col className='slogan3-text'>
                                <AnimatedNumber value={10} duration={50} />
                                <h1>Years Experience</h1>
                            </Col>
                            <Col className='slogan3-text'>
                                <AnimatedNumber value={55} duration={50} />
                                <h1>Successful Matchmaking</h1>
                            </Col>
                        </Row>
                    </div>

                    <Row>
                        <Col className='text-center'>
                            <h2 className='mb-4'>Our satisfied client says</h2>
                        </Col>
                    </Row>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    enableHomeBackground: state.ThemeOptions.enableHomeBackground,
    homeBackground: state.ThemeOptions.homeBackground
});

export default connect(mapStateToProps)(Home);
