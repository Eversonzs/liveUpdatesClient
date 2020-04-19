import React from 'react';
import {
  Row,
  Col,
  Form,
  FormInput,
  FormGroup,
  Button,
} from 'shards-react';

import style from '../../views/modulesCss/Login.module.css';

const LoginForm = () => (
  <Col sm='12' md='12'>
    <br></br>
    <strong className={`text-muted d-block mb-2 ${style.loginTitle}`}>Login into Live Updates</strong>
    <br></br>
    <Form>
      <FormGroup>
        <label htmlFor='email'>Email</label>
        <FormInput
          type='email'
          id='email'
          placeholder='Email Address'
          onChange={() => {}}
          autoComplete='email'
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor='password'>Password</label>
        <FormInput
          type='password'
          id='password'
          placeholder='Password'
          onChange={() => {}}
        />
      </FormGroup>
      <Row className='col float-right'>
        <Button className='ml-auto'>
          Login
        </Button>
      </Row>
    </Form>
  </Col>
);

export default LoginForm;
