import React from 'react';
import { Provider } from 'react-redux';
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



// export const StoreContext = createContext();
// console.log('Store Context has created',StoreContext);

// //We create class for future modification easily
// class Provider extends React.Component{
//     render(){
//         const { store } =this.props;
//         return (
//             <StoreContext.Provider value={store}>
//                 {this.props.children}             {/** whenever this wrapper is used this will apply on every children, every component inside this class is its children */}
//             </StoreContext.Provider>
//         );
//     }
// }

// //Connect Function 
// export function connect(callback){
//     return function(Component){
//         class ConnectedComponent extends React.Component{
//             constructor(props){
//                 super(props);
//                 this.unsubscribe = this.props.store.subscribe(()=>this.forceUpdate());   // this will return a function which we will assign to unsubscribe so that no memory leaks
//             }
            

//             //unsubscribe will be used so that when the component destroy the session, it will automatically unsubscribed it
//             componentWillUnmount(){
//                 this.unsubscribe();
//             }

//             render(){
//                 const { store } = this.props;
//                 const state = store.getState();
//                 const dataTobePassedAsProps = callback(state);
//                 return <Component {...dataTobePassedAsProps} dispatch={store.dispatch}/>
//             }
//         }

//         class ConnectedComponentWrapper extends React.Component{
//             render(){
//                 return <StoreContext.Consumer>
//                     {
//                         store=><ConnectedComponent store={store}/>
//                     }
//                 </StoreContext.Consumer>
//             }
//         }
//         return ConnectedComponentWrapper;
//     }
// }

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

