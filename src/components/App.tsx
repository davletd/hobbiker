import React from 'react';
import logo from './logo.svg';
import Body from './Body';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
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
