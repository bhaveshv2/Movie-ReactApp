import React from 'react';
import ReactDOM from 'react-dom';
import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './components/App';
import rootReducer from './reducers';


//fumction logger(obj,next,action) ====>   logger(obj)(next)(action)

// const logger = function({dispatch,getState}){
//     return function(next){
//         return function(action){
//             //midlewate here
//             console.log('Action_Type : ',action.type);
//             next(action);
//         }
//     }
// }

const logger = ({dispatch,getState}) => (next) => (action)=>{
    //middleware code
    if(typeof action!=='function'){
        console.log('Action_Type : ',action.type);
    }
    next(action);
}

/*Thunks are the recommended middleware for basic Redux side effects logic, 
including complex synchronous logic that needs access to the store, and simple async logic like AJAX requests.
In simple Language, thunk is basically used for async action or function to treat as sync action because action generally a object*/
// const thunk = ({dispatch,getState}) => (next) => (action)=>{
//     //middleware code
//     if(typeof action === 'function'){
//         action(dispatch);
//         return;
//     }
//     next(action);
// }

const store = createStore(rootReducer,applyMiddleware(logger,thunk));
console.log('Store has been uploaded successfully!',store);
// console.log('BEFORE STATE:',store.getState());

// store.dispatch({
//     type:'ADD_MOVIES',
//     movies:[{name:'superman'}]
// });

// console.log('after STATE:',store.getState());


ReactDOM.render(<App store={store}/>,document.getElementById('root'));

