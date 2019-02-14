export const top = (state= {}, action) => {
    switch(action.type){
        case 'TOP_MOVIES':
        return {
            ...state,
            movies : action.results
        }

        case 'TOP_TV':
        return {
            ...state,
            tv : action.results
        }

        default:
        return state
    }
}