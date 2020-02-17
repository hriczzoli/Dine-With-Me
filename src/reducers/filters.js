const filtersReducerDefaultState = {
    title: '',
    name: ''
}

export default (state = filtersReducerDefaultState, action) => {
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