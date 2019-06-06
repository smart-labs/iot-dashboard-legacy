import React from 'react';
import { useGlobal } from 'reactn';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Overview from './pages/Overview';
import SmartTrash from './pages/SmartTrash';
import AirConditioning from './pages/AirConditioning';

const Router = () => {
  const [user] = useGlobal('user');

  if (!user) return <Login />;

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Overview} />
        <Route path="/trash" exact component={SmartTrash} />
        <Route path="/ac" exact component={AirConditioning} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
