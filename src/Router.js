import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from './Home';
import Detail from './Detail';

const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/Detail" component={Detail}/>
        </Switch>
    </HashRouter>
);

export default BasicRoute;
