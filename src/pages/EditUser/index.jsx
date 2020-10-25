import React from 'react';
import UserCredentialsForm from '../../components/UserCredentialsForm';
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from '../../actions/app';
import { Icon } from 'semantic-ui-react';
import { reset } from 'redux-form';
import { Layout } from '../../components/Layout';
import { withRouter } from 'react-router-dom';
import { Message } from 'semantic-ui-react';

const EditUser = ({ history: { goBack } }) => {
  const dispatch = useDispatch();
  const requestError = useSelector(({ app: { requestError } }) => requestError);
  const requestSuccess = useSelector(
    ({ app: { requestSuccess } }) => requestSuccess
  );

  const handleSubmit = (userCredentials) => {
    addUser(dispatch, userCredentials)
      .then(() => dispatch(reset('user-credentials-form')))
      .catch(() => {});
  };

  return (
    <Layout>
      <div className="credentials-block">
        <Icon
          size="large"
          style={{ marginBottom: '15px' }}
          name="arrow left"
          onClick={goBack}
        />
        <UserCredentialsForm onSubmit={handleSubmit} />
        {requestError && (
          <Message
            negative
            header="Failed registration attempt"
            content="Please try again"
          />
        )}
        {requestSuccess && (
          <Message
            success
            header="Your user registration was successful"
            content="You may now log-in with the username you have chosen"
          />
        )}
      </div>
    </Layout>
  );
};

export default withRouter(EditUser);
