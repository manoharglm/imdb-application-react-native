const apikey = "3ebe7f44a343fc7c8c085ccfef4cc493"
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZWJlN2Y0NGEzNDNmYzdjOGMwODVjY2ZlZjRjYzQ5MyIsInN1YiI6IjVjNWU3MmI0YzNhMzY4M2NjZjhkNDM1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XYra3lypk70Rh69HEVdi76crIKkKJZE6KY350cEB3Ow"

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
  fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apikey}&language=en-US&token=${token}`)
    .then(res => res.json())
    .then(results =>
      dispatch({
        type: "GET_MOVIE",
        results
      })
    )
};

export const getMovieVideo = (movieId) => dispatch => {
  fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apikey}&language=en-US&token=${token}`)
    .then(res => res.json())
    .then(results =>
      dispatch({
        type: "GET_MOVIE_VIDEO",
        results
      })
    )
};

export const getMovieCredits = (movieId) => dispatch => {
  fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apikey}&language=en-US&token=${token}`)
    .then(res => res.json())
    .then(results =>
      dispatch({
        type: "MOVIE_CREDITS",
        results : results['cast']
      })
    )
};

export const getTvDetail = (tvId) => dispatch => {
  fetch(`https://api.themoviedb.org/3/tv/${tvId}?api_key=${apikey}&language=en-US&token=${token}`)
    .then(res => res.json())
    .then(results => {
      dispatch({
        type: "GET_TV",
        results
      })
    })
};

export const getTvVideo = (tvId) => dispatch => {
  fetch(`https://api.themoviedb.org/3/tv/${tvId}/videos?api_key=${apikey}&language=en-US&token=${token}`)
    .then(res => res.json())
    .then(results =>
      dispatch({
        type: "GET_TV_VIDEO",
        results
      })
    )
}

export const getTvCredits = (tvId) => dispatch => {
  fetch(`https://api.themoviedb.org/3/tv/${tvId}/credits?api_key=${apikey}&language=en-US&token=${token}`)
    .then(res => res.json())
    .then(results =>
      dispatch({
        type: "TV_CREDITS",
        results : results['cast']
      })
    )
};

export const getPerson = (personId) => dispatch => {
  fetch(`https://api.themoviedb.org/3/person/${personId}?api_key=${apikey}&language=en-US&token=${token}`)
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
      results: results['cast'].slice(0, 10)
    }))
}