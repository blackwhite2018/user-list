import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const NotLoggedRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem('authToken');
  return (
    <Route
      {...rest}
      render={(props) => {
        return !token ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/users-list',
              state: { from: props.location },
            }}
          />
        );
      }}
    />
  );
};

export { NotLoggedRoute };
