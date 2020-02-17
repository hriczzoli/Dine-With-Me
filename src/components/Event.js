import React, { useContext } from 'react'
import { connect } from 'react-redux';
import { removeEvent } from '../actions/events';
import { editEvent } from '../actions/events';
import selectEvents from '../selectors/events';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends} from '@fortawesome/free-solid-svg-icons'

const Event = (props) => {

    const removeEvent = () => {
        props.dispatch({
            type: 'REMOVE_EVENT',
            id: props.event.id
        })
    }

    return (
        <div className="event-list-item">
            <div className="event-header-img"></div>
            <div className="event-content">
                <h3>{props.event.title}</h3>
                <p>{props.event.description}</p>
                <div className="team-number-indicator">
                    <FontAwesomeIcon icon={faUserFriends} size="1x" className="team-icon"/>{props.event.teams ? <p>{props.event.teams.length}</p> : 0}
                </div>
            </div>
            <div className="actions-container">
                <button>VIEW</button>
                <button onClick={removeEvent}>REMOVE</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        event: state.events.find((event) => event.id === props.id)
    }
}

export default connect(mapStateToProps)(Event)