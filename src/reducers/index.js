import {ADD_MOVIES,ADD_FAVOURITE,REMOVE_FAVOURTIE,SHOW_FAVOURITES} from '../actions/index';

const initialMoviesState = {
    list:[],
    favourites:[],
    showFavourites:false
}

export default function movies(state=initialMoviesState,action){
    // if(action.type===ADD_MOVIES){
    //     return {
    //         ...state,
    //         list:action.movies
    //     }
    // }
    // return state;

    switch(action.type){
        case ADD_MOVIES:
            return {
                ...state,
                list:action.movies
            } 

        case ADD_FAVOURITE:
            return {
                ...state,
                favourites:[action.movie, ...state.favourites]          //add the moviw at the first index and fetch all other movies by spreading them
            }

        case REMOVE_FAVOURTIE:
            const filterArray = state.favourites.filter(
                movie=>movie.Title !== action.movie.Title
            )

            return{
                ...state,
                favourites:filterArray 
            }
        
        case SHOW_FAVOURITES:
            return{
                ...state,
                showFavourites:action.bool
            }

        default: 
            return state;
    }
}

