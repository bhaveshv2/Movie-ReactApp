// {
//     type:'ADD_MOVIES',
//     movies:[m1,m2,m3]
// }
// {
//     type:'DECREASE_COUNT'
// }

//action types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITE = 'ADD_FAVOURITE';
export const REMOVE_FAVOURTIE = 'REMOVE_FAVOURTIE';
export const SHOW_FAVOURITES = 'SHOW_FAVOURITES';
export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT';
export const ADD_MOVIE_TO_LIST = 'ADD_MOVIE_TO_LIST';

//action creators
export function addMovies(movies){
    return {
        type:ADD_MOVIES,
        movies
      }
}

export function addFavourite(movie){
    return {
        type:ADD_FAVOURITE,
        movie
      }
}

export function removeFavourite(movie){
    return {
        type:REMOVE_FAVOURTIE,
        movie
      }
}

export function showFavourties(bool){
    return {
        type:SHOW_FAVOURITES,
        bool
    }
}

export function addMovieToList(movie){
    return{
        type:ADD_MOVIE_TO_LIST,
        movie
    }
}

export function handleMovieSearch(movie){
    const url = `http://www.omdbapi.com/?apikey=d95e84e4&t=${movie}`;
    //async action
    return function(dispatch){
        fetch(url)
        .then(response=>response.json())
        .then(movie=>{
            console.log(movie);

            //dipsatch an action ===>  
            dispatch(addMovieSearchResult(movie));
        })
    }
}

export function addMovieSearchResult(movie){
    return {
        type:ADD_SEARCH_RESULT,
        movie
    }
} 