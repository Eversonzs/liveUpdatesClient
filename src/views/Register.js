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

  userDataHandleChange = async (event) => {
    let { userData } = this.state;

    const userDataKey = event.target.id;

    if (userDataKey === 'photo') {
      const photo = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(photo);
      reader.onloadend = () => {
        const imageB64 = reader.result;
        userData[userDataKey] = imageB64;
        this.setState({ userData });
      };
    } else {
      userData[userDataKey] = event.target.value;
      this.setState({ userData });
    }
  }

  render() {
    const {
        userSession,
        buttonDisabled,
    } = this.state;

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
