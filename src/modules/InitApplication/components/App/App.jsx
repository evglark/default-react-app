import React from 'react';

import logo from './logo.svg';
import './style.scss';

export const App = () => {
  return (
    <div className="app">
      <div className="app-layout">
        <img src={logo} className="app-logo" alt="logo" />
        <p className="text-secondary">Edit <code>src/App.js</code> and save to reload.</p>
        <a className="app-link" href="https://reactjs.org" target="_blank" rel="noreferrer">Learn React</a>
      </div>
    </div>
  );
};
