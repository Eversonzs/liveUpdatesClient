import React from 'react';
import {
  Container,
  Row,
  ListGroup,
  ListGroupItem,
} from 'shards-react'

import styles from './modulesCss/Login.module.css';
import LoginForm from '../components/login/LoginForm';

class Login extends React.Component {



  render() {
    return (
      <Container fluid className='main-content-container'>
        <ListGroup flush className={styles.loginBox}>
          <ListGroupItem>
            <Row className={styles.rowCenter}>
              <LoginForm

              />
            </Row>
          </ListGroupItem>
        </ListGroup>
      </Container>
    );
  }
};

export default Login;
