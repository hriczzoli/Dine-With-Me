import uuid from 'uuid'

//ADD_EVENT
export const addEvent = (
    {
        title = '',
        description = '',
        teams = []
    } = {}) => ({
    type: 'ADD_EVENT',
    event: {
        id: uuid(),
        title,
        description,
        teams
    }
})

//REMOVE_EVENT
export const removeEvent = ({ id } = {}) => ({
    type: 'REMOVE_EVENT',
    id
})

//EDIT_EVENT
export const editEvent = (id, updates) => ({
    type: 'EDIT_EVENT',
    id,
    updates
})

//REMOVE TEAM
// export const removeTeam = ({ teams }) => ({
//     type: 'REMOE_TEAM',
//     id: teams.id
// })