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
  } = props;

  return (
    <Card small className='mb-3'>
      <CardBody>
        <Form className='add-new-post'>
          <FormSelect
            className='categories-form-select'
            id='category'
            onChange={(e) => handleOnChange(e)}
          >
            <option value='0' disabled selected>Select a category for the post.</option>
            {
              postCategories.map(category => (
                <option value={category.post_category_id}>
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
