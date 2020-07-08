import React from 'react';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import {data} from '../data';
import {addMovies,showFavourties} from '../actions/index';
// import {connect} from '../index';
import { connect } from 'react-redux';

class App extends React.Component {
  componentDidMount(){
    //make api call
    //Dispatch action
    // const {store} = this.props;
    
    //Not required Subscribe method as it already is been use in connect and work automatically
    // store.subscribe(()=>{
    //   this.forceUpdate();
    // });


    this.props.dispatch(addMovies(data));

    // console.log('STATE',store.getState());
  }

  isMovieFavourite = (movie) =>{
    const {movies} = this.props;

    const index = movies.favourites.indexOf(movie);

    if(index !== -1){
      //found the movie
      return true;
    }
    return false;
  }

  onChangeTab=(bool)=>{
    this.props.dispatch(showFavourties(bool))
  }

  render(){
    const { movies,search } = this.props;           //{movies:{},search:{}}
    const {list,favourites=[],showFavourites=[]} = movies;               
    const displayMovies = showFavourites ? favourites : list;
    
    console.log('Rendered' ,this.props);
    return (
      <div className="App">
        <Navbar dispatch={this.props.dispatch} search={search}/>
        <div className="main">
          <div className="tabs">
            <div className={`tab ${showFavourites ? '' : 'active-tabs'}`} onClick={()=>this.onChangeTab(false)}>Movies</div>
            <div className={`tab ${showFavourites ? 'active-tabs' : ''}`} onClick={()=>this.onChangeTab(true)}>Favourites</div>
          </div>
          <div className="list">
            {displayMovies.map((movie,index)=>(
              <MovieCard movie={movie} key={movie.imdbID} dispatch={this.props.dispatch} isFavourite={this.isMovieFavourite(movie)}/>
            ))}
          </div>
          {displayMovies.length===0?<div className="no-movies">No Movies yet!</div>:null}
        </div>
      </div>
    );
  }
}

// class AppWrapper extends React.Component{
//   render(){
//     return (
//       <StoreContext.Consumer>
//         {(store)=> <App store={store} />}            {/** here callback can be anything but in class we are passing the value={store} so we're use that */}
//       </StoreContext.Consumer>
//     )
//   }
// }

function mapStateToProps(state){
  return{
    movies:state.movies,
    search: state.movies
  }
}
const connectedAppComponent = connect(mapStateToProps)(App);

export default connectedAppComponent;
