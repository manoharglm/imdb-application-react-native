const apikey = "3ebe7f44a343fc7c8c085ccfef4cc493"
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZWJlN2Y0NGEzNDNmYzdjOGMwODVjY2ZlZjRjYzQ5MyIsInN1YiI6IjVjNWU3MmI0YzNhMzY4M2NjZjhkNDM1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XYra3lypk70Rh69HEVdi76crIKkKJZE6KY350cEB3Ow"
// const userWatchList = [{
//   "adult": false,
//   "backdrop_path": "/pmLEmMLYCreFAxfdCt5uO1wDgSi.jpg",
//   "genre_ids": [12, 16, 10751, 35],
//   "id": 9502,
//   "original_language": "en",
//   "original_title": "Kung Fu Panda",
//   "overview": "When the Valley of Peace is threatened, lazy Po the panda discovers his destiny as the \"chosen one\" and trains to become a kung fu hero, but transforming the unsleek slacker into a brave warrior won't be easy. It's up to Master Shifu and the Furious Five -- Tigress, Crane, Mantis, Viper and Monkey -- to give it a try.",
//   "poster_path": "/2Paj1nufT0jeSY0G4u3RC31HIGT.jpg",
//   "release_date": "2008-06-04",
//   "title": "Kung Fu Panda",
//   "video": false,
//   "vote_average": 7.0,
//   "vote_count": 5600,
//   "popularity": 21.989,
//   "media_type": "movie"
// }, {
//   "adult": false,
//   "backdrop_path": "/eyiE1vuizMKVu8MoZkg2xsramFl.jpg",
//   "genre_ids": [16, 10751],
//   "id": 49444,
//   "original_language": "en",
//   "original_title": "Kung Fu Panda 2",
//   "overview": "Po is now living his dream as The Dragon Warrior, protecting the Valley of Peace alongside his friends and fellow kung fu masters, The Furious Five - Tigress, Crane, Mantis, Viper and Monkey. But Po’s new life of awesomeness is threatened by the emergence of a formidable villain, who plans to use a secret, unstoppable weapon to conquer China and destroy kung fu. It is up to Po and The Furious Five to journey across China to face this threat and vanquish it. But how can Po stop a weapon that can stop kung fu? He must look to his past and uncover the secrets of his mysterious origins; only then will he be able to unlock the strength he needs to succeed.",
//   "poster_path": "/Fzyy2dauoKxjUzUPYYo3kJkJAW.jpg",
//   "release_date": "2011-05-25",
//   "title": "Kung Fu Panda 2",
//   "video": false,
//   "vote_average": 6.7,
//   "vote_count": 3315,
//   "popularity": 16.654,
//   "media_type": "movie"
// }, {
//   "id": 38575,
//   "video": false,
//   "vote_count": 2880,
//   "vote_average": 6.3,
//   "title": "The Karate Kid",
//   "release_date": "2010-06-10",
//   "original_language": "en",
//   "original_title": "The Karate Kid",
//   "genre_ids": [28, 12, 18, 10751],
//   "backdrop_path": "/rfhnEYubWD4hnUUm8xXmotpqffb.jpg",
//   "adult": false,
//   "overview": "12-year-old Dre Parker could have been the most popular kid in Detroit, but his mother's latest career move has landed him in China. Dre immediately falls for his classmate Mei Ying but the cultural differences make such a friendship impossible. Even worse, Dre's feelings make him an enemy of the class bully, Cheng. With no friends in a strange land, Dre has nowhere to turn but maintenance man Mr. Han, who is a kung fu master. As Han teaches Dre that kung fu is not about punches and parries, but maturity and calm, Dre realizes that facing down the bullies will be the fight of his life.",
//   "poster_path": "/bucxUHJd1DFy15iHzuXSOoFrObW.jpg",
//   "popularity": 9.711,
//   "media_type": "movie"
// }]
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