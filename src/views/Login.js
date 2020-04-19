import React from 'react';
import {
  Container,
  Row,
  ListGroup,
  ListGroupItem,
} from 'shards-react'
import { NotificationManager } from 'react-notifications';

import styles from './modulesCss/Login.module.css';
import LoginForm from '../components/login/LoginForm';
import liveUpdatesLogin from '../services/login';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  inputsHandleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  } 

  login = async () => {
    const { email, password } = this.state;
    await liveUpdatesLogin(email, password)
    .then(result => {
      console.log('result---->>>', result);
      NotificationManager.success('Login successful');
    }).catch(error => {
      console.log('error---->>>', error);
      NotificationManager.error(error.message);
      return false;
    });
    return false;
  }

  render() {
    return (
      <Container fluid className='main-content-container'>
        <ListGroup flush className={styles.loginBox}>
          <ListGroupItem>
            <Row className={styles.rowCenter}>
              <LoginForm
                login={this.login}
                inputsHandleChange={this.inputsHandleChange}
              />
            </Row>
          </ListGroupItem>
        </ListGroup>
      </Container>
    );
  }
};

export default Login;
