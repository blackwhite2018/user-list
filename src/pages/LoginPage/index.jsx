import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/app';
import LoginForm from '../../components/LoginForm';
import { Grid, Message } from 'semantic-ui-react';

const LoginPage = () => {
  const dispatch = useDispatch();
  const requestError = useSelector(({ app: { requestError } }) => requestError);

  const handleSubmit = (values) => {
    login(dispatch, values);
  };

  return (
    <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <LoginForm onSubmit={handleSubmit} />
        {requestError && (
          <Message
            negative
            header="Authorization failed"
            content="Please try again"
          />
        )}
      </Grid.Column>
    </Grid>
  );
};

export { LoginPage };
