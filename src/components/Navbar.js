import React from 'react';
import {handleMovieSearch,addMovieToList} from '../actions/index';


class Navbar extends React.Component{

    constructor(props){
        super(props);
        this.state={
            searchText:'',
        }
    }

    //function for add movie to list
    handleAddToMovies = (movie)=>{
        this.props.dispatch(addMovieToList(movie));
        this.setState({
            showSearchResults:false
        });
    }

    //function for handling the search
    handleSearch = ()=>{
        const {searchText} = this.state;

        //we can call API over here but we don't as the UI is seperate so keep it seperate logic.
        this.props.dispatch(handleMovieSearch(searchText));
    };

    //Function for keep tracking of change or keywords
    handleChange = (e) =>{
        this.setState({
            searchText:e.target.value,
        });
    };

    render(){
        const {result,showSearchResults} = this.props.search;

        return(
            <div className="nav">
                <div className="search-container">
                    <input type="text" onChange={this.handleChange}/>
                    <button id="search-btn" onClick={this.handleSearch}>
                        Search 
                    </button>

                    {
                        showSearchResults && 
                        <div className="search-results">
                            <div className="search-result">
                                <img src={result.Poster} alt="search-pic"/>

                                <div className="movie-info">
                                    <span>{result.Title}</span>
                                    <button onClick={()=>this.handleAddToMovies(result)}>Add to Movies</button>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default Navbar;