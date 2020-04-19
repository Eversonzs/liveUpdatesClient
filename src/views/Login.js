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
    this.login = this.login.bind(this);
  }

  componentDidMount() {
    // TODO: delete did mount if is not necessary
    // test for login function.
    // this.login('eversonzs@hotmail.com', 'password');
  }

  login (email, password) {
    liveUpdatesLogin(email, password)
    .then((result) => {
      console.log('result---->>>', result);
    }).catch((err) => {
      console.log('err---->>>', err);
    });
  }

  render() {
    return (
      <Container fluid className='main-content-container'>
        <ListGroup flush className={styles.loginBox}>
          <ListGroupItem>
            <Row className={styles.rowCenter}>
              <LoginForm
                login={this.login}
              />
            </Row>
          </ListGroupItem>
        </ListGroup>
      </Container>
    );
  }
};

export default Login;
