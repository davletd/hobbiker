import React from 'react';
import logo from './logo.svg';
import Card from './Card';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
      </header>
      <Card />
    </div>
  );
}

export default App;
