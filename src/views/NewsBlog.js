import React from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
} from 'shards-react';
import { NotificationManager } from 'react-notifications';
import ReactLoading from 'react-loading';

import styles from './modulesCss/NewsBlog.module.css';
import PageTitle from '../components/common/PageTitle';
import PostsCards from '../components/news-blog/PostsCards';
import getAllPosts from '../services/getAllPosts';

class BlogPosts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allPosts: [],
      noPosts: true,
      loading: true,
    };
  }

  componentDidMount = () => {
    getAllPosts()
      .then(response => {
        if (response.code === 200) {
          this.setState({
            allPosts: response.posts,
            noPosts: false,
            loading: false,
          });
        }
      })
      .catch(error => {
        NotificationManager.error(error.message);
        this.setState({ noPosts: false, loading: false });
      })
  };

  render() {
    const {
      allPosts,
      noPosts,
      loading,
    } = this.state;

    return (
      <Container fluid className='main-content-container px-4'>
          {/* Page Header */}
          <Row noGutters className='page-header py-4'>
            <PageTitle sm='4' title='News Blog' className='text-sm-left' />
          </Row>
      { loading ?
        (
          <div className={styles.divElementsCenter}>
              <ReactLoading type='bars' color='#007bff' />
          </div>
        ) :
        noPosts ?
        (
          <Row>
            <Col lg='12' md='12' sm='12' className='mb-4'>
                <Card small className='card-post card-post--1'>
                  <CardBody>
                      <h5 className='card-title'>
                          <p>There is no posts... </p>
                      </h5>
                      <br></br>
                  </CardBody>
                </Card>
            </Col>
          </Row>
        ) :
        (
          <PostsCards 
            allPosts={allPosts}
          />
        )
      }
      </Container>
    );
  }
}

export default BlogPosts;
