import React from 'react';
import { NavItem } from 'shards-react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';

import styles from './UserInfo.module.css';

const UserInfo = (props) => {
  const {
    userSession,
  } = props;

  console.log('userSession-->>', userSession);
  return (
    <NavItem>
      <div className={`text-nowrap px-3 ${styles.usernameNavBar}`}>
        <img
          className='user-avatar rounded-circle mr-2'
          src={
            isEmpty(userSession.photo || '') ?
              require('../../../../images/avatars/no-profile-image.png') :
              userSession.photo
            }
          alt='User Avatar'
        />
        <span className='d-none d-md-inline-block'>{userSession.username || ''}</span>
      </div>
    </NavItem>
  );
}

UserInfo.propTypes = {
  /**
   * Username has to an string.
   */
  username: PropTypes.string,
  /**
   * Photo as base64 string or path string.
   */
  photo: PropTypes.string,
};

UserInfo.defaultProps = {
  username: 'username',
  photo: '',
};

export default UserInfo;
