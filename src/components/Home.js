import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="img1">
                    <div className="img1Logo d-none d-lg-block"></div>
                    <span className="title">
                        Falcon has landed.
                    </span>
                </div>
                <section className="section">
                    <h2>SpaceX</h2>
                    <p>
                        SpaceX designs, manufactures and launches advanced rockets and spacecraft. The company was founded in 2002 to revolutionize space technology, with the ultimate goal of enabling people to live on other planets.
                    </p>
                </section>
                <div className="img2"></div>
                <section className="section">
                    <h2>NASA</h2>
                    <p>
                        The National Aeronautics and Space Administration is an independent agency of the United States Federal Government responsible for the civilian space program, as well as aeronautics and space research.
                    </p>
                </section>
                <div className="img3"></div>
                <section className="section">
                    <h2>Space</h2>
                    <p>
                        Outer space, or simply Space, is the expanse that exists beyond Earth and between celestial bodies. Outer space is not completely empty—it is a hard vacuum containing a low density of particles, predominantly a plasma of hydrogen and helium, as well as electromagnetic radiation, magnetic fields, neutrinos, dust, and cosmic rays.
                    </p>
                </section>
                <div className="img4"></div>
            </React.Fragment>
        )
    }
}

export default Home;