import React from 'react';
import {
  Container,
  Row,
  ListGroup,
  ListGroupItem,
} from 'shards-react';
import { Redirect } from 'react-router-dom';
import { NotificationManager } from 'react-notifications';
import { isEmpty } from 'lodash';

import styles from './modulesCss/Login.module.css';
import LoginForm from '../components/login/LoginForm';
import liveUpdatesLogin from '../services/login';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      buttonDisabled: false,
      loginSuccess: false,
      userSession: {},
    };
  }

  componentDidMount = () => {
    const userSession = JSON.parse(sessionStorage.getItem('userSession'));
    this.setState({ userSession });
  }

  inputsHandleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  } 

  login = () => {
    this.setState({ buttonDisabled: true });
    const { email, password } = this.state;
    liveUpdatesLogin(email, password)
    .then(result => {
      if (result.code === 200) {
        sessionStorage.setItem('userSession', JSON.stringify(result.user));
        this.setState({ buttonDisabled: false, loginSuccess: true });
        NotificationManager.success('Login successful');
      } else {
        NotificationManager.error('Please try again');
      }
    }).catch(error => {
      this.setState({ buttonDisabled: false });
      NotificationManager.error(error.message);
    });
  }

  render() {
    const {
      buttonDisabled,
      loginSuccess,
      userSession,
    } = this.state;

    return (
      !isEmpty(userSession) ?
        <Redirect to='/user-profile' /> :
      loginSuccess ? 
        <Redirect to='/user-profile' /> :
        (
          <Container fluid className='main-content-container'>
            <ListGroup flush className={styles.loginBox}>
              <ListGroupItem>
                <Row className={styles.rowCenter}>
                  <LoginForm
                    login={this.login}
                    inputsHandleChange={this.inputsHandleChange}
                    buttonDisabled={buttonDisabled}
                  />
                </Row>
              </ListGroupItem>
            </ListGroup>
          </Container>
        )
    );
  }
};

export default Login;
