import React from 'react';
import { useDispatch } from 'react-redux';
import { Input } from 'semantic-ui-react';
import { setSearchKey } from '../../actions/app';

const Search = () => {
  const dispatch = useDispatch();
  const handleSearch = ({ target: { value } }) => {
    dispatch(setSearchKey(value));
  };

  return (
    <Input
      icon="users"
      onChange={handleSearch}
      iconPosition="left"
      placeholder="Search users..."
      fluid
    />
  );
};

export { Search };
