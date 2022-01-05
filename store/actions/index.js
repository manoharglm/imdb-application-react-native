import {API_KEY as apikey, API_TOKEN as token} from "@env"


export const trendingMovies = () => dispatch => {
  fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apikey}&token=${token}`)
    .then(res => res.json())
    .then(results =>
      dispatch({
        type: 'TRENDING_MOVIES',
        results: results['results']
      })
    );
};

export const trendingTv = () => dispatch => {
  fetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=${apikey}&token=${token}`)
    .then(res => res.json())
    .then(results =>
      dispatch({
        type: 'TRENDING_TV',
        results: results['results']
      })
    );
};

export const trendingCelebs = () => dispatch => {
  fetch(`https://api.themoviedb.org/3/trending/person/day?api_key=${apikey}&token=${token}`)
    .then(res => res.json())
    .then(results =>
      dispatch({
        type: 'TRENDING_CELEBS',
        results: results['results']
      })
    );
};

export const comingSoon = () => dispatch => {
  fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apikey}&language=en-US&page=1&token=${token}`)
    .then(res => res.json())
    .then(results =>
      dispatch({
        type: 'COMING_SOON',
        results: results['results']
      })
    );
};

export const inTheatres = () => dispatch => {
  fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apikey}&language=en-US&page=1&token=${token}`)
    .then(res => res.json())
    .then(results =>
      dispatch({
        type: 'IN_THEATRES',
        results: results['results']
      })
    );
};

export const getMovieDetail = (movieId) => dispatch => {
  fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apikey}&append_to_response=videos,images,credits`)
    .then(res => res.json())
    .then(results =>
      dispatch({
        type: "GET_MOVIE",
        results
      })
    )
};

export const getTvDetail = (tvId) => dispatch => {
  fetch(`https://api.themoviedb.org/3/tv/${tvId}?api_key=${apikey}&append_to_response=videos,images,credits`)
    .then(res => res.json())
    .then(results => {
      dispatch({
        type: "GET_TV",
        results
      })
    })
};

export const getPerson = (personId) => dispatch => {
  fetch(`https://api.themoviedb.org/3/person/${personId}?api_key=${apikey}&append_to_response=images&language=en-US&token=${token}`)
    .then(res => res.json())
    .then(results => dispatch({
      type: "GET_PERSON",
      results
    }))
};

export const getFilmography = (personId) => dispatch => {
  fetch(`https://api.themoviedb.org/3/person/${personId}/movie_credits?api_key=${apikey}&language=en-US&token=${token}`)
    .then(res => res.json())
    .then(results => dispatch({
      type: "GET_FILMOGRAPHY",
      results: results['cast'].slice(10)
    }))
}

export const topMovies = () => dispatch => {
  fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apikey}&token=${token}`)
    .then(res => res.json())
    .then(results =>
      dispatch({
        type: 'TOP_MOVIES',
        results: results['results']
      })
    );
};

export const topTv = () => dispatch => {
  fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${apikey}&token=${token}`)
    .then(res => res.json())
    .then(results =>
      dispatch({
        type: 'TOP_TV',
        results: results['results']
      })
    );
};
// export const userWatchList = (newMovie) => dispatch => {
//   updatedWatchList = [...userWatchList,newMovie]
//       dispatch({
//         type: 'USER_WATCHLIST',
//         results: results[updatedWatchList]
//       })
// }