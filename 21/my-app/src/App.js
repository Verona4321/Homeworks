import logo from './logo.svg';
import './App.css';
import React from 'react';
import MyChart from './MyChart.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyChart />
      </header>
    </div>
  );
}

export default App;
