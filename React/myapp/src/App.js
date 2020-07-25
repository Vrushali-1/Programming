import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';
import GreetC from './Components/GreetC';
import Message from './Components/Message';
import Event from './Components/Event'

function App() {
  return (
    <div className="App">
      <Greet name="Vrushali"><button>Hello Vrushali</button></Greet>
      <Greet name="Samrat"/>
      <GreetC name="Tanvi"/>
      <GreetC name="Omkar"/>
      <Message></Message>
      <Event/>
    </div>
  );
}

export default App;
