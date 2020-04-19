/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Badge,
} from 'shards-react';
import { isEmpty } from 'lodash';

import PageTitle from '../components/common/PageTitle';
import getAllPosts from '../services/getAllPosts';

class BlogPosts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allPosts: [],
    };
  }

  componentDidMount = () => {
    getAllPosts()
      .then(response => {
        if (response.code === 200) {
          this.setState({ allPosts: response.posts });
        }
        console.log('posts-->>', response);
      })
      .catch(error => {
        console.log('error-->>', error);
      })
  };

  render() {
    const {
      allPosts,
    } = this.state;

    const defaultPostImage = '../image/default-news-post.png';

    return (
      <Container fluid className='main-content-container px-4'>
        {/* Page Header */}
        <Row noGutters className='page-header py-4'>
          <PageTitle sm='4' title='News Blog' className='text-sm-left' />
        </Row>

        {/* First Row of Posts */}
        <Row>
          {allPosts.map(post => (
            <Col lg='6' md='6' sm='12' className='mb-4' key={post.post_id}>
              <Card small className='card-post card-post--1'>
                <div
                  className='card-post__image'
                  style={{ backgroundImage: `url(${isEmpty(post.image) ? defaultPostImage : post.image})` }}
                >
                  <Badge
                    pill
                    className={`card-post__category bg-${post.category_name}`}
                  >
                    {post.category_name}
                  </Badge>
                  <div className="card-post__author d-flex">
                    <a
                      href="#"
                      className="card-post__author-avatar card-post__author-avatar--small"
                      style={{ backgroundImage: `url(${post.user_photo})` }}
                    >
                      Written by @{post.username}
                    </a>
                  </div>
                </div>
                <CardBody>
                  <h5 className='card-title'>
                    <a href='#' className='text-fiord-blue'>
                      {post.title}
                    </a>
                  </h5>
                  <p className='card-text d-inline-block mb-3'>{post.description}</p>
                  <br></br>
                  <span className='text-muted'>{new Date(post.timestamp).toString('YYYY-MM-DD - hh:mm:ss')}</span>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default BlogPosts;
