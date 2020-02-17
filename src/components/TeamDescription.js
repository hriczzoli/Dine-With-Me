import React, { useState } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends} from '@fortawesome/free-solid-svg-icons'
import { editEvent } from '../actions/events';

const TeamDescription = (props) => {
    const [name, setName] = useState(props.name)
    const [member, setMember] = useState(props.member)
    const [member2, setMember2] = useState(props.member2)
    const [member3, setMember3] = useState(props.member3)

    const removeTeam = () => {
        props.dispatch(editEvent(
          props.eventID,
          { teams: [
              ...props.event.teams,
              {
                  name: name,
                  member: member,
                  member2: member2,
                  member3: member3
              }
          ]}
        ))
    }

    const filterTeams = () => {
      
    }

    return (
      <div >
        <div className="team-item-header">
          <FontAwesomeIcon
            icon={faUserFriends}
            size="1x"
            className="team-icon"
          />
          <h3>{name}</h3>
          <button onClick={filterTeams} className="remove-btn">
            x
          </button>
        </div>
        <div className="team-item-body">
          <p>{member}</p>
          <p>{member2}</p>
          <p>{member3}</p>
        </div>
      </div>
    );
}

const mapStateToProps = (state) => {
  return {
      events: editEvent(state.events, state.action)
  }
}

export default connect(mapStateToProps)(TeamDescription)