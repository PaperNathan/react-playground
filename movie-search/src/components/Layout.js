import React from 'react';

import SearchBar from './searchbar/SearchBar';
import Card from './card/Card';

class Layout extends React.Component {
    render() {
        return (
            <div className="container">
                <SearchBar />
                <Card />
            </div>
        )
    }
}

export default Layout;