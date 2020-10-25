import React from 'react';
import { Link } from 'react-router-dom';
import { Message, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const ErrorMessage = ({ header, text }) => (
  <Message size="huge" icon>
    <Icon name="circle notched" loading />
    <Message.Content>
      <Message.Header>{header}</Message.Header>
      {text}
      <Link to="/"> You can return to main page.</Link>
    </Message.Content>
  </Message>
);

ErrorMessage.propTypes = {
  header: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export { ErrorMessage };
