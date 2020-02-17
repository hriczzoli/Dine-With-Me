import React from 'react'
import { connect } from 'react-redux';
import selectEvents from '../selectors/events'
import { setTitleFilter } from '../actions/filters'

const SerachEvent = (props) => {
    return (
        <div className="search-event-container">
            <h2>Events</h2>
            <input 
                type="text"
                className="text-input"
                placeholder="Search events"
                onChange={(e) => {props.dispatch(setTitleFilter(e.target.value))}}
            />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        events: selectEvents(state.events, state.filters)
    }
}

export default connect(mapStateToProps)(SerachEvent)