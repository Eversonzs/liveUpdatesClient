import React from 'react';
import {
    Card,
    CardBody,
    Col,
    Row,
    Badge,
} from 'shards-react';

import styles from './PostsCards.module.css';

const PostsCards = (props) => {
  const { allPosts } = props;
  const defaultPostImage = require('../../images/default-news-post.png');

  return (
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
                <div className='card-post__author d-flex'>
                    <a
                    href={`/user-profile/${post.username}`}
                    className='card-post__author-avatar card-post__author-avatar--small'
                    style={{ backgroundImage: `url(${post.user_photo})` }}
                    >
                    </a>
                </div>
                </div>
                <CardBody>
                <h5 className='card-title'>
                  {post.title}
                </h5>
                <div className='content' dangerouslySetInnerHTML={{__html: post.description}}></div>
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
  )
}

export default PostsCards;
