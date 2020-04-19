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
  <Container fluid className='main-content-container px-4'>
    <ListGroup flush>
      <ListGroupItem className='p-3'>
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
