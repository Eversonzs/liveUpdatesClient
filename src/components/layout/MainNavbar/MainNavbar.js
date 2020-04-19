import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Container, Navbar } from 'shards-react';
import { isEmpty } from 'lodash';

import NavbarNav from './NavbarNav/NavbarNav';
import NavbarToggle from './NavbarToggle';

class MainNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userSession: {},
      isAuthenticated: true,
    };
  }

  componentDidMount = () => {
    const userSession = JSON.parse(sessionStorage.getItem('userSession'));
    if (isEmpty(userSession)) {
      this.setState({ userSession, isAuthenticated: false });
    } else {
      this.setState({ userSession });
    }
  }

  render () {
    const { stickyTop } = this.props;
    const { userSession } = this.state;
    const classes = classNames(
      'main-navbar',
      'bg-white',
      stickyTop && 'sticky-top'
    );
    
    return (
      <div className={classes}>
        <Container className='p-0'>
          <Navbar type='light' className='align-items-stretch flex-md-nowrap p-0'>
            <div className='navbar-nav ml-auto'>
              <NavbarNav
                userSession={userSession}
              />
              <NavbarToggle />
            </div>
          </Navbar>
        </Container>
      </div>
    )
  }   
}

MainNavbar.propTypes = {
  /**
   * The layout type where the MainNavbar is used.
   */
  layout: PropTypes.string,
  /**
   * Whether the main navbar is sticky to the top, or not.
   */
  stickyTop: PropTypes.bool
};

MainNavbar.defaultProps = {
  stickyTop: true
};

export default MainNavbar;
