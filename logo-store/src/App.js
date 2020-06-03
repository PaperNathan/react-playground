import React from 'react';

// CSS
import './styles/App.css';

// Data
import data from './data/inventory.json'

// Components
import Track from './components/Track';

class App extends React.Component {
  state = {
    'cart': [],
    'total': 0,
  }

  updateCart = (id) => {
    this.setState((state) => {
      return state = {
        cart: [...state.cart, data[id]],
        total: state.total + data[id].price
      }
    })
  }

  showCart = () => {
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <Track addLineItem={this.updateCart} />
        <button onClick={this.showCart}>Purchase</button>
      </div>
    );
  }
}

export default App;
