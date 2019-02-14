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

        case 'GET_MOVIE_VIDEO':
            return {
                ...state,
                movieVideo: action.results
            }

        case 'MOVIE_CREDITS':
            return {
                ...state,
                movieCredits: action.results
            }

        case 'GET_TV':
            return {
                ...state,
                TvDetail: action.results
            }

        case 'GET_TV_VIDEO':
            return {
                ...state,
                TvVideo: action.results
            }

        case 'TV_CREDITS':
            return {
                ...state,
                TvCredits: action.results
            }

        case 'GET_FILMOGRAPHY':
            return {
                ...state,
                personFilms: action.results
            }

        default:
            return state;
    }
}