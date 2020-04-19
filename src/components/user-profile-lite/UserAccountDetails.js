import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormGroup,
  FormInput,
  Button,
} from 'shards-react';

const UserAccountDetails = (props) => {
  const {
    userInfo,
    userDataHandleChange,
    buttonDisabled,
    updateUser,
  } = props;

  return (
    <Card small className='mb-4'>
      <CardHeader className='border-bottom'>
        <h6 className='m-0'>User info</h6>
      </CardHeader>
      <ListGroup flush>
        <ListGroupItem className='p-3'>
          <Row>
            <Col>
              <Form>
                <FormGroup>
                  <label htmlFor='username'>Username</label>
                  <FormInput
                    type='text'
                    id='username'
                    value={userInfo.username || ''}
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
                    value={userInfo.email || ''}
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
                    value={userInfo.name || ''}
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
                    value={userInfo.lastname || ''}
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
                <FormGroup>
                  <label htmlFor='cellphone'>Cellphone</label>
                  <FormInput
                    type='text'
                    id='cellphone'
                    value={userInfo.cellphone || ''}
                    placeholder='Type your cellphone number (+5049899695)'
                    onChange={(e) => userDataHandleChange(e)}
                    autoComplete='cellphone'
                  />
                </FormGroup>
                <FormGroup>
                  <label htmlFor='photo'>Select a photo</label>
                  <FormInput
                    type='file'
                    accept='image/png, image/jpeg, image/jpg'
                    id='photo'
                    placeholder='Select a photo...'
                    onChange={(e) => userDataHandleChange(e)}
                    autoComplete='photo'
                  />
                </FormGroup>
                <Row className='col float-right'>
                  <Button
                    onClick={() => updateUser()}
                    className='ml-auto'
                    disabled={buttonDisabled}
                  >
                    Update
                  </Button>
                </Row>
              </Form>
            </Col>
          </Row>
        </ListGroupItem>
      </ListGroup>
    </Card>
  );
};

UserAccountDetails.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

UserAccountDetails.defaultProps = {
  title: 'Account Details'
};

export default UserAccountDetails;
