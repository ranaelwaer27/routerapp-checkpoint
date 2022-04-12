// {
//   type: "ADD_MOVIE";
// }
// export const ADD_FAVOURITE = "ADD_FAVOURITE";
// export const ADD_MOVIE = "ADD_MOVIE";
// export const ADD_SEARCH_RESULT = "ADD_SEARCH_RESULT";
// export const SET_FAVOURITE = "SET_FAVOURITE";
// export const ADD_MOVIE_TO_LIST = "ADD_MOVIE_TO_LIST";
// export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";
// export function addMovies(movies) {
//   return {
//     type: ADD_MOVIE,
//     movies
//   };
// }
// export function setfavourite(val) {
//   return {
//     type: SET_FAVOURITE,
//     val
//   };
// }

// export function addFavourite(movie) {
//   return {
//     type: ADD_FAVOURITE,
//     movie
//   };
// }

// export function removefavourite(movie) {
//   return {
//     type: REMOVE_FROM_FAVOURITE,
//     movie
//   };
// }
// export function addMovieToList(movie) {
//   return {
//     type: ADD_MOVIE_TO_LIST,
//     movie
//   };
// }
// export function handleMovieSearch(movie) {
//   const url = `http://www.omdbapi.com/?apikey=152f7a92&t=${movie}`;

//   return function (dispatch) {
//     fetch(url)
//       .then((response) => response.json())
//       .then((movie) => {
//         console.log("Movie", movie);
//         //dispatch an action
//         dispatch(addMovietosearchresult(movie));
//       });
//   };
// }
// export function addMovietosearchresult(movie) {
//   return {
//     type: ADD_SEARCH_RESULT,
//     movie
//   };
//}
// action types
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";
export const SET_SHOW_FAVOURITES = "SET_SHOW_FAVOURITES";
export const ADD_MOVIE_TO_LIST = "ADD_MOVIE_TO_LIST";
export const ADD_SEARCH_RESULT = "ADD_SEARCH_RESULT";

// action creators
export function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    movies
  };
}

export function addToFavourites(movie) {
  return {
    type: ADD_TO_FAVOURITES,
    movie
  };
}

export function setShowFavourites(val) {
  return {
    type: SET_SHOW_FAVOURITES,
    val
  };
}

export function removeFromFavourites(movie) {
  return {
    type: REMOVE_FROM_FAVOURITES,
    movie
  };
}

export function addMovieToList(movie) {
  return {
    type: ADD_MOVIE_TO_LIST,
    movie
  };
}

export function handleMovieSearch(searchText) {
  return function (dispatch) {
    const url = `http://www.omdbapi.com/?apikey=3ca5df7&t=${searchText}`;
    fetch(url)
      .then((response) => response.json())
      .then((movie) => {
        console.log("movie", movie);
        // dispatch action to save search results in store
        dispatch(addMovieSearchResult(movie));
      });
  };
}

export function addMovieSearchResult(movie) {
  return {
    type: ADD_SEARCH_RESULT,
    movie
  };
}