import React from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  FormSelect,
} from 'shards-react';
import { NotificationManager } from 'react-notifications';
import ReactLoading from 'react-loading';

import styles from './modulesCss/NewsBlog.module.css';
import PageTitle from '../components/common/PageTitle';
import PostsCards from '../components/news-blog/PostsCards';
import GetAllPosts from '../services/getAllPosts';
import GetPostCategories from '../services/getPostCategories';
import GetPostsByCategory from '../services/getPostsByCategory';

class BlogPosts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allPosts: [],
      noPosts: true,
      loading: true,
      category: 0,
      postCategories: [],
    };
  }

  componentDidMount = async () => {
    const postCategories = await GetPostCategories();
    let categories = [{ post_category_id: 0, name: 'There is not categories'}];
    if (postCategories.code === 200) {
        categories = postCategories.categories;
    }

    GetAllPosts()
      .then(response => {
        if (response.code === 200) {
          this.setState({
            allPosts: response.posts,
            noPosts: false,
            loading: false,
            postCategories: categories,
          });
        }
      })
      .catch(error => {
        NotificationManager.error(error.message);
        this.setState({ noPosts: true, loading: false });
      })
  };

  handleOnChange = (event) => {
    if (event.target) {
      const categoryId = event.target.value
      this.setState({
        [event.target.id]: categoryId,
        loading: true,
      });
      
      GetPostsByCategory(parseInt(categoryId))
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
          this.setState({
            loading: false,
            noPosts: true,
          })
        })
    }
  }

  render() {
    const {
      allPosts,
      noPosts,
      loading,
      category,
      postCategories,
    } = this.state;

    return (
      <Container fluid className='main-content-container px-4'>
          {/* Page Header */}
          <Row noGutters className='page-header py-4'>
            <PageTitle sm='4' title='News Blog' className='text-sm-left' />
          </Row>
          <FormSelect
              className='categories-form-select'
              id='category'
              onChange={(e) => this.handleOnChange(e)}
              value={category}
            >
              <option value='0' key='0' defaultValue hidden>Select a category.</option>
              {
                postCategories.map(category => (
                  <option value={category.post_category_id} key={category.post_category_id}>
                    {category.name}
                  </option>
                ))
              }
            </FormSelect>
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
