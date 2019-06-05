import React from 'react';
import { useGlobal } from 'reactn';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SmartTrash from './pages/SmartTrash';
import Login from './pages/Login';

const Router = () => {
  const [user] = useGlobal('user');

  if (!user) return <Login />;

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SmartTrash} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
