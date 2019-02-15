export const details = (state = [], action) => {
    switch (action.type) {
        case "GET_PERSON":
            return {
                ...state,
                person: action.results
            }

        case 'GET_MOVIE':
            return {
                ...state,
                movieDetail: action.results
            }

        case 'GET_TV':
            return {
                ...state,
                TvDetail: action.results
            }

        case 'GET_FILMOGRAPHY':
            return {
                ...state,
                personFilms: action.results
            }
        case 'USER_WATCHLIST':
            return {
                ...state,
                userWatchlist: action.results
            }

        default:
            return state;
    }
}