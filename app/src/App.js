import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Pnb from './pnb';
import Kevingpoep from './kevingpoep';
import Controller from './controller';

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/kevingpoep">
                    <Kevingpoep />
                </Route>
                <Route path="/controller">
                    <Controller />
                </Route>
                <Route path="/">
                    <Pnb />
                </Route>
            </Switch>
        </Router>
    );
}