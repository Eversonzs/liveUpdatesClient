import React from 'react';
import { isEmpty } from 'lodash';
import { Redirect } from 'react-router-dom';
import {
  Container,
  Row,
  ListGroup,
  ListGroupItem,
} from 'shards-react';
import isEmail from 'isemail';
import { NotificationManager } from 'react-notifications';

import styles from './modulesCss/Register.module.css';
import RegisterForm from '../components/register/RegisterForm';
import liveUpdatesRegister from '../services/register';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        isAuthenticated: false,
        buttonDisabled: true,
        userSession: {},
        userData: {
          username: '',
          email: '',
          password: '',
          name: '',
          lastName: '',
          birthday: '',
          cellphone: '',
          photo: '',
        },
        userRegistered: false,
      };
  };

  componentDidMount = () => {
    const userSession = JSON.parse(sessionStorage.getItem('userSession'));
    this.setState({ userSession });
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

  signUp = () => {
    const {
      userData,
      userData: {
        username,
        email,
        password,
        name,
        lastName,
      }
    } = this.state;

    if (isEmpty(username)) {
      NotificationManager.error('Username is required');
      return false;
    }
    if (isEmpty(email)) {
      NotificationManager.error('Email is required');
      return false;
    }
    if (!isEmail.validate(email)) {
      NotificationManager.error('Invalid email format');
      return false;
    }
    if (isEmpty(password)) {
      NotificationManager.error('Password is required');
      return false;
    }
    if (isEmpty(name)) {
      NotificationManager.error('Name is required');
      return false;
    }
    if (isEmpty(lastName)) {
      NotificationManager.error('Last Name is required');
      return false;
    }

    liveUpdatesRegister(userData)
      .then(response => {
          if (response.code === 201 ) {
            this.setState({ userRegistered: true });
            NotificationManager.success('Your user has been created!');
        } else {
          this.setState({ userRegistered: false });
          NotificationManager.error('Please try again.');
        }
      })
      .catch(error => {
        NotificationManager.error(error.message, 'Error');
      })

  };

  render() {
    const {
        userSession,
        buttonDisabled,
        userRegistered,
    } = this.state;

    return (
      isEmpty(userSession) ?
        userRegistered ? 
          <Redirect to='/login' /> :
          (
            <Container fluid className='main-content-container'>
              <ListGroup flush className={styles.registerBox}>
                <ListGroupItem>
                  <Row className={styles.rowCenter}>
                    <RegisterForm
                      buttonDisabled={buttonDisabled}
                      userDataHandleChange={this.userDataHandleChange}
                      signUp={this.signUp}
                    />
                  </Row>
                </ListGroupItem>
              </ListGroup>
            </Container>
          ) :
        <Redirect to='/user-profile' />
    );
  }
};

export default Register;
