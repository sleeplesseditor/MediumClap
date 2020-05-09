import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import LazyLoader from './components/LazyLoader/LazyLoader';
import './App.scss';

const CustomHooksPage = React.lazy(() => import('./pages/CustomHooksPage/CustomHooksPage'));
const CompoundComponentPage = React.lazy(() => import('./pages/CompoundComponentPage/CompoundComponentPage'));
const StylesPropPage = React.lazy(() => import('./pages/StylesPropPage/StylesPropPage'));
const ControlPropsPage = React.lazy(() => import('./pages/ControlPropsPage/ControlPropsPage'));
const FoundationHooksPage = React.lazy(() => import('./pages/FoundationHooksPage/FoundationHooksPage'));
const PropsCollectionPage = React.lazy(() => import('./pages/PropsCollectionPage/PropsCollectionPage'));
const PropsGetterPage = React.lazy(() => import('./pages/PropsGetterPage/PropsGetterPage'));
const StateInitializerPage = React.lazy(() => import('./pages/StateInitializerPage/StateInitializerPage'));
const StateReducerPage = React.lazy(() => import('./pages/StateReducerPage/StateReducerPage'));

function App() {
  return (
    <Router>
    <Header />
      <Switch>
        <Route exact path="/" component={LazyLoader(CustomHooksPage)} />
        <Route exact path="/compound-component" component={LazyLoader(CompoundComponentPage)} />
        <Route exact path="/styles-prop" component={LazyLoader(StylesPropPage)} />
        <Route exact path="/control-props" component={LazyLoader(ControlPropsPage)} />
        <Route exact path="/foundation-hooks" component={LazyLoader(FoundationHooksPage)} />
        <Route exact path="/props-collection" component={LazyLoader(PropsCollectionPage)} />
        <Route exact path="/props-getter" component={LazyLoader(PropsGetterPage)} />
        <Route exact path="/state-initializer" component={LazyLoader(StateInitializerPage)} />
        <Route exact path="/state-reducer" component={LazyLoader(StateReducerPage)} />
      </Switch>
  </Router>
  );
}

export default App;
