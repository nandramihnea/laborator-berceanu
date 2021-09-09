import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';

const App = () => {
  let routes = (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  )

  return (
    <BrowserRouter>
      <Layout>
        {routes}
      </Layout>
    </BrowserRouter>
  );
}

export default App;
