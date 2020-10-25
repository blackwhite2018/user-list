import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import { LoginPage } from '../pages/LoginPage';
import { UsersListPage } from '../pages/UsersListPage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { Preloader } from '../components/Preloader';
import AddUser from '../pages/AddUser';

import { PrivateRoute } from './PrivateRouter';
import { NotLoggedRoute } from './NotLoggedRoute';

const MainRouter = () => {
  const isLoading = useSelector(({ app: { isLoading } }) => isLoading);

  return (
    <>
      <Switch>
        <NotLoggedRoute path="/" exact component={LoginPage} />
        <PrivateRoute exact path="/users-list" component={UsersListPage} />
        <PrivateRoute path="/add-user" component={AddUser} />
        <Route component={NotFoundPage} />
      </Switch>
      {isLoading && <Preloader />}
    </>
  );
};

export { MainRouter };
