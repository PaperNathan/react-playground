import React from 'react';
import './App.css';

import FormPost from './components/formPost/FormPost';

class App extends React.Component {
  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <FormPost />
      </div>
    );
  }
}

export default App;
