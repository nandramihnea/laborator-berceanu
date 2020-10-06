import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Acreditari from './components/Acreditari/Acreditari';
import Contact from './components/Contact/Contact';
import ListaPreturi from './components/ListaPreturi/ListaPreturi';
import Layout from './components/Layout/Layout';

const App = () => {
  let routes = (
    <Switch>
      <Route path="/acreditari" component={Acreditari} />
      <Route path="/contact" component={Contact} />
      <Route path="/lista-preturi" component={ListaPreturi} />
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
