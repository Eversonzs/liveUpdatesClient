import React from "react";
import {
  Row,
  Col,
  Form,
  FormInput,
  FormSelect,
  FormGroup,
  Button,
} from "shards-react";

const LoginForm = () => (
  <Col sm="12" md="12">
    <strong className="text-muted d-block mb-2">Live Updates</strong>
    <strong className="text-muted d-block mb-2">Login</strong>
    <Form>
      <FormGroup>
      <FormInput
        type='email'
        id='email'
        placeholder='Email Address'
        onChange={() => {}}
        autoComplete='email'
      />
      </FormGroup>
      <FormGroup>
        <FormInput
          type='password'
          placeholder='Password'
          onChange={() => {}}
        />
      </FormGroup>
      <Row className='col float-right '>
        <Button>
          Login
        </Button>
      </Row>
    </Form>
  </Col>
);

export default LoginForm;
