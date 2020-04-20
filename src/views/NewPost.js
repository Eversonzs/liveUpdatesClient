import React from 'react';
import { Container, Row, Col } from 'shards-react';
import { NotificationManager } from 'react-notifications';
import { isEmpty } from 'lodash';
import ReactLoading from 'react-loading';

import styles from './modulesCss/NewPost.module.css';
import PageTitle from '../components/common/PageTitle';
import Editor from '../components/new-post/Editor';
import CreatePost from '../services/createPost';
import GetPostCategories from '../services/getPostCategories';

class NewPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      postTitle: '',
      postDescription: '',
      category: 0,
      image: '',
      userSession: {},
      isButtonDisable: true,
      postCategories: [],
    };
  }

  componentDidMount = async () => {
    const userSession = JSON.parse(sessionStorage.getItem('userSession'));
    this.setState({ userSession });
    const postCategories = await GetPostCategories();
    let categories = [{ post_category_id: 0, name: 'There is not categories'}];
    if (postCategories.code === 200) {
        categories = postCategories.categories;
    }
    this.setState({ loading: false, postCategories: categories });
  }

  handleImageOnChange = (event) => {
    const userDataKey = event.target.id;
    if (userDataKey === 'image') {
      const photo = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(photo);
      reader.onloadend = () => {
          const imageB64 = reader.result;
          this.setState({ image: imageB64 });
      };
    }
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
      userSession,
      category,
      image,
    } = this.state;

    if (isEmpty(postTitle)) {
        NotificationManager.error('Post title can not be empty');
        return false;
    }
    if (isEmpty(postDescription)) {
        NotificationManager.error('Post description can not be empty');
        return false;
    }

    const postData = {
      postCategoryId: parseInt(category),
      userId: parseInt(userSession.user_id),
      title: postTitle,
      description: postDescription,
      image,
    }
    CreatePost(postData)
      .then(response => {
        if (response.code === 201) {
          NotificationManager.success('Done!');
          this.setState({
              postTitle: '',
              postDescription: '',
              category: 0,
              image: '',
          })
        }
      })
      .catch(() => {
        NotificationManager.success('Error, please try again!');
      })
  }

  render() {
    const {
      isButtonDisable,
      postTitle,
      postDescription,
      loading,
      postCategories,
      category,
    } = this.state;

    return (
      <Container fluid className='main-content-container px-4 pb-4'>
        {/* Page Header */}
        <Row noGutters className='page-header py-4'>
          <PageTitle sm='4' title='Add New Post' subtitle='Live-Updates' className='text-sm-left' />
        </Row>
        {
          loading ?
          (
            <div className={styles.divElementsCenter}>
              <ReactLoading type='bars' color='#007bff' />
            </div>
          ) :
          (
            <Row>
            <Col lg='9' md='12'>
                <Editor
                    handleOnChange={this.handleOnChange}
                    createPost={this.createPost}
                    isButtonDisable={isButtonDisable}
                    postTitle={postTitle}
                    postDescription={postDescription}
                    postCategories={postCategories}
                    category={category}
                    handleImageOnChange={this.handleImageOnChange}
                />
            </Col>
            </Row>
          )
        }
      </Container>
    );
  };
};

export default NewPost;
