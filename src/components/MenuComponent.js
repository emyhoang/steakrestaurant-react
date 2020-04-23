import React from 'react';
import { Card, CardTitle, CardImg, CardImgOverlay } from 'reactstrap';

class Menu extends React.Component {
  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div className='col-12 col-md-5 mt-1' key={dish.id}>
          <Card onClick={() => this.props.onClick(dish.id)}>
            <CardImg width='100%' src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle className='font-weight-bold'>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div className='container'>
        <div className='row'>{menu}</div>
      </div>
    );
  }
}

export default Menu;
