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
} from 'shards-react';

const UserAccountDetails = (props) => {
  const { userInfo } = props;

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
                <Row>
                  <Col xs='3'><strong> Username: </strong></Col>
                  <Col>{userInfo.username || ''}</Col>
                </Row>
                <br></br>
                <Row>
                  <Col xs='3'><strong> Email: </strong></Col>
                  <Col>{userInfo.email || ''}</Col>
                </Row>
                <br></br>
                <Row>
                  <Col xs='3'><strong> Name: </strong></Col>
                  <Col>{userInfo.name || ''}</Col>
                </Row>
                <br></br>
                <Row>
                  <Col xs='3'><strong> Last Name: </strong></Col>
                  <Col>{userInfo.lastname || ''}</Col>
                </Row>
                <br></br>
                <Row>
                  <Col xs='3'><strong> Birthday: </strong></Col>
                  <Col>{new Date(userInfo.birthday).toDateString() || 'No filled'}</Col>
                </Row>
                <br></br>
                <Row>
                  <Col xs='3'><strong> Cellphone: </strong></Col>
                  <Col>{userInfo.cellphone || 'No filled'}</Col>
                </Row>
                <br></br>
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
