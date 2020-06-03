import React from 'react';
import './App.css';

import * as Buttons from './components/buttons';

class App extends React.Component {

  getButton(selectedButton) {
    let Component = Buttons[selectedButton];
    return <Component />;
  }

  render() {

    return (
      <div>{this.getButton('ButtonA')}</div>
    );
  }
  
}

export default App;
