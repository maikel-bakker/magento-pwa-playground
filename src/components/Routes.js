import React from 'react';
import { Router, Route, history } from 'react-router-dom';

import Home from './Home';
import Categories from 'components/Categories';
import Category from 'components/Category';

const Routes = () => (
    <Router history={history}>
        <Route path="/" exact component={Main} />
        <Route path="/categories" exact component={Categories} />
        <Route path="/category/:id" exact component={Category} />
    </Router>
)

export default Routes;