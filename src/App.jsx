import React from 'react';
import './styles/App.css';
import Tabs from './components/Tabs';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="left-container">
          <h1>Some Text for First Container</h1>
          <p>This container contains descriptive text.</p>
        </div>
        <div className="right-container">
          <Tabs />
          <Gallery />
        </div>
      </div>
    </div>
  );
}

export default App;
