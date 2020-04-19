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

import styles from './modulesCss/NewsBlog.module.css'
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

    const defaultPostImage = require('../images/default-news-post.png');

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
                  style={{ backgroundImage: `url(${post.image || defaultPostImage})` }}
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
                  <br></br>
                  <div className={styles.authorDiv}>
                    <span className='text-muted'>
                      Written by @{post.username} <br></br>
                      {new Date(post.timestamp).toUTCString()}
                    </span>
                  </div>
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
