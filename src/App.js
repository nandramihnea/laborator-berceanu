import React from 'react';
import './App.css';

import Layout from './components/Layout/Layout';
import Sidebar from './components/Sidebar/Sidebar';

const App = (props) => {
  return (
    <div className="App">
      <Layout>
        <Sidebar />
        {props.children}
      </Layout>
    </div>
  );
}

export default App;
