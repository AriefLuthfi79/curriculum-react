import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Intro from '../pages/Intro';
import Detail from '../pages/DetailCurriculum';
import ReactJs from '../pages/ReactJs';
import ReactNative from '../pages/ReactNative';

export default function index() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Intro} />                
                <Route path="/reactjs" component={ReactJs} />
                <Route path="/detail" component={Detail} />
                <Route path="/reactnative" component={ReactNative} />
            </Switch>
        </BrowserRouter>
    )
}
