import React from 'react';
import {
  Row,
  Col,
  Form,
  FormInput,
  FormGroup,
  Button,
} from 'shards-react';

import style from '../../views/modulesCss/Register.module.css';

const RegisterForm = (props) => {
  const {
    buttonDisabled,
    userDataHandleChange,
  } = props;

  return (
    <Col sm='12' md='12'>
      <br></br>
      <strong className={`text-muted d-block mb-2 ${style.registerTitle}`}>Create an user for Live Updates</strong>
      <br></br>
      <Form>
        <FormGroup>
          <label htmlFor='username'>Username</label>
          <FormInput
            type='text'
            id='username'
            placeholder='Choose an username'
            onChange={(e) => userDataHandleChange(e)}
            autoComplete='username'
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor='email'>Email</label>
          <FormInput
            type='email'
            id='email'
            placeholder='Email Address'
            onChange={(e) => userDataHandleChange(e)}
            autoComplete='email'
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor='password'>Password</label>
          <FormInput
            type='password'
            id='password'
            placeholder='Password'
            onChange={(e) => userDataHandleChange(e)}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor='name'>Name</label>
          <FormInput
            type='text'
            id='name'
            placeholder='Type your name'
            onChange={(e) => userDataHandleChange(e)}
            autoComplete='name'
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor='lastName'>Last Name</label>
          <FormInput
            type='text'
            id='lastName'
            placeholder='Type your last name'
            onChange={(e) => userDataHandleChange(e)}
            autoComplete='lastName'
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor='birthday'>Birthday</label>
          <FormInput
            type='date'
            id='birthday'
            placeholder='Choose your birthday'
            onChange={(e) => userDataHandleChange(e)}
            autoComplete='birthday'
          />
        </FormGroup>
        <Row className='col float-right'>
          <Button
          // onClick={() => login()}
          className='ml-auto'
          disabled={buttonDisabled}
          >
            Sing up
          </Button>
        </Row>
      </Form>
    </Col>
  )
};

export default RegisterForm;
