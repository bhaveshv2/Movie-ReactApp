import {ADD_MOVIES,ADD_FAVOURITE,REMOVE_FAVOURTIE,SHOW_FAVOURITES,ADD_MOVIE_TO_LIST,ADD_SEARCH_RESULT} from '../actions/index';
import {combineReducers} from'redux';


//Movies Reducer
const initialMoviesState = {
    list:[],
    favourites:[],
    showFavourites:false
};
export function movies(state=initialMoviesState,action){
    // if(action.type===ADD_MOVIES){
    //     return {
    //         ...state,
    //         list:action.movies
    //     }
    // }
    // return state;
    console.log('MOVIES REDUCER');

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

        case ADD_MOVIE_TO_LIST:
            return{
                ...state,
                list:[action.movie, ...state.list]
            }
        default: 
            return state;
    }
}

//Search Reducer
const initialSearchState={
    result:{},
    showSearchResults:false
};
export function search (state=initialSearchState , action){
    console.log('SEARCH REDUCER');
    switch(action.type){
        case ADD_SEARCH_RESULT:
            return {
                ...state,
                result:action.movie,
                showSearchResults:true
            }
        case ADD_MOVIE_TO_LIST:
            return{
                ...state,
                showSearchResults:false
            }
        default:
            return state;

    }
    
}


//Root Reducer in which all the reducers got combine(default reducer)

// const initialRootState={
//     movies:initialMoviesState,
//     search:initialSearchState
// };
// export default function rootReducer(state=initialRootState,action){
//     return {
//         movies:movies(state.movies,action),
//         search:search(state.search,action)
//     };
// }

//pass references of above reducers in the object
export default combineReducers({
    movies,  
    search
})