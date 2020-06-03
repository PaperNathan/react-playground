import React from 'react';

import Button from '../buttonA/ButtonA';

import './searchbar.css';
import secret from '../../secret.json';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.getMovies = this.getMovies.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            movieTitle: ""
        }

    }

    handleChange() {
        this.setState((state) => {
            return state.movieTitle = "Guardians+Of+The+Galaxy";
        });
    }

    getMovies() {
        
    }

    render() {
        return (
            <div>
                <form>
                    <input className='search-bar' 
                           placeholder="Move Title" 
                           onChange={this.handleChange()}>
                    </input>

                    <Button text='Search' onClick={this.getMovies()} />
                </form>
            </div>
        )
    }
}

export default SearchBar;