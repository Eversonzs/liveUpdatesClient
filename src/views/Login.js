import React from 'react';
import {
  Container,
  Row,
  ListGroup,
  ListGroupItem,
} from 'shards-react'

import styles from './modulesCss/Login.module.css';
import LoginForm from '../components/login/LoginForm';
import liveUpdatesLogin from '../services/login';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitted: false,
    };
    this.login = this.login.bind(this);
  }

  componentDidMount() {
    // TODO: delete did mount if is not necessary
    // test for login function.
    // this.login('eversonzs@hotmail.com', 'password');
  }

  inputsHandleChange = (event) => {
    console.log('event--->>>', event.target.id);
    console.log('event--->>>', event.target.value);
  } 

  login = async () => {
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const { isSubmitted } = this.state;
    console.log('email, password', email, password);
    if (isSubmitted) {
      await liveUpdatesLogin(email, password)
      .then((result) => {
        console.log('result---->>>', result);
      }).catch((err) => {
        console.log('err---->>>', err);
      });
    }
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
