import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Row, Col, Container, Card } from 'reactstrap';
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
        this.urlListener();
        document.addEventListener('scroll', this.trackScrolling);
    }
    urlListener() {
        this.unlisten = this.props.history.listen(location => {
            const myId = window.location.hash,
                url = myId.split('#');
            const section = document.getElementById(url[2]);
            if (section) {
                section.scrollIntoView();
                this.props.history.push('#/dashboard/home');
            }
        });
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
        let { isAuthenticated } = this.props.auth;

        let content;

        if (!isAuthenticated) {
            if (enableHomeBackground) {
                content = (
                    <div className='join-now mt-4'>
                        <input
                            className='form-control-escrus form-control-lg-escrus ml-1'
                            onChange={this.onChange}
                            value={this.state.email}
                            placeholder='Enter your email here'
                            name='email'
                        />
                        <input
                            type='button'
                            className='btn-escrus ml-1'
                            value='Get Started'
                            onClick={this.onClick}
                        />
                    </div>
                );
            } else {
                content = (
                    <div>
                        <div className='d-flex justify-content-center mt-4'>
                            <input
                                className='form-control-escrus form-control-lg-escrus ml-1'
                                onChange={this.onChange}
                                value={this.state.email}
                                placeholder='Enter your email here'
                                name='email'
                            />
                        </div>
                        <div className='d-flex justify-content-center mt-4'>
                            <input
                                type='button'
                                className='btn-escrus ml-1'
                                value='Get Started'
                                onClick={this.onClick}
                            />
                        </div>
                    </div>
                );
            }
        }

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
                            {!isAuthenticated ? (
                                <Row className='slogan-position'>
                                    <Col>
                                        <h2 className='slogan-text'>
                                            Interior Sourcing
                                        </h2>
                                        <h2 className='slogan-text'>
                                            Made Easy
                                        </h2>
                                        <p className='home-desc-text'>
                                            We act as your FF&E Personal Assistant and we help
                                            you find furniture, materials, get qoutes and purchase
                                            from over a 1000 different qualified suppliers.
                                            </p>
                                        {content}
                                    </Col>
                                </Row>
                            ) : (
                                    <Row className='slogan-position'>
                                        <Col>
                                            <h2 className='slogan-text'>
                                                Interior Sourcing
                                        </h2>
                                            <h2 className='slogan-text'>
                                                Made Easy
                                        </h2>
                                            <p className='home-desc-text'>
                                                We act as your FF&E Personal Assistant and we help
                                                you find furniture, materials, get qoutes and purchase
                                                from over a 1000 different qualified suppliers.
                                            </p>

                                        </Col>
                                    </Row>
                                )}
                        </div>
                    </PerfectScrollbar>
                </div>
                <div className='slogan2-position'>
                    <h1 className='slogan2-text ml-5'>
                        We are <strong>automating</strong>
                    </h1>
                    <h1 className='slogan2-text ml-5'>
                        the interior sourcing process!
                    </h1>
                </div>
                <div className='review-background-escrus' id='aboutUs'>
                    <div className='handsome-background-escrus ' id='parallex'>
                        <div className='align-self-center pt-lg-5'>
                            {this.state.count && (
                                <Container>
                                    <Row className='home-counters-row' id='about'>
                                        <Col>
                                            <h1 className='slogan5-text'>
                                                SOME
                                            </h1>
                                            <h1 className='slogan3-text'>
                                                Interesting Facts
                                            </h1>
                                        </Col>
                                        <Row className='counters-mobile'>
                                            <Col className='slogan7-text'>
                                                <AnimatedNumber
                                                    value={1000}
                                                    style={{
                                                        transition:
                                                            '0.8s ease-out',
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
                                                <h4 className='slogan6-text'>
                                                    Suppliers
                                                </h4>
                                            </Col>
                                            <Col
                                                className='slogan7-text'
                                                id='left-counters-mobile'
                                            >
                                                <AnimatedNumber
                                                    value={35}
                                                    style={{
                                                        transition:
                                                            '0.8s ease-out',

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
                                                <h4 className='slogan6-text'>
                                                    Projects
                                                </h4>
                                            </Col>
                                            <Col className='slogan7-text'>
                                                <AnimatedNumber
                                                    value={10}
                                                    style={{
                                                        transition:
                                                            '0.8s ease-out',

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
                                                <h4 className='slogan6-text'>
                                                    Years Experience
                                                </h4>
                                            </Col>
                                            <Col
                                                className='slogan7-text'
                                                id='left-counters-mobile'
                                                style={{ paddingRight: '0' }}
                                            >
                                                <AnimatedNumber
                                                    value={55}
                                                    style={{
                                                        transition:
                                                            '0.8s ease-out',

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
                                                <h4 className='slogan6-text'>
                                                    Successful Matchmaking
                                                </h4>
                                            </Col>
                                        </Row>
                                    </Row>
                                </Container>
                            )}
                        </div>
                    </div>

                    <Container>
                        <Row className='pt-lg-4'>
                            <Col className='text-center' md={12}>
                                <h2 className='mb-4 slogan8-text'>
                                    Our satisfied client says
                                </h2>
                            </Col>
                        </Row>
                        <div className='mb-lg-5 pb-lg-5'>
                            <Row>
                                <Col md={12}>
                                    <div className='item'>
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
                                                <p className='name'>
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
    homeBackground: state.ThemeOptions.homeBackground,
    auth: state.auth
});

export default connect(mapStateToProps)(Home);

// We are reinventing the interior sourcing process!
