import React from 'react';
import { Nav } from 'shards-react';

import UserInfo from './UserInfo';

export default (props) => (
  <Nav navbar className='border-left flex-row'>
    <UserInfo
      userSession={props.userSession}
    />
  </Nav>
);
