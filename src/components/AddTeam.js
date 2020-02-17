import React, { useState } from 'react'
import { connect } from 'react-redux';
import uuid from 'uuid'
import { editEvent } from '../actions/events';

const AddTeam = (props) => {
    const [name, setName] = useState('')
    const [member, setMember] = useState('')
    const [member2, setMember2] = useState('')
    const [member3, setMember3] = useState('')
    const [error, setError] = useState('')

    const handleAddTeam = (e) => {
        e.preventDefault()
        if(!name || !member) {
            setError('Please enter a name for the team and at least one member')
        } else {
            setError('')
            props.dispatch(editEvent(
                props.eventID,
                { teams: [
                    ...props.event.teams,
                    {
                        id: uuid(),
                        name: name,
                        member: member,
                        member2: member2,
                        member3: member3
                    }
                ]
            }))
            setName('')
            setMember('')
            setMember2('')
            setMember3('')
        }
        
    }


    return (
        <div className="add-event-form">
            <p>Create team</p>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleAddTeam}>
                <div className="inputs-container">
                    <div className="form__group">
                        <input value={name} type="text" id="email" className="form__field" placeholder="Title" onChange={(e) => setName(e.target.value)}/>
                        <label  className="form__label">Name</label>
                    </div>
                    <div className="form__group">
                        <input value={member} type="text" id="email" className="form__field" placeholder="Title" onChange={(e) => setMember(e.target.value)}/>
                        <label  className="form__label">Member</label>
                    </div>
                    <div className="form__group">
                        <input value={member2} type="text" id="email" className="form__field" placeholder="Title" onChange={(e) => setMember2(e.target.value)}/>
                        <label  className="form__label">Member 2</label>
                    </div>
                    <div className="form__group">
                        <input value={member3} type="text" id="email" className="form__field" placeholder="Title" onChange={(e) => setMember3(e.target.value)}/>
                        <label  className="form__label">Member 3</label>
                    </div>
                    <select>
                        
                    </select>
                </div>
                <button className="submit-btn">ADD TEAM</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        events: editEvent(state.events, state.action)
    }
}

export default connect(mapStateToProps)(AddTeam)