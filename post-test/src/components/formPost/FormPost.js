import React from 'react';

import Button from '../buttonA/ButtonA';

import './formpost.css';

class FormPost extends React.Component {
    constructor(props) {
        super(props);
        
        this.changeHandler = this.changeHandler.bind(this);
        this.handleClick = this.handleClick.bind(this);
        
        this.state = {
            name: "",
            email: "",
        }
    }
    
    changeHandler = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
    }
    
    async handleClick() {
        try {
            let url = 'https://ayo.works/orders';
            // let url = 'https://webhook.site/ab4d8c98-acbf-4174-9114-b55404ef6fe4';
            let order = {
                uuid: 'Apparently-this-needs-to-be-unique1',
                line_items: [
                  {
                    uuid: '7cd7f0ef-8265-4593-95ea-dd7c2bb6396d',
                    name: 'Hamburger',
                    price: 875,
                    tax_rate: 0.0625
                  },
                  {
                    uuid: '6d419f88-b53f-49e2-af0a-832444d6ed41',
                    name: 'Water',
                    price: 235,
                    tax_rate: 0.0625
                  },
                  {
                    uuid: '47dfb3e6-b892-40b8-9ce6-f769c6e15537',
                    name: 'Beer',
                    price: 1025,
                    tax_rate: 0.0825
                  }
                ],
                discounts: [
                  {
                    uuid: '88140f25-f314-493b-ad81-32932f1ae4cc',
                    name: '$1 off beer',
                    type: 'amount',
                    amount: 100,
                    apply_to: '47dfb3e6-b892-40b8-9ce6-f769c6e15537'
                  },
                  {
                    uuid: 'b1d52ea0-141b-4363-a42d-3bbd0b851222',
                    name: '10% membership discount',
                    type: 'percent',
                    amount: 0.10,
                    apply_to: 'Apparently-this-needs-to-be-unique1'
                  }
                ]
              };

            let result = await fetch(url, {
                method: 'post',
                // mode: 'no-cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(order)
            });

            alert('Thank you!');
            console.log(result);

        } catch (err) {
            console.log(err);
        }
    }
    
    render() {
        return(
            <form className="FormPost-form" onSubmit={this.submitHandler}>
                <input type="text" 
                       name="name" 
                       value={this.state.name}
                       placeholder="Name"
                       className="FormPost-input" 
                       onChange={this.changeHandler}></input>
                
                <input type="text"
                       name="email"
                       value={this.state.email}
                       placeholder="E-mail"
                       className="FormPost-input" 
                       onChange={this.changeHandler}></input>
                
                <Button name="Submit" 
                        cssName="buttonA" 
                        onClick={this.handleClick}
                        text='Submit' />
            </form>
        )
    }
}

export default FormPost;