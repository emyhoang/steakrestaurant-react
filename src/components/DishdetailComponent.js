import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';
import DishComment from './DishComment';

const RenderComment = (props) => {
  console.log(`RenderComment ${JSON.stringify(props)}`);

  return props.dishSelected.comments.map((comment) => {
    return (
      <ul key={comment.id} className='list-unstyled'>
        <DishComment {...comment} />
      </ul>
    );
  });
};

const DishDetail = (props) => {
  console.log(`DishDetail ${JSON.stringify(props)}`);

  const { dishSelected: dish } = props;

  if (dish != null) {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-5 mt-1'>
            <Card>
              <CardImg top src={dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle className='font-weight-bold'>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
            </Card>
          </div>
          <div className='col col-md mt-1'>
            <h4>Comments</h4>
            <div className='font-weight-bold'>
              <RenderComment dishSelected={dish} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default DishDetail;
