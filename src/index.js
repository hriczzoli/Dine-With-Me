import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './styles/styles.scss';
import * as serviceWorker from './serviceWorker';
import AppRouter from './routers/AppRouter';
import ReduxDining from './components/redux-dining'

import configureStore from './store/configureStore';
import { addEvent } from './actions/events';
import { setTitleFilter } from './actions/filters'
import { setNameFilter } from './actions/filters'
import getVisibleEvents from './selectors/events';

const store = configureStore();

store.dispatch(setTitleFilter(''))
store.dispatch(setNameFilter(''))

const state = store.getState()
const visibleEvents = getVisibleEvents(state.events, state.filters)
//console.log(visibleEvents)

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render( jsx , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
