import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container-fluid text-center text-md-left">
                <div className="row">
                    <div className="d-none d-lg-block col-lg-3 mt-5">
                        <h5 className="text-uppercase">further information</h5>
                        <p>List of useful links that may answer any questions not covered. Or just to increase your knowledge.</p>
                    </div>
                    <div className= "col-lg-6 mt-5 pt-4 text-center justify-content-center">
                        <a className="px-5" href="https://www.spacex.com/">SpaceX</a>
                        <a className="px-5" href="https://www.nasa.gov/">NASA</a>
                        <a className="px-5" href="https://www.space.com/">SPACE</a>
                    </div>
                    <div className="nav-footer col">
                        <ul className="list-unstyled">
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/missions'>Missions</Link></li>
                        </ul>
                    </div>
                    <div className="nav-footer col">
                        <ul className="list-unstyled">
                            <li><Link to='/space'>Space</Link></li>
                            <li><Link to='/join'>Join</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="text-center py-3">
                2020 Falconhaslanded.com
            </div>
        </footer>
    );
}

export default Footer;