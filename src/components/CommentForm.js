import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Label, Row, Col } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;

function CommentForm(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { dishId, postComment } = props;

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handleSubmit = (values) => {
    toggleModal();
    postComment(dishId, values.rating, values.author, values.comment);
  };

  return (
    <>
      <Button outline onClick={toggleModal}>
        <span className='fa fa-edit fa-lg'></span> Submit Comment
      </Button>

      <Modal isOpen={isModalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Submit Comment</ModalHeader>
        <ModalBody>
          <div className='col-12'>
            <LocalForm onSubmit={(values) => handleSubmit(values)}>
              <Row className='form-group'>
                <Label htmlFor='rating' md={12}>
                  Rating
                </Label>
                <Col md={12}>
                  <Control.select model='.rating' name='rating' className='form-control'>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className='form-group'>
                <Label htmlFor='author' md={12}>
                  {' '}
                  Your Name
                </Label>
                <Col md={12}>
                  <Control.text
                    model='.author'
                    id='author'
                    name='author'
                    placeholder='Your Name'
                    className='form-control'
                    validators={{
                      required,
                      minLength: minLength(3),
                      maxLength: maxLength(15),
                    }}
                  />
                  <Errors
                    className='text-danger'
                    model='.author'
                    show='touched'
                    messages={{
                      required: 'Required',
                      minLength: 'Must be greater than 2 characters',
                      maxLength: 'Must be less than 15 characters',
                    }}
                  ></Errors>
                </Col>
              </Row>
              <Row className='form-group'>
                <Label htmlFor='comment' md={12}>
                  Comment
                </Label>
                <Col md={12}>
                  <Control.textarea model='.comment' id='comment' name='comment' rows='6' className='form-control' />
                </Col>
              </Row>
              <Row className='form-group'>
                <Col md={4}>
                  <Button type='submit' value='submit' color='primary'>
                    Submit
                  </Button>
                </Col>
              </Row>
            </LocalForm>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
}

export default CommentForm;
