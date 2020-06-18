import React from 'react';
import ReactDOM from 'react-dom';
import { createStore,applyMiddleware } from 'redux';


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
    console.log('Action_Type : ',action.type);
    next(action);
}

const store = createStore(rootReducer,applyMiddleware(logger));
console.log('Store has been uploaded successfully!',store);
// console.log('BEFORE STATE:',store.getState());

// store.dispatch({
//     type:'ADD_MOVIES',
//     movies:[{name:'superman'}]
// });

// console.log('after STATE:',store.getState());


ReactDOM.render(<App store={store}/>,document.getElementById('root'));

