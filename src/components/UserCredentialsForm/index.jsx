import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Form, Segment } from 'semantic-ui-react';
import {
  renderInputField,
  renderCheckboxField,
  isRequired,
  isSafePassword,
} from '../../common/formTools';

const UserCredentialsForm = ({ handleSubmit }) => {
  return (
    <Form size="large" onSubmit={handleSubmit}>
      <Segment stacked>
        <Field
          name="first_name"
          type="text"
          placeholder="First Name"
          component={renderInputField}
        />
        <Field
          name="last_name"
          type="text"
          placeholder="Last Name"
          component={renderInputField}
        />
        <Field
          name="username"
          type="text"
          placeholder="Username"
          validate={[isRequired]}
          component={renderInputField}
        />
        <Field
          name="password"
          type="password"
          placeholder="Password"
          validate={[isRequired, isSafePassword]}
          component={renderInputField}
        />
        <Field
          name="is_active"
          label="Make Active"
          type="checkbox"
          component={renderCheckboxField}
        />
        <Button color="teal" fluid size="large">
          Add new user
        </Button>
      </Segment>
    </Form>
  );
};

export default reduxForm({
  form: 'user-credentials-form',
  initialValues: {
    is_active: false,
  },
})(UserCredentialsForm);
