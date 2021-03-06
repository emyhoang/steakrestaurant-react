import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import DishComment from './DishComment';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

const RenderComment = (props) => {
  return props.comment.map((comment) => {
    return (
      <Stagger in>
        <ul key={comment.id} className='list-unstyled'>
          <Fade in>
            <DishComment {...comment} />
          </Fade>
        </ul>
      </Stagger>
    );
  });
};

const DishDetail = (props) => {
  const { dishSelected: dish, comments: comment, postComment, isLoading, errMess } = props;

  const RenderDish = () => {
    return (
      <>
        <FadeTransform
          in
          transformProps={{
            exitTransform: 'scale(0.5) translateY(-50%)',
          }}
        >
          <Card>
            <CardImg top src={baseUrl + dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle className='font-weight-bold'>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </FadeTransform>
      </>
    );
  };

  if (isLoading) {
    return (
      <div className='container'>
        <div className='row'>
          <Loading />
        </div>
      </div>
    );
  } else if (errMess) {
    return (
      <div className='container'>
        <div className='row'>
          <h4>{errMess}</h4>
        </div>
      </div>
    );
  } else if (dish != null) {
    return (
      <div className='container'>
        <div className='row'>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to='/menu'>Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className='col-12'>
            <h3>{dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className='row'>
          <div className='col-12 col-md-5 m-1'>
            <RenderDish dish={dish} />
          </div>
          <div className='col col-md-5 m-1 font-weight-bold'>
            <h4>Comments</h4>
            <RenderComment comment={comment} />
            <CommentForm dishId={dish.id} postComment={postComment} />
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default DishDetail;
