import React, {useState, useEffect} from 'react';
import socketIOClient from "socket.io-client";

import Stage from './components/Stage';

import './App.css';

// const ENDPOINT = "http://127.0.0.1:3001";

function App() {
  // const [response, setResponse] = useState("");

  // useEffect(() => {
  //   const socket = socketIOClient(ENDPOINT);
  //   socket.on("FromAPI", (data) => {
  //     setResponse(data);
  //   });
  // }, []);

  return (
    <div className="App">
      <Stage />
    </div>
  );
}

export default App;
