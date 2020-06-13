import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import './App.css';
import Layout from '../../components/Layout';
import WineList from '../WineList';
import WineDetail from '../WineDetail';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/'>
            <WineList />
          </Route>
          <Route exact path='/wine/:lotCode'>
            <WineDetail />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
