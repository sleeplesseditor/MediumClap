import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import LazyLoader from './components/LazyLoader/LazyLoader';
import './App.scss';

const MediumClapPage = React.lazy(() => import('./pages/MediumClapPage/MediumClapPage'));

function App() {
  return (
    <Router>
    <Header />
      <Switch>
        <Route exact path="/" component={LazyLoader(MediumClapPage)} />
      </Switch>
  </Router>
  );
}

export default App;
