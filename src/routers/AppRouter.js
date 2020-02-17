import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Teams from '../components/Teams'
import BottomNav from '../components/BottomNav';
import Home from '../components/Home';
import Rating from '../components/Rating'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={Home} exact={true}/>
                <Route path="/teams" component={Teams} />
                <Route path="/rating" component={Rating} />
            </Switch>
            <BottomNav/>
        </div>
    </BrowserRouter>
)

export default AppRouter;