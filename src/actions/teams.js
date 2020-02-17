import uuid from 'uuid'

//ADD_TEAM
export const addTeam = (
    {
        name = '',
        member = '',
        member2 = '',
        member3 = ''
    } = {}) => ({
    type: 'ADD_TEAM',
    team: {
        id: uuid(),
        name,
        member,
        member2,
        member3
    }
})

//REMOVE_TEAM
export const removeTeam = ({ id } = {}) => ({
    type: 'REMOVE_TEAM',
    id
})

//EDIT_TEAM
export const editTeam = (id, updates) => ({
    type: 'EDIT_TEAM',
    id,
    updates
})