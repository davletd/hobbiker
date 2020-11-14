import React from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import logo from './logo.svg';
import Body from './Body';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <button className="button">Button</button>
      </header>
      <Body 
        error={null} 
        items={[]} 
        isLoaded={false} 
      />
    </div>
  );
}

export default App;
