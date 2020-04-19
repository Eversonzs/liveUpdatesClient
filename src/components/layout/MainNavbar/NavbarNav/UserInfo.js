import React from 'react';
import { NavItem } from 'shards-react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';

import styles from './UserInfo.module.css';

const UserInfo = (props) => {
  const {
    username,
    photo,
  } = props;

  return (
    <NavItem>
      <div className={`text-nowrap px-3 ${styles.usernameNavBar}`}>
        {
          isEmpty(photo) ?
          (
            <img
              className='user-avatar rounded-circle mr-2'
              src={require('../../../../images/avatars/no-profile-image.png')}
              alt='User Avatar'
            />
          ) : 
          (
            <img
              className='user-avatar rounded-circle mr-2'
              src={photo}
              alt='User Avatar'
            />
          )
        }
        <span className='d-none d-md-inline-block'>{username}</span>
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
