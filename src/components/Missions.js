import React, { Component } from 'react';
import { Col , Row } from 'reactstrap';

class Missions extends Component {
    render() {
        return (
            <React.Fragment>
                <div  className="mission-body">
                    <div className="container">
                        <Row>
                            <div className="firstLand">
                                <Col>
                                    <h3>First Land Landing</h3>
                                    <p>On December 21, 2015, the Falcon 9 rocket delivered 11 communications satellites to orbit, and the first stage returned and landed at Landing Zone 1 — the first-ever orbital class rocket landing.</p>
                                </Col>
                            </div>
                        </Row>
                        <Row>
                            <div className="firstSea">
                                <Col>
                                    <h3>First Droneship Landing</h3>
                                    <p>On April 8, 2016, the Falcon 9 rocket launched the Dragon spacecraft to the International Space Station, and the first stage returned and landed on the “Of Course I Still Love You” droneship.</p>
                                </Col>
                            </div>
                        </Row>
                        <Row>
                            <div className="firstReuse">
                                <Col>
                                    <h3>First Reflight</h3>
                                    <p>On March 30, 2017, SpaceX achieved the world’s first reflight of an orbital class rocket. Following delivery of the payload, the Falcon 9 first stage returned to Earth for the second time.</p>
                                </Col>
                            </div>
                        </Row>
                        <Row>
                            <div className="firstHeavy">
                                <Col>
                                    <h3>First Falcon Heavy Flight</h3>
                                    <p>Falcon Heavy is the world’s most powerful operational rocket by a factor of two, capable of carrying large payloads to orbit and supporting missions as far as the Moon or Mars. On February 7, 2018, Falcon Heavy made its first launch to orbit, successfully landing 2 of its 3 boosters and launching its payload to space.</p>
                                </Col>
                            </div>
                        </Row>
                    </div>
                </div>
            </ React.Fragment>
        )
    }
}

export default Missions;