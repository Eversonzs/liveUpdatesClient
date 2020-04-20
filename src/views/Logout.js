import React from 'react';
import { Redirect } from 'react-router-dom';
import { isEmpty } from 'lodash';

class Logout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectTo: '',
        };
      }
  componentDidMount = () => {
    sessionStorage.removeItem('userSession');
    this.setState({ redirectTo: '/login' });
  }

  render() {
    const { redirectTo } = this.state;

    return (
      !isEmpty(redirectTo) ?
        <Redirect to={redirectTo} /> :
        null
    );
  }
};

export default Logout;
