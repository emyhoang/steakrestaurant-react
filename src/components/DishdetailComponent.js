import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import DishComment from './DishComment';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm';

const RenderComment = (props) => {
  return props.comment.map((comment) => {
    return (
      <ul key={comment.id} className='list-unstyled'>
        <DishComment {...comment} />
      </ul>
    );
  });
};

const DishDetail = (props) => {
  //REMOVE WHEN DONE
  // console.log(`DishDetail ${JSON.stringify(props)}`);
  const { dishSelected: dish, comments: comment } = props;

  const RenderDish = () => {
    return (
      <>
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle className='font-weight-bold'>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </>
    );
  };

  if (dish != null) {
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
            <CommentForm />
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default DishDetail;
