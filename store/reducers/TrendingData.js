export const trendingData = (state = [], action) => {
    switch (action.type) {
        case "TRENDING_MOVIES":
            let trendingMovies = action.results
            return {
                ...state,
                trendingMovies
            }
        case 'TRENDING_TV':
            let trendingTv = action.results
            return {
                ...state,
                trendingTv
            }
        case 'TRENDING_CELEBS':
            let trendingCelebs = action.results
            return {
                ...state,
                trendingCelebs
            }
        case "COMING_SOON":
            let comingSoon = action.results
            return {
                ...state,
                comingSoon
            }
        case "IN_THEATRES":
            let inTheatres = action.results
            return {
                ...state,
                inTheatres
            }
        default:
            return state
    }
}