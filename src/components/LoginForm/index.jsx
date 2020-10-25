import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Form, Segment } from 'semantic-ui-react';

import { renderInputField } from '../../common/formTools';

const LoginForm = ({ handleSubmit }) => (
  <Form size="large" onSubmit={handleSubmit}>
    <Segment stacked>
      <Field
        name="username"
        type="text"
        icon="user"
        placeholder="E-mail address"
        component={renderInputField}
      />
      <Field
        name="password"
        type="password"
        icon="lock"
        placeholder="Password"
        component={renderInputField}
      />
      <Button color="teal" fluid size="large">
        Login
      </Button>
    </Segment>
  </Form>
);

export default reduxForm({
  form: 'login-form',
})(LoginForm);
