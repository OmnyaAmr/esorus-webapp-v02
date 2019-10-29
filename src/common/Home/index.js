import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Row, Col, Container, Card } from 'reactstrap';
import AnimatedNumber from 'react-animated-number';
import Sidebar from '../../Layout/AppSidebar';

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
                                height: '700px'
                            }}
                        >
                            <Row className='slogan-position ml-4'>
                                <Col>
                                    <h2 className='slogan-text'>
                                        Interior Sourcing
                                    </h2>
                                    <h2 className='slogan-text'>Made Easy</h2>
                                    <div className='d-flex justify-content-center mt-4'>
                                        <input
                                            className='form-control-escrus form-control-lg-escrus ml-1'
                                            onChange={this.onChange}
                                            value={this.state.email}
                                            placeholder="Enter your email here"
                                            name='email'
                                            style={{fontSize:"15px",width:"350px"}}
                                        />
                                        <input
                                            type='button'
                                            className='btn-escrus ml-1'
                                            value='Join Now'
                                            onClick={this.onClick}
                                           
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </PerfectScrollbar>
                </div>
                <div className='mt-5 ml-5'>
                    <h1 className='slogan2-text ml-5'>
                        We are <strong>reinventing</strong>
                    </h1>
                    <h1 className='slogan2-text ml-5'>
                        the interior sourcing process!
                    </h1>
                </div>
                <div className='review-background-escrus'  id='about'>
                    <div className='handsome-background-escrus ' id='parallex'>
                        <div className='align-self-center pt-lg-5'>
                            {this.state.count && (
                                <Container>
                                    <Row>
                                        <Col >
                                            <h1 className='slogan5-text'>Some</h1>
                                            <h1 className='slogan3-text'>Interesting Facts</h1>
                                        </Col>
                                        <Col className='slogan3-text'>
                                            <AnimatedNumber
                                                value={1000}
                                                style={{
                                                    transition: '0.8s ease-out',
                                                    fontSize: '35px',
                                                    color: 'white',
                                                    fontWeight: '100',
                                                    transitionProperty:
                                                        'background-color, color, opacity'
                                                }}
                                                frameStyle={perc =>
                                                    perc === 100
                                                        ? {}
                                                        : {
                                                              backgroundColor:
                                                                  'transparent'
                                                          }
                                                }
                                                duration={5000}
                                                formatValue={value =>
                                                    Number(value).toFixed(0)
                                                }
                                            />
                                            <h4 className='slogan6-text'>Suppliers</h4>
                                        </Col>
                                        <Col className='slogan3-text'>
                                            <AnimatedNumber
                                                value={35}
                                                style={{
                                                    transition: '0.8s ease-out',
                                                    fontSize: '35px',
                                                    color: 'white',
                                                    fontWeight: '100',
                                                    transitionProperty:
                                                        'background-color, color, opacity'
                                                }}
                                                frameStyle={perc =>
                                                    perc === 100
                                                        ? {}
                                                        : {
                                                              backgroundColor:
                                                                  'transparent'
                                                          }
                                                }
                                                duration={5000}
                                                formatValue={value =>
                                                    Number(value).toFixed(0)
                                                }
                                            />
                                            <h4 className='slogan6-text'>Our Projects</h4>
                                        </Col>
                                        <Col className='slogan3-text'>
                                            <AnimatedNumber
                                                value={10}
                                                style={{
                                                    transition: '0.8s ease-out',
                                                    fontSize: '35px',
                                                    color: 'white',
                                                    fontWeight: '100',
                                                    transitionProperty:
                                                        'background-color, color, opacity'
                                                }}
                                                frameStyle={perc =>
                                                    perc === 100
                                                        ? {}
                                                        : {
                                                              backgroundColor:
                                                                  'transparent'
                                                          }
                                                }
                                                duration={5000}
                                                formatValue={value =>
                                                    Number(value).toFixed(0)
                                                }
                                            />
                                            <h4 className='slogan6-text'>Years Experience</h4>
                                        </Col>
                                        <Col className='slogan3-text'>
                                            <AnimatedNumber
                                                value={55}
                                                style={{
                                                    transition: '0.8s ease-out',
                                                    fontSize: '35px',
                                                    color: 'white',
                                                    fontWeight: '100',
                                                    transitionProperty:
                                                        'background-color, color, opacity'
                                                }}
                                                frameStyle={perc =>
                                                    perc === 100
                                                        ? {}
                                                        : {
                                                              backgroundColor:
                                                                  'transparent'
                                                          }
                                                }
                                                duration={5000}
                                                formatValue={value =>
                                                    Number(value).toFixed(0)
                                                }
                                            />
                                            <h4 className='slogan6-text'>Successful Matchmaking</h4>
                                        </Col>
                                    </Row>
                                </Container>
                            )}
                        </div>
                    </div>

                    <Container >
                        <Row className='pt-lg-4'>
                            <Col className='text-center' md={12}>
                                <h2 className='mb-4 slogan-text'>
                                    Our satisfied client says
                                </h2>
                            </Col>
                        </Row>
                        <div className='mb-lg-5 pb-lg-5' >
                            <Row>
                                <Col md={12}>
                                    <div className='item' >
                                        <div className='testimony-wrap p-4 pb-5 text-center'>
                                            <img
                                                className='user-img mb-5'
                                                src={require('../../assets/utils/images/person_1.jpeg')}
                                            ></img>
                                            <div className='text'>
                                                <p className='mb-5'>
                                                    We have been working with
                                                    ESORUS for a few months now
                                                    and growing from strength to
                                                    strength. Their team of
                                                    designers and coordinators
                                                    on site form an essential
                                                    part of the product we
                                                    deliver to clients. We found
                                                    that ESORUS is a very
                                                    experienced team and they
                                                    have proved resourceful, are
                                                    accomplished and very
                                                    competent at every step of
                                                    the process. The quality of
                                                    ESORUS FF&E’s team reflects
                                                    very positively on the
                                                    quality of our brand and we
                                                    are looking forward to
                                                    working with them on many
                                                    more projects in the future.
                                                </p>
                                                <p className='name slogan-text' >
                                                    NORA EL FAKHARANY
                                                </p>
                                                <span className='position'>
                                                    ENCORE INTERIOR DESIGN &
                                                    CONSTRUCTION
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
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

// We are reinventing the interior sourcing process!
