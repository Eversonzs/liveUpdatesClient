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
  const { createPost } = props;
  return (
    <Card small className='mb-3'>
      <CardBody>
        <Form className='add-new-post'>
            <FormInput size='lg' className='mb-3' placeholder='Your Post Title' />
            <ReactQuill className='add-new-post__editor mb-1' />
        </Form>
      </CardBody>
      <Row className='col float-right'>
        <Button
          onClick={() => createPost()}
          className='ml-auto'
        >
          Send
        </Button>
      </Row>
      <br></br>
    </Card>
  )

}

export default Editor;
