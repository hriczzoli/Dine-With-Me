import uuid from 'uuid'

//EVENTS REDUCER
const eventsDefaultState = [
    {
        id: uuid(),
        title: 'Our first cook off',
        description: 'This is the first time we compete against each other to find out who is the best cook amongs us',
        teams: [
            {
                id: uuid(),
                name: 'Master chefs',
                member: 'Mate',
                member2: 'Szimi',
                member3: ''
            }
        ]
    },
    {
        id: uuid(),
        title: 'Our second cook off',
        description: 'This is the second time we compete against each other to find out who is the best cook amongs us',
        teams: [
            {
                id: uuid(),
                name: 'Chefs',
                member: 'Marko',
                member2: 'Puncus',
                member3: 'Kovacs'
            },
            {
                id: uuid(),
                name: 'Parents',
                member: 'Evi',
                member2: 'Szabi',
                member3: ''
            }
        ]
    }
]

export default (state = eventsDefaultState, action) => {
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
            return state.map((event) => {
                const e = event
                event.teams.filter(({ id }) => id !== action.id)
                console.log(e)
            })
        default:
            return state
    }
}
