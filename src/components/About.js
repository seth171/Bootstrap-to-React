import React, { Component } from 'react';
import $ from 'jquery';

$(document).ready(function() {
    $('#dragon').click(function() {
        $('#dragonImg').toggle();
        $('#dragonText').toggle();

        $('#trunkImg').hide();
        $('#trunkText').hide();
        $('#secondImg').hide();
        $('#secondText').hide();
        $('#firstImg').hide();
        $('#firstText').hide();
    });
    
    $('#trunk').click(function() {
        $('#trunkImg').toggle();
        $('#trunkText').toggle();

        $('#dragonImg').hide();
        $('#dragonText').hide();
        $('#secondImg').hide();
        $('#secondText').hide();
        $('#firstImg').hide();
        $('#firstText').hide();
    });
    
    $('#secondStage').click(function() {
        $('#secondImg').toggle();
        $('#secondText').toggle();

        $('#dragonImg').hide();
        $('#dragonText').hide();
        $('#trunkImg').hide();
        $('#trunkText').hide();
        $('#firstImg').hide();
        $('#firstText').hide();
    });
    
    $('#firstStage').click(function() {
        $('#firstImg').toggle();
        $('#firstText').toggle();

        $('#dragonImg').hide();
        $('#dragonText').hide();
        $('#trunkImg').hide();
        $('#trunkText').hide();
        $('#secondImg').hide();
        $('#secondText').hide();
    });
})

class About extends Component {

    render() {

        return (
            <React.Fragment>
                <div className="about-body">
                    <img src={require("../images/launchPad.jpg")} className="falcon" useMap="#falcon9" alt="Falcon 9 Launch Pad" />
                    <map name="falcon9">
                        <area shape="rect" coords="187, 17, 214, 54" id="dragon" alt="Dragon" />
                        <img className="collapse" id="dragonImg" src={require("../images/dragonImg.jpg")} alt="Dragon Capsule"/>
                        <area shape="rect" coords="172, 59, 226, 87" id="trunk" alt="Trunk" />
                        <img className="collapse" id="trunkImg" src={require("../images/trunkImg.jpg")} alt="Trunk" />
                        <area shape="rect" coords="181, 91, 215, 167" id="secondStage" alt="Second Stage" />
                        <img className="collapse" id="secondImg" src={require("../images/secondImg.png")} alt="Second Stage" />
                        <area shape="rect" coords="179, 80, 216, 590" id="firstStage" alt="First Stage" />
                        <img className="collapse" id="firstImg" src={require("../images/firstImg.jpg")} alt="First Stage" />
                    </map>
                </div>
                <div>
                    <p className="collapse" id="dragonText">
                        The Dragon spacecraft is capable of carrying up to 7 passengers to and from Earth orbit, and beyond. It is the only spacecraft currently flying that is capable of returning significant amounts of cargo to Earth, and is the first private spacecraft to take humans to the space station.
                    </p>
                    <p className="collapse" id="trunkText">
                        The trunk is not recoverable; it separates from the capsule before re-entry and burns up in Earth's atmosphere. The trunk section, which carries the spacecraft's solar panels and allows the transport of unpressurized cargo to the ISS, was first used for cargo on the SpaceX CRS-2 mission.
                    </p>
                    <p className="collapse" id="secondText">
                        The second stage, powered by a single Merlin Vacuum Engine, delivers Falcon 9's payload to the desired orbit. The second stage engine ignites a few seconds after stage separation, and can be restarted multiple times to place multiple payloads into different orbits.
                    </p>
                    <p className="collapse" id="firstText">
                        A Falcon 9 first-stage booster is a reusable rocket booster used on the Falcon 9 and Falcon Heavy orbital launch vehicles manufactured by SpaceX. The manufacture of first-stage booster constitutes about 60% of the launch price of a single Falcon 9 (and three of them over 80% of the launch price of a Falcon Heavy), which led SpaceX to develop a program dedicated to recovery and reuse of these boosters for a significant decrease in launch costs.
                    </p>
                </div>

                <div>
                    <p id="learn">Click parts of the Falcon 9 to learn more.</p>
                </div>
            </React.Fragment>
        )
    };
}


export default About;