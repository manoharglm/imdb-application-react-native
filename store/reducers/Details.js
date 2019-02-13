export const details = (state = [], action) => {
    switch (action.type) {
        case "GET_PERSON":
            return {
                ...state,
                detail: action.results
            }

        case 'GET_MOVIE':
            return {
                ...state,
                detail: action.results
            }

        case 'GET_MOVIE_VIDEO':
            return {
                ...state,
                video: action.results
            }

        case 'MOVIE_CREDITS':
            return {
                ...state,
                credits: action.results
            }

        case 'GET_TV':
            return {
                ...state,
                detail: action.results
            }

        case 'GET_TV_VIDEO':
            return {
                ...state,
                video: action.results
            }

        case 'TV_CREDITS':
            return {
                ...state,
                credits: action.results
            }

        case 'GET_FILMOGRAPHY':
            return {
                ...state,
                films: action.results
            }

        default:
            return state;
    }
}