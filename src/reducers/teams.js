// import uuid from 'uuid'

// //TEAMS REDUCER
// const teamsDefaultState = [
//     {
//         id: uuid(),
//         title: 'Our first cook off',
//         description: 'This is the first time we compete against each other to find out who is the best cook amongs us',
//         teams: [
//             {
//                 id: uuid(),
//                 name: 'Master chefs',
//                 member: 'Mate',
//                 member2: 'Szimi',
//                 member3: ''
//             }
//         ]
//     },
//     {
//         id: uuid(),
//         title: 'Our second cook off',
//         description: 'This is the second time we compete against each other to find out who is the best cook amongs us',
//         teams: [
//             {
//                 id: uuid(),
//                 name: 'Chefs',
//                 member: 'Marko',
//                 member2: 'Puncus',
//                 member3: 'Kovacs'
//             },
//             {
//                 id: uuid(),
//                 name: 'Parents',
//                 member: 'Evi',
//                 member2: 'Szabi',
//                 member3: ''
//             }
//         ]
//     }
// ]

// export default (state = teamsDefaultState, action) => {
//     switch (action.type) {
//         case 'ADD_TEAM':
//             return [
//                 ...state,
//                 action.team
//             ]
//         case 'REMOVE_TEAM':
//             // return state.map((event) => {
//             //         // event.teams.map((team) => {
//             //         //     if(team.id === action.id) {
//             //         //         state.event.teams.filter(({ id }) => id !== action.id)
//             //         //     }
//             //         // })
//             //         // if(event.teams.id === action.id) {
//             //         //     //state.event.teams.filter(({ id }) => id !== action.id)
//             //         //     console.log(event.teams)
//             //         // }
//             // })
//             // return state.filter(({ id }) => id !== action.id)
//         case 'EDIT_TEAM':
//             return state.map((team) => {
//                 if (team.id === action.id) {
//                     return {
//                         ...team,
//                         ...action.team
//                     }
//                 }
//             })
//         default:
//             return state
//     }
// }
