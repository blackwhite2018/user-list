import React from 'react';
import { Form } from 'semantic-ui-react';

export const renderInputField = ({
  input,
  icon,
  type,
  placeholder,
  meta: { touched, error },
}) => (
  <Form.Input
    {...input}
    icon={icon}
    placeholder={placeholder}
    type={type}
    error={
      touched &&
      error && {
        content: error,
      }
    }
    fluid
  />
);

export const renderCheckboxField = ({ label, input }) => (
  <Form.Checkbox
    checked={!!input.value}
    name={input.name}
    label={label}
    onChange={(e, { checked }) => input.onChange(checked)}
  />
);

export const isRequired = (value) => (value ? undefined : 'Required');

export const isSafePassword = (value) =>
  value && !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/i.test(value)
    ? 'Minimum eight characters, at least one uppercase letter, one lowercase letter and one number'
    : undefined;
