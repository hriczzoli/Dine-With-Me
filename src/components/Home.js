import React, { useEffect, useReducer } from 'react'
import Modal from 'react-modal';
import SearchEvent from '../components/SearchEvent'
import AddEvent from '../components/AddEvent'
import EventList from '../components/EventList'
import eventsReducer from '../reducers/events'

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
}

Modal.setAppElement('#root')

const Home = () => {
    const [events, dispatch] = useReducer(eventsReducer, [])
    const [modalIsOpen,setIsOpen] = React.useState(false);
    
    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
    }

    function closeModal(){
        setIsOpen(false);
    }


    return (
            <div className="content-container">
                <div className="search-event-container">
                    <SearchEvent />
                </div>
                <EventList />
                <button className="fab" onClick={openModal}>+</button>
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <AddEvent /> 
                    <button onClick={closeModal} className="close-modal-btn">CLOSE</button>
                </Modal>
            </div>
    )
}

export { Home as default }