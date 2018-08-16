import React from "react";
import { Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Header from './Header';
import Home from './Home';
import Categories from './Categories';
import Category from './Category';
import Product from './Product';
import styles from './App.scss';
import 'normalize.css';
import CartLink from "./CartLink";

const App = () => {
    const timeout = { enter: 300, exit: 0 };
    const currentKey = window.location.pathname.split('/')[1] || '/';

    return (
        <div className={styles.app}>
            <Header>
                <CartLink/>
            </Header>
            <TransitionGroup component="main" className={styles['page-main']}>
                <CSSTransition key={currentKey} timeout={timeout} classNames="fade">
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/categories' component={Categories}/>
                        <Route path='/category/:id' component={Category}/>
                        <Route path='/product/:sku' component={Product}/>
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        </div>
    );
};

export default App;