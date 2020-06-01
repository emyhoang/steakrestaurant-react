import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform } from 'react-animation-components';
import HeroVideo from './video/HeroVideo.mp4';

const RenderCard = ({ item, isLoading, errMess }) => {
  if (isLoading) {
    return <Loading />;
  } else if (errMess) {
    return <h4>{errMess}</h4>;
  } else {
    return (
      <FadeTransform
        in
        transformProps={{
          exitTransform: 'scale(0.5) translateY(-50%)',
        }}
      >
        <Card>
          <CardImg src={baseUrl + item.image} alt={item.name} />
          <CardBody>
            <CardTitle className='font-weight-bold'>{item.name}</CardTitle>
            {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
            <CardText>{item.description}</CardText>
          </CardBody>
        </Card>
      </FadeTransform>
    );
  }
};

function Home(props) {
  return (
    <>
      <div class='embed-responsive embed-responsive-21by9'>
        <video autoPlay loop className='embed-responsive-item'>
          <source src={HeroVideo} type='video/mp4' />
        </video>
      </div>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-12 col-md m-1'>
            <RenderCard item={props.dish} errMess={props.dishesErrMess} isLoading={props.dishesLoading} />
          </div>
          <div className='col-12 col-md m-1'>
            <RenderCard item={props.promotion} isLoading={props.promoLoading} errMess={props.promoErrMess} />
          </div>
          <div className='col-12 col-md m-1'>
            <RenderCard item={props.leader} isLoading={props.leaderLoading} errMess={props.leaderErrMess} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
