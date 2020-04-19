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
      buttonDisabled: false,
    };
  }

  inputsHandleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  } 

  login = async () => {
    this.setState({ buttonDisabled: true });
    const { email, password } = this.state;
    await liveUpdatesLogin(email, password)
    .then(result => {
      // TODO: save result for user session
      console.log('result: ', result);
      this.setState({ buttonDisabled: false });
      NotificationManager.success('Login successful');
    }).catch(error => {
      this.setState({ buttonDisabled: false });
      NotificationManager.error(error.message);
    });
  }

  render() {
    const { buttonDisabled } = this.state;
    return (
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
    );
  }
};

export default Login;
