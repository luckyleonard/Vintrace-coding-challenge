import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import './App.css';
import Layout from '../../components/Layout';
import WineList from '../WineList';
import WineDetail from '../WineDetail';

function App() {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route excat path='/'>
            <WineList />
          </Route>
          <Route excat path='/wine/:lotCode'>
            <WineDetail />
          </Route>
        </Switch>
      </Router>
    </Layout>
  );
}

export default App;
