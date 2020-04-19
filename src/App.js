import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import LazyLoader from './components/LazyLoader/LazyLoader';
import './App.scss';

const CustomHooksPage = React.lazy(() => import('./pages/CustomHooksPage/CustomHooksPage'));
const CompoundComponentPage = React.lazy(() => import('./pages/CompoundComponentPage/CompoundComponentPage'));
const StylesPropPage = React.lazy(() => import('./pages/StylesPropPage/StylesPropPage'));

function App() {
  return (
    <Router>
    <Header />
      <Switch>
        <Route exact path="/" component={LazyLoader(CustomHooksPage)} />
        <Route exact path="/compound-component" component={LazyLoader(CompoundComponentPage)} />
        <Route exact path="/styles-prop" component={LazyLoader(StylesPropPage)} />
      </Switch>
  </Router>
  );
}

export default App;
