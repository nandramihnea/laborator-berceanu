import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import './typography.css';

import Acreditari from './pages/Acreditari/Acreditari';
import ListaPreturi from './pages/ListaPreturi/ListaPreturi';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';

const App = () => {
  let routes = (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/acreditari" component={Acreditari} />
      <Route path="/lista-preturi" component={ListaPreturi} />
    </Switch>
  )

  return (
    <BrowserRouter>
      <Layout className='text-neutral-9'>
        {routes}
      </Layout>
    </BrowserRouter>
  );
}

export default App;
