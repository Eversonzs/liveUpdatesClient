import React from 'react';
import { Container, Row, Col } from 'shards-react';
import { isEmpty } from 'lodash';
import { NotificationManager } from 'react-notifications';
import ReactLoading from 'react-loading';

import styles from './modulesCss/UserProfileLite.module.css';
import PageTitle from '../components/common/PageTitle';
import UserDetails from '../components/user-profile-lite/UserDetails';
import UserAccountDetails from '../components/user-profile-lite/UserAccountDetails';
import UserAccountDetailsRead from '../components/user-profile-lite/UserAccountDetailsRead';
import getUserByUsername from '../services/getUserByUsername';

class UserProfileLite extends React.Component {
  constructor(props) {
    super(props);
    const usernameUrl = this.props.match.params.username;
    this.state = {
      loading: true,
      userSession: {},
      userInfo: {
        username: '',
          email: '',
          password: '',
          name: '',
          lastName: '',
          birthday: '',
          cellphone: '',
          photo: '',
      },
      usernameUrl,
      sameUserLoggedIn: false,
    };
  }

  componentDidMount = () => {
    const userSession = JSON.parse(sessionStorage.getItem('userSession'));
    const { usernameUrl } = this.state;
    if (isEmpty(userSession)) {
      this.setState({ userSession });
    } else {
      if (userSession.username === usernameUrl) {
        this.setState({ sameUserLoggedIn: true });
      }
      getUserByUsername(usernameUrl)
      .then(res => {
        this.setState({ userInfo: res.userData, loading: false });
      })
      .catch(error => {
        NotificationManager.error(error.message);
        this.setState({ loading: false });
      })
      this.setState({ userSession });
    }
  };

  userDataHandleChange = async (event) => {
    let { userInfo } = this.state;

    const userInfoKey = event.target.id;

    if (userInfoKey === 'photo') {
      const photo = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(photo);
      reader.onloadend = () => {
        const imageB64 = reader.result;
        userInfo[userInfoKey] = imageB64;
        this.setState({ userInfo });
      };
    } else {
      userInfo[userInfoKey] = event.target.value;
      this.setState({ userInfo });
    }

    const {
      username,
      email,
      password,
      name,
      lastName,
    } = userInfo;

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
      userInfo,
      sameUserLoggedIn,
      loading,
    } = this.state;

    return (
      <Container fluid className='main-content-container px-4'>
        <Row noGutters className='page-header py-4'>
          <PageTitle title='User Profile' subtitle='Overview' md='12' className='ml-sm-auto mr-sm-auto' />
        </Row>
        {
          loading ?
          (
            <div className={styles.divElementsCenter}>
              <ReactLoading type='bars' color='#007bff' />
            </div>
          ) :
          (
            <Row>
              <Col lg='4'>
                <UserDetails
                  userInfo={userInfo}
                />
              </Col>
              <Col lg='8'>
                {
                  sameUserLoggedIn ?
                    ( 
                      <UserAccountDetails
                        userInfo={userInfo}
                        userDataHandleChange={this.userDataHandleChange}
                        buttonDisabled
                        updateUser
                      />
                    ) :
                    (
                      <UserAccountDetailsRead
                      userInfo={userInfo}
                      />
                    )
                }
              </Col>
            </Row>
          )
        }
      </Container>
    )
  };
};

export default UserProfileLite;
