import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Missions from './Missions';
import Join from './Join';
import Space from './Space';


class Main extends Component {


    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={Home}/>
                    <Route exact path='/about' component={About}/>
                    <Route exact path='/missions' component={Missions}/>
                    <Route exact path='/space' component={Space}/>
                    <Route exact path='/join' component={Join}/>
                    <Redirect to='/home'/>
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default Main;