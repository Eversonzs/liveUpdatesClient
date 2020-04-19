import React from 'react';
import { Container, Row, Col } from 'shards-react';
import { Redirect } from 'react-router-dom';

import PageTitle from '../components/common/PageTitle';
import UserDetails from '../components/user-profile-lite/UserDetails';
import UserAccountDetails from '../components/user-profile-lite/UserAccountDetails';

class UserProfileLite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userSession: {},
      isAuthenticated: true,
    };
  }

  componentDidMount = () => {
    const userSession = JSON.parse(sessionStorage.getItem('userSession'));
    if (userSession) {
      this.setState({ userSession, isAuthenticated: true });
    } else {
      this.setState({ userSession, isAuthenticated: false });
    }
  }

  render() {
    const { isAuthenticated } = this.state;
    return (
      isAuthenticated ?
      (
        <Container fluid className='main-content-container px-4'>
          <Row noGutters className='page-header py-4'>
            <PageTitle title='User Profile' subtitle='Overview' md='12' className='ml-sm-auto mr-sm-auto' />
          </Row>
          <Row>
            <Col lg='4'>
              <UserDetails />
            </Col>
            <Col lg='8'>
              <UserAccountDetails />
            </Col>
          </Row>
        </Container>
      ) :
      <Redirect to='/login'/>
    )
  };
};

export default UserProfileLite;
