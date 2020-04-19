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
  } = props;

  return (
    <Col sm='12' md='12'>
      <br></br>
      <strong className={`text-muted d-block mb-2 ${style.registerTitle}`}>Create an user for Live Updates</strong>
      <br></br>
      <Form>
        <FormGroup>
          <label htmlFor='email'>Email</label>
          <FormInput
            type='email'
            id='email'
            placeholder='Email Address'
            // onChange={(e) => inputsHandleChange(e)}
            autoComplete='email'
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor='password'>Password</label>
          <FormInput
            type='password'
            id='password'
            placeholder='Password'
            // onChange={(e) => inputsHandleChange(e)}
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
