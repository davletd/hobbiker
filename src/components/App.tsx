import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import Body from './Body';
import Create from './Create';
import styles from './App.module.scss';

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <header className={styles.AppHeader}>
          <Link to="/create" className="button">Create</Link>
        </header>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/">
            <Body 
              error={null} 
              items={[]} 
              isLoaded={false} 
            />
          </Route>
        </Switch>  
      </div>
    </Router>
  );
}

export default App;
