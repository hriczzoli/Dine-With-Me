import { createStore, combineReducers } from 'redux';
import eventsReducer from '../reducers/events'
import teamsReducer from '../reducers/teams'
import filtersReducer from '../reducers/filters'

export default () => {
    const store = createStore(
        combineReducers({
            events: eventsReducer,
            teams: teamsReducer,
            filters: filtersReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
};