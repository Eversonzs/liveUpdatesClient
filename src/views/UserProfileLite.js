import React from 'react';
import { Container, Row, Col } from 'shards-react';
import { Redirect } from 'react-router-dom';
import { isEmpty } from 'lodash';
import { NotificationManager } from 'react-notifications';

import PageTitle from '../components/common/PageTitle';
import UserDetails from '../components/user-profile-lite/UserDetails';
import UserAccountDetails from '../components/user-profile-lite/UserAccountDetails';
import getUserByUsername from '../services/getUserByUsername';

class UserProfileLite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userSession: {},
      userInfo: undefined,
      isAuthenticated: true,
    };
  }

  componentDidMount = () => {
    const userSession = JSON.parse(sessionStorage.getItem('userSession'));
    if (isEmpty(userSession)) {
      this.setState({ userSession, isAuthenticated: false });
    } else {
      getUserByUsername(userSession.username)
        .then(res => {
          this.setState({ userInfo: res.userData });
        })
        .catch(error => {
          NotificationManager.error(error.message);
        })
      this.setState({ userSession });
    }
  };

  userDataHandleChange = async (event) => {
    let { userData } = this.state;

    const userDataKey = event.target.id;

    if (userDataKey === 'photo') {
      const photo = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(photo);
      reader.onloadend = () => {
        const imageB64 = reader.result;
        userData[userDataKey] = imageB64;
        this.setState({ userData });
      };
    } else {
      userData[userDataKey] = event.target.value;
      this.setState({ userData });
    }

    const {
      username,
      email,
      password,
      name,
      lastName,
    } = userData;

    let disabled = true;
    if (
      !isEmpty(username) &&
      !isEmpty(email) &&
      !isEmpty(password) &&
      !isEmpty(name) &&
      !isEmpty(lastName)
    ) {
      disabled = false;
    }
    this.setState({ buttonDisabled: disabled });
  };

  render() {
    const {
      isAuthenticated,
      userSession,
      userInfo
    } = this.state;

    return (
      isAuthenticated ?
      (
        <Container fluid className='main-content-container px-4'>
          <Row noGutters className='page-header py-4'>
            <PageTitle title='User Profile' subtitle='Overview' md='12' className='ml-sm-auto mr-sm-auto' />
          </Row>
          <Row>
            <Col lg='4'>
              <UserDetails
                userSession={userSession}
              />
            </Col>
            <Col lg='8'>
              <UserAccountDetails
                userInfo={userInfo}
                userDataHandleChange={this.userDataHandleChange}
                buttonDisabled
                updateUser
              />
            </Col>
          </Row>
        </Container>
      ) :
      <Redirect to='/login'/>
    )
  };
};

export default UserProfileLite;
