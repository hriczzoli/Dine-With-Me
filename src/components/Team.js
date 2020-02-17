import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import TeamDescription from '../components/TeamDescription'
import AddTeam from './AddTeam'
import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    }
};

const Team = (props) => {
    const [teams, setTeams] = useState(props.teams)
    const [modalIsOpen, setIsOpen] = useState(false);
    const [eventID, setEventID] = useState('')

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {}

    function closeModal() {
        setIsOpen(false);
    }

    const handleAddTeam = () => {
        openModal();
        setEventID(props.id)
    };

    

    return (
        <div className="team-list-item">
            <h3>{props.event.title}</h3>
            {teams.map((team) => {
                return <TeamDescription key={team.id} {...team}/>
            })}
            <button className="add-team-btn" onClick={handleAddTeam}>
            ADD TEAM
            </button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <AddTeam eventID={eventID} event={props.event}/>
                <button onClick={closeModal} className="close-modal-btn">
                CLOSE
                </button>
            </Modal>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        team: state.events.map((event) => {
            event.teams.map((team) => {
                return team
            })
        }),
        event: state.events.find((event) => event.id === props.id)
    }
}

export default connect(mapStateToProps)(Team)