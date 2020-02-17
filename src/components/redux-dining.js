import React from 'react'
import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'
import { removeEvent } from '../actions/events';

const Reduxdining = () => {

    const addEvent = ({ title = '', description = '', teams = [] } = {}) => ({
        type: 'ADD_EVENT',
        event: {
            id: uuid(),
            title,
            description,
            teams
        }
    })
    const removeEvent = ({ id } = {}) => ({
        type: 'REMOVE_EVENT',
        id
    })
    const editEvent = (id, updates) => ({
        type: 'EDIT_EVENT',
        id,
        updates
    })
    const removeTeam = ({ id }) => ({
        type: 'REMOVE_TEAM',
        id
    })


    const eventsReducerDefaultSate = []
    const eventsReducer = (state = eventsReducerDefaultSate, action) => {
        switch (action.type) {
            case 'ADD_EVENT':
                return [
                    ...state,
                    action.event
                ]
            case 'REMOVE_EVENT':
                return state.filter(({ id }) => id !== action.id)
            case 'EDIT_EVENT':
                return state.map((event) => {
                    if (event.id === action.id) {
                        return {
                            ...event,
                            ...action.updates
                        }
                    } else {
                        return event
                    }
                })
            case 'REMOVE_TEAM':
                // return state.map(({ teams }) => {
                //     teams.filter(({ id }) => id !== action.id)
                // })
                //return state.teams.filter(({ id }) => id !== action.id)
                console.log(
                    state.map(({ teams }) => {
                        teams.filter(({ id }) => id !== '1')
                    }))
            default:
                return state
        }
    }


    //filters
    const setTitleFilter = (title = '') => ({
        type: 'SET_TITLE_FILTER',
        title
    })
    
    const setNameFilter = (name = '') => ({
        type: 'SET_NAME_FILTER',
        name
    })

    const filtersReducerDeaultState = {
        title: '',
        name: ''
    }
    const filtersReducer = (state = filtersReducerDeaultState, action) => {
        switch (action.type) {
            case 'SET_TITLE_FILTER':
                return {
                    ...state,
                    title: action.title
                }
            case 'SET_NAME_FILTER':
                return {
                    ...state,
                    name: action.name
                }
            default:
                return state
        }
    }

    //get visible events
    const getVisibleEvents = (events, { title }) => {
        return events.filter((event) => {
            const titleMatch = event.title.toLowerCase().includes(title.toLowerCase())
            return titleMatch
        })
    }

    const store = createStore(
        combineReducers({
            events: eventsReducer,
            filters: filtersReducer
        })
    )

    store.subscribe(() => {
        const state = store.getState()
        const visibleEvents = getVisibleEvents(state.events, state.filters)
        console.log(visibleEvents)
    })

    const eventOne = store.dispatch(addEvent({ title: 'new event', description: 'something here', teams: [{id: '1', name: 'Chefs', member: 'Mate', member2: 'Szimi'}] }))
    store.dispatch(addEvent({ title: 'another event', description: 'just whatever' }))
    console.log(eventOne.event.id)

    store.dispatch(editEvent(eventOne.event.id, { teams: [...eventOne.event.teams,{id: '2', name: 'New Team', member: 'Someone', member2: 'Someon else'}]}))

    //store.dispatch(removeTeam({ id: eventOne.event.teams.id }))
    // store.dispatch({
    //     type: 'REMOVE_TEAM',
    //     id: "1"
    // })

    //store.dispatch(removeEvent({ id: expenseOne.event.id }))
    // store.dispatch(editEvent(expenseTwo.event.id, { title: 'changed' }))

    //store.dispatch(setTitleFilter('new'))
    // store.dispatch(setTitleFilter())
    // store.dispatch(setNameFilter('changed'))
    // store.dispatch(setNameFilter())
    

    // const demoState = {
    //     events: [{
    //         id: 'dfsgsdfsfdg',
    //         title: 'New event',
    //         description: 'just some random here'
    //     }],
    //     filters: {
    //         title: 'New',
    //         name: 'First'
    //     }
    // }

    




    return (
        <div>
            hey
        </div>
    )
}

export { Reduxdining as default }