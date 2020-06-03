import React from 'react';

import './App.css';
import drinks from './drinks.json';

import Glass from './components/Glass';

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        drink: drinks[this.randomDrink()],
      }
  }
  
  randomDrink = () => {
    return Math.floor(Math.random() * drinks.length);
  }

  renderIngredientList = (drink) => {
      let ingredientList = [];

      let { ingredients, amounts, units } = drink;

      for (let i=0; i<ingredients.length; i++) {
          let ingredient = (
              <div className="ingredient-info">
                  <div className={`ingredient-shape ${ingredients[i]}`}></div>
                  <p>{`${amounts[i]} ${units} of ${ingredients[i]}`}</p>
              </div>
          );
          ingredientList.push(ingredient)
      }
      return ingredientList;
  }

  updateDrink = () => {
    this.setState((state) => {
      return state = {
        drink: drinks[this.randomDrink()],
      }
    })
  }

  render() {

    return (
      <div>
          <div className="drink-container" onClick={this.updateDrink}>
            <Glass drink={this.state.drink}/>
          </div>

          <div className="ingredient-list">
              {this.renderIngredientList(this.state.drink)}
          </div>
      </div>
    );
  }
}

export default App;
