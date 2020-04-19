import React from 'react';
import {
  Container,
  Row,
  ListGroup,
  ListGroupItem,
} from 'shards-react'
import styles from './modulesCss/Login.module.css';

import LoginForm from '../components/login/LoginForm';


const Login = () => (
  <Container fluid className='main-content-container'>
    <ListGroup flush className={`${styles.loginBox}`}>
      <ListGroupItem>
        <Row className={styles.rowCenter}>
          <LoginForm />
        </Row>
      </ListGroupItem>
    </ListGroup>
    {/* <Row>
      <Col lg='4'>
        <UserDetails />
      </Col>
      <Col lg='8'>
        <UserAccountDetails />
      </Col>
    </Row> */}
  </Container>
);

export default Login;
