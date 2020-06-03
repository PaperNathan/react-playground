import React from 'react';

export default class Drink extends React.Component {
    constructor(props) {
        super(props);

        this.dealWithIngredients = this.dealWithIngredients.bind(this);
    }

    componentDidMount() {
        
    }

    dealWithIngredients = (drink) => {
        let ingredients = drink.ingredients;
        let amount = drink.amounts;

        let drinkLayout = [];

        for (let i=0; i<ingredients.length; i++) {
            drinkLayout.push(<div className={`ingredient ${ingredients[i]}`} style={{flex: amount[i]}}></div>)
        }
        
        return drinkLayout;
    }

    render() {
        return (
            <div className="drink">{this.dealWithIngredients(this.props.drink)}</div>
        )
    }
}
