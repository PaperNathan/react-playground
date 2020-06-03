import React from 'react';

// CSS
import './styles/App.css';

// Data
import data from './data/inventory.json'

// Components
import Track from './components/Track';
import Button from './components/ButtonA';
import Receipt from './components/Receipt';

class App extends React.Component {
  state = {
    'cart': [],
    'total': 0,
    'receipt': false
  }

  updateCart = (id) => {
    if (!this.state.receipt) {
      this.setState((state) => {
        return state = {
          cart: [...state.cart, data[id]],
          total: state.total + data[id].price
        }
      });
    }
  }

  showCart = () => {
    this.setState((state) => {
      return state = {
        'receipt': !this.state.receipt
      }
    })
    console.log(this.state.cart, this.state.total);
  }

  render() {
    return (
      <div className="App">
        <Track addLineItem={this.updateCart} />
        <Button onClick={this.showCart} text="Purchase"></Button>
        {this.state.receipt?
          <Receipt items={this.state.cart} total={this.state.total} />:
          <div></div>
        }
      </div>
    );
  }
}

export default App;
