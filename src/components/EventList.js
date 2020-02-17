import React from 'react'
import Event from '../components/Event'
import { connect } from 'react-redux'
import selectEvents from '../selectors/events'

const EventList = (props) => {
    return (
        <div className="events-list-container">
            <div className="scrollable-content">
                {props.events.reverse().map((event) => (
                    <Event key={event.id} {...event} />
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        events: selectEvents(state.events, state.filters)
    }
}

export default connect(mapStateToProps)(EventList)