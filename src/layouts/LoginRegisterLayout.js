import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'shards-react';
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

import MainNavbar from '../components/layout/MainNavbar/MainNavbar';
import MainFooter from '../components/layout/MainFooter';

import styles from '../views/modulesCss/Login.module.css'

const LoginRegisterLayout = ({ children, noNavbar, noFooter }) => (
  <div className='app-container'>
    <Container fluid>
      <Row>
        <Col
          className={`main-content p-0 ${styles.mainContainer}`}
          sm='12'
          tag='main'
        >
          {!noNavbar && <MainNavbar />}
          {children}
          {!noFooter && <MainFooter />}
        </Col>
      </Row>
    </Container>
    <NotificationContainer />
  </div>
);

LoginRegisterLayout.propTypes = {
  /**
   * Whether to display the navbar, or not.
   */
  noNavbar: PropTypes.bool,
  /**
   * Whether to display the footer, or not.
   */
  noFooter: PropTypes.bool
};

LoginRegisterLayout.defaultProps = {
  noNavbar: true,
  noFooter: false
};

export default LoginRegisterLayout;
