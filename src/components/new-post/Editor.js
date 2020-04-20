import React from 'react';
import ReactQuill from 'react-quill';
import {
    Card,
    CardBody,
    Form,
    FormInput,
    Row,
    Button,
    FormSelect,
    FormGroup,
} from 'shards-react';

import 'react-quill/dist/quill.snow.css';
import './Editor.css';

const Editor = (props) => {
  const {
      createPost,
      handleOnChange,
      isButtonDisable,
      postTitle,
      postDescription,
      postCategories,
      category,
      handleImageOnChange,
  } = props;

  return (
    <Card small className='mb-3'>
      <CardBody>
        <Form className='add-new-post'>
          <FormSelect
            className='categories-form-select'
            id='category'
            onChange={(e) => handleOnChange(e)}
            value={category}
          >
            <option value='0' key='0' defaultValue hidden>Select a category for the post.</option>
            {
              postCategories.map(category => (
                <option value={category.post_category_id} key={category.post_category_id}>
                  {category.name}
                </option>
              ))
            }
          </FormSelect>
          <br></br>
            <FormInput
              size='lg'
              className='mb-3'
              id='postTitle'
              placeholder='Your Post Title'
              value={postTitle || ''}
              onChange={(e) => handleOnChange(e)}
            />
            <ReactQuill
              className='add-new-post__editor mb-1'
              id='postDescription'
              value={postDescription || ''}
              onChange={(e) => handleOnChange(e)}
            />
            <FormGroup>
                <label htmlFor='image'>Select an image for your post</label>
                <FormInput
                    type='file'
                    accept='image/png, image/jpeg, image/jpg'
                    id='image'
                    placeholder='Select an image...'
                    onChange={(e) => handleImageOnChange(e)}
                    autoComplete='image'
                />
            </FormGroup>
        </Form>
      </CardBody>
      <Row className='col float-right'>
        <Button
          onClick={() => createPost()}
          className='ml-auto'
          disabled={isButtonDisable}
        >
          Send
        </Button>
      </Row>
      <br></br>
    </Card>
  )

}

export default Editor;
