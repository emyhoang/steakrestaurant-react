import React from 'react';
import DishDetail from './DishdetailComponent';
import { Card, CardTitle, CardImg, CardImgOverlay } from 'reactstrap';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDish: null,
    };
  }

  onDishSelected(dish) {
    this.setState({ selectedDish: dish });
  }

  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div className='col-12 col-md-5 mt-1' key={dish.id}>
          <Card onClick={() => this.onDishSelected(dish)}>
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
        <DishDetail dishSelected={this.state.selectedDish} />
      </div>
    );
  }
}

export default Menu;
