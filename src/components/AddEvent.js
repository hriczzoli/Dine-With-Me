import React, { useState } from 'react'
import { connect } from 'react-redux';
import { addEvent } from '../actions/events';

const AddEvent = (props) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [error, setError] = useState('')
    const handleAddEvent = (e) => {
        e.preventDefault()
        if(!title) {
            setError('Please enter a title for the event')
        } else {
            setError('')
            props.dispatch(addEvent({
                title: title,
                description: description
            }))
            setTitle('')
            setDescription('')
        }
    }

    return (
        <div className="add-event-form">
            <p>Create event</p>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleAddEvent}>
                <div className="inputs-container">
                    <div className="form__group">
                        <input value={title} type="text" id="email" className="form__field" placeholder="Title" onChange={(e) => setTitle(e.target.value)}/>
                        <label  className="form__label">Title</label>
                    </div>
                    <div className="form__group">
                        <textarea value={description} id="message" className="form__field" placeholder="Short description" rows="6" onChange={(e) => setDescription(e.target.value)}></textarea>
                        <label  className="form__label">Short description</label>
                    </div>
                </div>
                <button className="submit-btn">ADD EVENT</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        events: addEvent(state.events, state.action)
    }
}

export default connect(mapStateToProps)(AddEvent)