import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import LazyLoader from './components/LazyLoader/LazyLoader';
import './App.scss';

const CustomHooksPage = React.lazy(() => import('./pages/CustomHooksPage/CustomHooksPage'));

function App() {
  return (
    <Router>
    <Header />
      <Switch>
        <Route exact path="/" component={LazyLoader(CustomHooksPage)} />
      </Switch>
  </Router>
  );
}

export default App;
