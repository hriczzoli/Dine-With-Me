import React from 'react'
import Team from '../components/Team'
import { connect } from 'react-redux'
import selectEvents from '../selectors/events'

const TeamList = (props) => {
    return (
        <div className="events-list-container">
            <div className="scrollable-content">
                {props.events.reverse().map((event) => (
                    <Team key={event.id} {...event} />
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

export default connect(mapStateToProps)(TeamList)