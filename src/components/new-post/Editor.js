import React from 'react';
import ReactQuill from 'react-quill';
import {
    Card,
    CardBody,
    Form,
    FormInput,
    Row,
    Button,
} from 'shards-react';

import 'react-quill/dist/quill.snow.css';
import './Editor.css';

const Editor = (props) => {
  const {
      createPost,
      handleOnChange,
      isButtonDisable,
  } = props;

  return (
    <Card small className='mb-3'>
      <CardBody>
        <Form className='add-new-post'>
            <FormInput
              size='lg'
              className='mb-3'
              id='postTitle'
              placeholder='Your Post Title'
              onChange={(e) => handleOnChange(e)}
            />
            <ReactQuill
              className='add-new-post__editor mb-1'
              id='postDescription'
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
