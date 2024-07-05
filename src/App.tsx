import React from 'react';
import logo from './logo.svg';
import './App.css';
import Section from './components/section';
import Header from './components/header';


function App() {
  return (
    <div className="App">
      <Header />
      <Section type={"banner"}/>
      <Section type={"sessao1"}/>
      <Section type={"cards"} layout={"layout"}/> 
      <Section type={"CTA"}/>
      <Section type={"sessao2"}/>
    </div>
  );
}

export default App;
