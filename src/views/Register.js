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
        userSession: {},
        userData: {
          username: '',
          email: '',
          password: '',
          name: '',
          lastName: '',
          birthday: '',
          cellphone: '',
          photo: '',
        }
    };
  }

  componentDidMount = () => {
    const userSession = JSON.parse(sessionStorage.getItem('userSession'));
    this.setState({ userSession });
  }

  userDataHandleChange = (event) => {
    let { userData } = this.state;
    userData = {
      ...userData,
      [event.target.id]: event.target.value
    };

    this.setState({ userData });
  } 

  render() {
    const {
        userSession,
        buttonDisabled,
    } = this.state;

    console.log('userSession--<<-', userSession);

    return (
      isEmpty(userSession) ?
        (
          <Container fluid className='main-content-container'>
            <ListGroup flush className={styles.registerBox}>
              <ListGroupItem>
                <Row className={styles.rowCenter}>
                  <RegisterForm
                    buttonDisabled={buttonDisabled}
                    userDataHandleChange={this.userDataHandleChange}
                  />
                </Row>
              </ListGroupItem>
            </ListGroup>
          </Container>
        ) :
        <Redirect to='/user-profile' />
    );
  }
};

export default Register;
