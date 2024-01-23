import React from 'react';
import logo from './logo.svg';
import './App.css';
import Section from './components/section';


function App() {
  return (
    <div className="App">
      <Section type={"banner"}/>
      <Section type={"sessao1"}/>
      <Section type={"cards"}/>
      <Section type={"CTA"}/>
      <Section type={"sessao2"}/>
    </div>
  );
}

export default App;
