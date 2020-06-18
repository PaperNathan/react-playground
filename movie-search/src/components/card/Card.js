import React from 'react';

import './card.css';

class Card extends React.Component {
    render() {
        let { Poster, Title, imdbID } = this.props.data
        return (
            <a className="imdb-link" href={'https://www.imdb.com/title/' + imdbID}>
                <div className="card">
                    <img src={Poster} alt="movie-poster"/>
                    <p className="card-title">{Title}</p>
                </div>
            </a>
        )
    }
}

export default Card;
