import React, { Component } from 'react';
import { Row, Col, Card, CardHeader, CardBody } from 'reactstrap';
import Accordion from 'react-bootstrap/Accordion';
import { AccordionCollapse } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

class Space extends Component {
    render() {
        return(
            <React.Fragment>
                <div className="space-body">
                    <div className="container">
                        <Row>    
                            <Col>
                                <h3 className="space-title">A Brief History of Space Exploration</h3>
                                <Accordion defaultActiveKey="0">
                                    <Card>
                                        <Accordion.Toggle as={CardHeader} eventKey="0">
                                        <h4>Yuri Gagarin <small>First Human to journey into Outer Space</small></h4>
                                        <Accordion.Collapse eventKey="0">
                                            <CardBody>
                                                <img src={require("../images/yuri.jpg")} className="cards" alt="Yuri Gagarin" />
                                                <p>On 12 April 1961 aboard Vostok 1. Which completed one orbit of Earth. Being the first in space. His first and last mission into Space. On 27 March 1968, while on a routine training flight from Chkalovsky Air Base, Gagarin and flight instructor Vladimir Seryogin died when their MiG-15UTI crashed near the town of Kirzhach. </p>
                                            </CardBody>
                                        </Accordion.Collapse>
                                        </Accordion.Toggle>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={CardHeader} eventKey="1">
                                        <h4>Alan Shepard <small>First American to reach Space</small></h4>
                                        <AccordionCollapse eventKey="1">
                                            <CardBody>
                                                <img src={require("../images/alan.jpg")} className="cards" alt="Alan Shepard" />
                                                <p>On May 5, 1961, Shepard piloted the Mercury-Redstone 3 mission and became the second person, and the first American, to travel into space. Shepard stayed on a suborbital trajectory for the 15-minute flight, which reached an altitude of 101.2 nautical miles (116.5 statute miles; 187.4 kilometers), and then fell to a splashdown 263.1 nautical miles (302.8 statute miles; 487.3 kilometers) down the Atlantic Missile Range. In 1971, he returned to space and walked the moon.</p>
                                            </CardBody>
                                        </AccordionCollapse>
                                        </Accordion.Toggle>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={CardHeader} eventKey="2">
                                        <h4>John Glenn <small>First American to Orbit Space</small></h4>
                                        <AccordionCollapse eventKey="2">
                                            <CardBody>
                                                <img src={require("../images/glenn.jpg")} className="cards" alt="John Glenn" />
                                                <p>On February 20, 1962, Friendship 7 lifted off from Cape Canaveral Air Force Station. There were eleven delays during the countdown due to equipment malfunctions and improvements and the weather. Later in the flight, telemetry indicated that the heat shield had loosened. Friendship 7 safely splashed down 800 miles (1,290 km) southeast of Cape Canaveral after Glenn's 4-hour, 55-minute flight. After the flight, it was determined that the heat shield was not loose; the sensor was faulty. He carried a note on the flight which read, "I am a stranger. I come in peace. Take me to your leader and there will be a massive reward for you in eternity" in several languages, in case he landed near southern Pacific Ocean islands.</p>
                                            </CardBody>
                                        </AccordionCollapse>
                                        </Accordion.Toggle>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={CardHeader} eventKey="3">
                                        <h4>Apollo 11 <small>First Humans on the Moon</small></h4>
                                        <AccordionCollapse eventKey="3">
                                            <CardBody>
                                                <img src={require("../images/apollo.jpg")} className="cards" alt="Apollo 11" />
                                                <p>On July 20, 1969, Michael Collins, Buzz Aldrin, and Neil Armstrong. Ventured to the Moon. Armstrong and Apollo 11 Lunar Module (LM) pilot Buzz Aldrin became the first people to land on the Moon, and the next day they spent two and a half hours outside the Lunar Module Eagle spacecraft while Michael Collins remained in lunar orbit in the Apollo Command Module Columbia. When Armstrong stepped onto the lunar surface, he famously said: "That's one small step for [a] man, one giant leap for mankind."</p>
                                            </CardBody>
                                        </AccordionCollapse>
                                        </Accordion.Toggle>
                                    </Card>
                                </Accordion>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Carousel>
                                    <Carousel.Item>
                                        <img
                                        className="d-block w-100 photo"
                                        src={require("../images/moon.jpg")}
                                        alt="The Moon"
                                        />
                                        <Carousel.Caption>
                                        <h3>The Moon</h3>
                                        <p>The Moon is an astronomical body orbiting Earth and is the planet's only natural satellite.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                        className="d-block w-100 photo"
                                        src={require("../images/milkyWay.jpg")}
                                        alt="Milky Way Galaxy"
                                        />
                                        <Carousel.Caption>
                                        <h3>Milky Way Galaxy</h3>
                                        <p>Large spiral system consisting of several hundred billion stars, one of which is the Sun.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                        className="d-block w-100 photo"
                                        src={require("../images/mars.png")}
                                        alt="Mars"
                                        />
                                        <Carousel.Caption>
                                        <h3>Mars</h3>
                                        <p>Large spiral system consisting of several hundred billion stars, one of which is the Sun.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>
                            </Col>
                        </Row>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Space;