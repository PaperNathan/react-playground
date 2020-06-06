import React from 'react';

import './card.css';

class Card extends React.Component {
    render() {
        let { Poster, Title, imdbID } = this.props.data
        return (
            <div className="card">
                <img src={Poster} alt="movie-poster"/>
                <p>{Title}</p>
                <a href={'https://www.imdb.com/title/' + imdbID}>IMDB</a>
            </div>
        )
    }
}

export default Card;
