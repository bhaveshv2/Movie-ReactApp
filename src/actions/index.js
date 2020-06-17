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

 