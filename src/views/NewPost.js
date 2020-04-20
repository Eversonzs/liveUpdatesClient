import React from 'react';
import { Container, Row, Col } from 'shards-react';

import PageTitle from '../components/common/PageTitle';
import Editor from '../components/new-post/Editor';

class NewPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postTitle: '',
      postDescription: '',
    };
  }

  handleOnChange = (event) => {
    if (event.target) {
      this.setState({
        [event.target.id]: event.target.value,
      });
    } else {
      this.setState({ postDescription: event });
    }
  }

  render() {
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
            />
          </Col>
        </Row>
      </Container>
    );
  };
};

export default NewPost;
