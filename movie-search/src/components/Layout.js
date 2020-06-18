import React from 'react';

import SearchBar from './searchbar/SearchBar';
import Button from './buttonA/ButtonA';
import Card from './card/Card';

import secret from '../secret.json';

class Layout extends React.Component {
    state={
        movie: "",
        cards: []
    }

    handleChange = (e) => {
        let movieTitleFormat = "s=" + e.target.value.split(' ').join('+');
        this.setState({
            movie: movieTitleFormat
        })
    }

    buildCards = (movies) => {
        let movieArray = [];
        movies.map(movie => movieArray.push(<Card data={movie} />));
        this.setState({
            cards: movieArray
        })
    }

    getMovie = () => {
        if (this.state.movie !== "") {
            let req = "http://www.omdbapi.com/?apikey=" + secret.key + "&" + this.state.movie;
            fetch(req)
                .then(res => res.json())
                .then(data => {
                    console.log(data.Search);
                    this.buildCards(data.Search)
                });
        } else {
            console.log('You need to enter a movie title');
        }
    }

    render() {
        return (
            <>
                <div className="container">
                    <SearchBar handleChange={this.handleChange} />
                    <Button text="Search" handleClick={this.getMovie} />
                </div>
                {this.state.cards}
            </>
        )
    }
}

export default Layout;
