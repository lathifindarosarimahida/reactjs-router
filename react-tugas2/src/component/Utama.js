import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Beranda from './Beranda'
import Gallery from './Gallery'
import Hari from './Hari'

const Utama = () => (
    <Switch>
        <Route exact path="/" component={Beranda} />
        <Route path="/Gallery" component={Gallery} />
        <Route path="/Hari" component={Hari} />
    </Switch>
)
export default Utama;