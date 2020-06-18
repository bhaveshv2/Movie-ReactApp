import React from 'react';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import {data} from '../data';
import {addMovies,showFavourties} from '../actions/index';

class App extends React.Component {
  componentDidMount(){
    //make api call
    //Dispatch action
    const {store} = this.props;
    
    store.subscribe(()=>{
      console.log('Store Subscribed!');
      this.forceUpdate();
    });

    store.dispatch(addMovies(data));

    console.log('STATE',store.getState());
  }

  isMovieFavourite = (movie) =>{
    const {movies} = this.props.store.getState();

    const index = movies.favourites.indexOf(movie);

    if(index !== -1){
      //found the movie
      return true;
    }
    return false;
  }

  onChangeTab=(bool)=>{
    this.props.store.dispatch(showFavourties(bool))
  }

  render(){
    const { movies } = this.props.store.getState();           //{movies:{},search:{}}
    const {list,favourites,showFavourites} = movies;               

    const displayMovies = showFavourites ? favourites : list;
    
    console.log('rendered' ,this.props.store.getState());
    return (
      <div className="App">
        <Navbar dispatch={this.props.store.dispatch}/>
        <div className="main">
          <div className="tabs">
            <div className={`tab ${showFavourites ? '' : 'active-tabs'}`} onClick={()=>this.onChangeTab(false)}>Movies</div>
            <div className={`tab ${showFavourites ? 'active-tabs' : ''}`} onClick={()=>this.onChangeTab(true)}>Favourites</div>
          </div>
          <div className="list">
            {displayMovies.map((movie,index)=>(
              <MovieCard movie={movie} key={`movies=${index}`} dispatch={this.props.store.dispatch} isFavourite={this.isMovieFavourite(movie)}/>
            ))}
          </div>
          {displayMovies.length===0?<div className="no-movies">No Movies yet!</div>:null}
        </div>
      </div>
    );
  }
}

export default App;
