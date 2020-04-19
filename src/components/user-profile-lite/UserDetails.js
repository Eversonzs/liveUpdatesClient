import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import {
  Card,
  CardHeader,
} from 'shards-react';

const UserDetails = (props) => {
  const { userSession, userDetails, userInfo } = props;
  return (
    <Card small className='mb-4 pt-3'>
      <CardHeader className='border-bottom text-center'>
        <div className='mb-3 mx-auto'>
          <img
            className='rounded-circle'
            src={isEmpty(userSession.photo) ? userDetails.avatar : userSession.photo}
            alt={userSession.username}
            width='110'
          />
        </div>
        <h4 className='mb-0'>@{userSession.username}</h4>
        <span className='text-muted d-block mb-2'>{userInfo.name || ''} {userInfo.lastname || ''}</span>
      </CardHeader>
    </Card>
  );
};

UserDetails.propTypes = {
  /**
   * The user details object.
   */
  userDetails: PropTypes.object
};

UserDetails.defaultProps = {
  userDetails: {
    username: 'username',
    avatar: require('./../../images/avatars/no-profile-image.png'),
    name: 'Name',
    lastName: 'last name',
  }
};

export default UserDetails;
