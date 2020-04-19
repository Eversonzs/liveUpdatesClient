import React from 'react';
import { isEmpty } from 'lodash';
import { Redirect } from 'react-router-dom';
import {
  Container,
  Row,
  ListGroup,
  ListGroupItem,
} from 'shards-react';

import styles from './modulesCss/Register.module.css';
import RegisterForm from '../components/register/RegisterForm';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        isAuthenticated: false,
        buttonDisabled: true,
    };
  }

  componentDidMount = () => {
    const userSession = JSON.parse(sessionStorage.getItem('userSession'));
    this.setState({ userSession });
  }



  render() {
    const {
        userSession,
        buttonDisabled,
    } = this.state;

    return (
        !isEmpty(userSession) ?
          <Redirect to='/user-profile' /> :
        /* loginSuccess ? 
          <Redirect to='/user-profile' /> : */
          (
            <Container fluid className='main-content-container'>
              <ListGroup flush className={styles.registerBox}>
                <ListGroupItem>
                  <Row className={styles.rowCenter}>
                    <RegisterForm
                      buttonDisabled={buttonDisabled}
                    />
                  </Row>
                </ListGroupItem>
              </ListGroup>
            </Container>
          )
      );
  }
};

export default Register;
