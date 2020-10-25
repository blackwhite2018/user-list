import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUsersList, loadUsers } from '../../actions/app';
import UsersList from '../../components/UsersList';
import { sortedById } from '../../common/helpers';
import { Button, Container, Header, Grid, Segment } from 'semantic-ui-react';
import { Search } from '../../components/Search';
import { Link } from 'react-router-dom';

const UsersListPage = () => {
  const dispatch = useDispatch();
  const searchKey = useSelector(({ app: { searchKey } }) => searchKey);
  const users = useSelector(({ app: { usersList } }) => usersList);
  const [active, setActive] = useState(null);

  const handleSortedUsers = ({ currentTarget }) => {
    const flag = currentTarget.dataset.sort;
    setActive(flag === 'ascend');
    dispatch(setUsersList(sortedById(users, flag === 'ascend')));
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
  };

  useEffect(() => {
    loadUsers(dispatch);
  }, [dispatch]);

  return (
    <Container style={{ paddingTop: '20px' }} text>
      <Segment clearing>
        <Header as={Link} to="/" floated="right" onClick={handleLogout}>
          Log Out
        </Header>
      </Segment>
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column>
            <Search />
          </Grid.Column>
          <Grid.Column>
            <Button to="/add-user" icon="add" floated="right" as={Link} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      {users && (
        <UsersList
          users={users}
          sort={handleSortedUsers}
          searchKey={searchKey}
          active={active}
        />
      )}
    </Container>
  );
};

export { UsersListPage };
