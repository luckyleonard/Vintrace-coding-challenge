import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import './App.css';
import Layout from '../../components/Layout';
import WineList from '../WineList';
import WineDetail from '../WineDetail';
import api_request from '../../utils/apiHelper';
import url from '../../utils/urlList';

function App() {
  const [searchInput, setSearchInput] = useState('');
  const [winesData, setWinesData] = useState([]);

  useEffect(() => {
    api_request({ url: url.getAllWines() }).then((res) =>
      setWinesData(res.data)
    );
  }, []);

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <Router>
      <Layout searchInput={searchInput} handleSearchChange={handleSearchChange}>
        <Switch>
          <Route exact path='/'>
            <WineList winesData={winesData} searchInput={searchInput} />
          </Route>
          <Route exact path='/wine/:lotCode'>
            <WineDetail winesData={winesData} />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
