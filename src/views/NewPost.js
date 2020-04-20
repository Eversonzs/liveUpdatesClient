import React from 'react';
import { Container, Row, Col } from 'shards-react';
import { NotificationManager } from 'react-notifications';
import { isEmpty } from 'lodash';

import PageTitle from '../components/common/PageTitle';
import Editor from '../components/new-post/Editor';

class NewPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postTitle: '',
      postDescription: '',
      userSession: {},
      isButtonDisable: true,
    };
  }

  componentDidMount = () => {
    const userSession = JSON.parse(sessionStorage.getItem('userSession'));
    this.setState({ userSession });
  }

  handleOnChange = (event) => {
    if (event.target) {
      this.setState({
        [event.target.id]: event.target.value,
      });
    } else {
      this.setState({ postDescription: event });
    }

    const { postTitle, postDescription } = this.state;
    if (!isEmpty(postTitle) && !isEmpty(postDescription)) {
      this.setState({ isButtonDisable: false });
    } else {
      this.setState({ isButtonDisable: true });
    }
  }

  createPost = () => {
    const {
      postTitle,
      postDescription,
    } = this.state;

    if (isEmpty(postTitle)) {
        NotificationManager.error('Post title can not be empty');
        return false;
    }
    if (isEmpty(postDescription)) {
        NotificationManager.error('Post description can not be empty');
        return false;
    }
    

  }

  render() {
    const { isButtonDisable } = this.state;

    return (
      <Container fluid className='main-content-container px-4 pb-4'>
        {/* Page Header */}
        <Row noGutters className='page-header py-4'>
          <PageTitle sm='4' title='Add New Post' subtitle='Live-Updates' className='text-sm-left' />
        </Row>

        <Row>
          {/* Editor */}
          <Col lg='9' md='12'>
            <Editor
              handleOnChange={this.handleOnChange}
              createPost={this.createPost}
              isButtonDisable={isButtonDisable}
            />
          </Col>
        </Row>
      </Container>
    );
  };
};

export default NewPost;
