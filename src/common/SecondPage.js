import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import AnimatedNumber from 'react-animated-number';


class SecondPage extends React.Component{
constructor(props){
    super(props);
    this.state={
        startCounting:false

    }
}
isTop(el) {
    return el.getBoundingClientRect().top <= window.innerHeight;
}

componentDidMount() {
    document.addEventListener('scroll', this.trackScrolling);
}

trackScrolling = () => {
    const wrappedElement = document.getElementsByClassName('parallax');
    if (this.isTop(wrappedElement[0])) {
        this.setState({startCounting:true})
        document.removeEventListener('scroll', this.trackScrolling);
    }
}
render(){

    return(
    <div >
        <Container style={{paddingTop:"10%"}}>
            <Row>
                <Col >
                    <h2 className="slogan" id="secondPageText">We are reinventing the </h2>
                </Col>
            </Row>
            <Row>
                <Col >
                    <h2 className="slogan" id="secondPageText">Interior sourcing process!</h2>
                </Col>
            </Row>
        </Container>
        <div className="parallax">
            {this.state.startCounting&&
            <Container >
                <Row>
                    <Col  >
                        <span className="midText">Some</span>
                        <h2 className="midText">Interesting Facts</h2>
                    
                    </Col>
                    <Col  >
                        <Row>
                            <Col  >
                    <AnimatedNumber 
                            component="text" 
                            value={1000}
                            style={{
                                transition: '0.8s ease-out',
                                fontSize: 55,
                                color:"white",
                                fontWeight:"500",
                                transitionProperty:
                                    'background-color, color, opacity'
                            }}
                            frameStyle={perc => (
                                perc === 100 ? {} : {backgroundColor: 'transparent'}
                            )}
                            duration={5000}
                            formatValue={value => Number(value).toFixed(0)}
                        />
                        </Col>
                        </Row>
                        <Row>
                            <Col  >
                        <span style={{paddingLeft:"30px"}} className="midText"> Suppliers</span>
                        </Col>
                        </Row>
                    </Col>
                    <Col  >
                        <Row>
                            <Col  >
                    <AnimatedNumber 
                            component="text" 
                            value={35}
                            style={{
                                transition: '0.8s ease-out',
                                fontSize: 48,
                                width:"100%",
                                color:"white",
                                fontWeight:"500",
                                transitionProperty:
                                    'background-color, color, opacity'
                            }}
                            frameStyle={perc => (
                                perc === 100 ? {} : {backgroundColor: 'transparent'}
                            )}
                            duration={5000}
                            formatValue={value => Number(value).toFixed(0)}
                        />
                        </Col>
                        </Row>
                        <Row>
                            <Col  >
                        <span className="midText">Projects</span>
                        </Col>
                        </Row>
                    </Col> 
                    <Col  >
                        <Row>
                            <Col  >
                    <AnimatedNumber 
                            component="text" 
                            value={10}
                            style={{
                                transition: '0.8s ease-out',
                                fontSize: 48,
                                width:"100%",
                                color:"white",
                                fontWeight:"500",
                                transitionProperty:
                                    'background-color, color, opacity'
                            }}
                            frameStyle={perc => (
                                perc === 100 ? {} : {backgroundColor: 'transparent'}
                            )}
                            duration={5000}
                            formatValue={value => Number(value).toFixed(0)}
                        />
                        </Col>
                        </Row>
                        <Row>
                            <Col  >
                        <span className="midText">Years of experience</span>
                        </Col>
                        </Row>
                    </Col>
                    <Col  >
                        <Row>
                            <Col  >
                    <AnimatedNumber 
                            component="text" 
                            value={55}
                            style={{
                                transition: '0.8s ease-out',
                                fontSize: 48,
                                width:"100%",
                                color:"white",
                                fontWeight:"500",
                                transitionProperty:
                                    'background-color, color, opacity'
                            }}
                            frameStyle={perc => (
                                perc === 100 ? {} : {backgroundColor: 'transparent'}
                            )}
                            duration={5000}
                            formatValue={value => Number(value).toFixed(0)}
                        />
                        </Col>
                        </Row>
                        <Row>
                            <Col  >
                        <span className="midText">Successful Matchmaking</span>
                        </Col>
                        </Row>
                    </Col>       
                </Row>
            </Container>
            }
        </div>
        <section className="testimony-section ftco-no-pt">
       <Container>
      <Row>
        <Col className="text-center" md={12}>
          <h2 className="mb-4">Our satisfied client says</h2>
        </Col>
      </Row>
      <div>
        <Row>
          <Col md={12}>
              <div className="item">
                <div className="testimony-wrap p-4 pb-5 text-center">
                  <div className="user-img mb-5" >
                    <span className="quote d-flex align-items-center justify-content-center">
                      <i className="icon-quote-left"></i>
                    </span>
                  </div>
                  <div className="text">
                    <p className="mb-5">We have been working with ESORUS for a few months now and growing from strength to strength. Their team of designers and coordinators on site form an essential part of the product we deliver to clients. We found that ESORUS is a very experienced team and they have proved resourceful, are accomplished and very competent at every step of the process. The quality of ESORUS FF&E’s team reflects very positively on the quality of our brand and we are looking forward to working with them on many more projects in the future.</p>
                    <p className="name">NORA EL FAKHARANY</p>
                    <span className="position">ENCORE INTERIOR DESIGN & CONSTRUCTION</span>
                  </div>
                </div>
              </div>
          </Col>
        </Row>
      </div>
      </Container>
     
    </section>
   
    
    </div>
    );
}

}

export default SecondPage;
