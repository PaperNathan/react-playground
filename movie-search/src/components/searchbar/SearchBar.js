import React from 'react';

import Button from '../buttonA/ButtonA';

import './searchbar.css';


class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movieTitle: ""
        }

    }

    render() {
        return (
            <div>
                <form>
                    <input className='search-bar' 
                           placeholder="Move Title" 
                           onChange={this.props.handleChange.bind(this)}>
                    </input>
                </form>
            </div>
        )
    }
}

export default SearchBar;
