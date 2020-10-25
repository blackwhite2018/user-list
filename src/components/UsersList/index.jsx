import React from 'react';
import { Table, Icon } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

import { filterUsers } from '../../common/helpers';

const UsersList = ({ users, searchKey, sort, active, history }) => {
  const usersToRender = searchKey ? filterUsers(users, searchKey) : users;

  return (
    <Table style={{ marginTop: '20px' }} celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>#</Table.HeaderCell>
          <Table.HeaderCell>
            <div className="icons-wrapper">
              <div className="sort-icons">
                <div
                  className={`icon ${active === true ? 'icon-active' : ''}`}
                  data-sort="ascend"
                  onClick={sort}
                >
                  <Icon name="angle up" />
                </div>
                <div
                  className={`icon ${active === false ? 'icon-active' : ''}`}
                  data-sort="descend"
                  name="descend"
                  onClick={sort}
                >
                  <Icon name="angle down" />
                </div>
              </div>
              <div>ID</div>
            </div>
          </Table.HeaderCell>
          <Table.HeaderCell>First Name</Table.HeaderCell>
          <Table.HeaderCell>Username</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {usersToRender.map(({ id, first_name, username }, index) => {
          return (
            <Table.Row key={username}>
              <Table.Cell>{index + 1}</Table.Cell>
              <Table.Cell>{id}</Table.Cell>
              <Table.Cell>{first_name || 'Anonymous'}</Table.Cell>
              <Table.Cell>{username}</Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
};

export default withRouter(UsersList);
