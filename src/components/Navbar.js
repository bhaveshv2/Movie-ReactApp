import React from 'react';
import {handleMovieSearch} from '../actions/index';


class Navbar extends React.Component{

    constructor(props){
        super(props);
        this.state={
            searchText:''
        }
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
        return(
            <div className="nav">
                <div className="search-container">
                    <input type="text" onChange={this.handleChange}/>
                    <button id="search-btn" onClick={this.handleSearch}>
                        Search 
                    </button>
                </div>
            </div>
        )
    }
}

export default Navbar;