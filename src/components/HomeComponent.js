import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Jumbotron } from 'reactstrap';
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

      <Jumbotron>
        <div className='container'>
          <h4 className='display-4 text-center'>WELCOME TO VIVO STEAKHOUSE</h4>
          <p className='lead text-center'>
            We are an Australian-inspired steakhouse restaurant beloved worldwide. We pride ourselves on serving up
            variety; our unbeatable steak cuts are complemented by delicious choices of chicken, ribs, seafood, and
            pasta at a price for everyone. Our strategy? We're the leader of the pack by emphasizing consistently high
            quality delicious food delivering a warm, welcoming environment. Our generous portions are moderately
            priced. Our casual atmosphere couldn't be more transporting - it's like you're right there in the Australian
            Outback.
          </p>
          <button className='btn btn-lg btn-warning text-center text-white'>Order Takeout</button>
          <button className='btn btn-lg btn-danger ml-2 text-center'>Delivery</button>
        </div>
      </Jumbotron>

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
