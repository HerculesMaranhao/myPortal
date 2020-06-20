import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'

//Layouts
import LayoutMyPortal from './../layouts/myPortal'

import MyPortal from './../containers/myPortal'
import CurriculumVitae from './../containers/curriculumVitae'
import AboutMe from './../containers/aboutMe'

export default props => (
    <HashRouter>
        <Switch>
            <Route
                exact
                path="/"
                render={props => <LayoutMyPortal {...props}><MyPortal {...props} /></LayoutMyPortal>}
            />
            <Route
                exact
                path="/curriculum"
                render={props => <LayoutMyPortal {...props}><CurriculumVitae {...props} /></LayoutMyPortal>}
            />
            <Route
                exact
                path="/about-me"
                render={props => <LayoutMyPortal {...props}><AboutMe {...props} /></LayoutMyPortal>}
            />
            <Redirect to="/" />
        </Switch>
    </HashRouter>
)