import React, { Component } from 'react'
import { Router, Route, IndexRoute , Redirect , hashHistory } from 'react-router'

import AppContainer from '../containers/AppContainer.js'
import CallContainer from '../containers/CallContainer.js'
import HomeContainer from '../containers/HomeContainer.js'
import MovieContainer from '../containers/MovieContainer.js'
import MovieDetailContainer from '../containers/MovieDetailContainer.js'

export default class Routers extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={AppContainer}>
                    <IndexRoute component={HomeContainer}/>
                    <Route path="home" component={HomeContainer}/>
                    <Route path="movie" component={MovieContainer}>
                        <Route path="/detail" component={MovieDetailContainer}/>
                        <Redirect from="detail" to="/detail"/>
                    </Route>
                    <Route path="call" component={CallContainer} />
                </Route>
            </Router>
        )
    }
}
