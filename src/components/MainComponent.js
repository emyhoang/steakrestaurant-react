import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null,
    };
  }

  onDishSelected(dishId) {
    this.setState({ selectedDish: dishId });
  }

  render() {
    return (
      <div>
        <Navbar dark color='primary'>
          <div className='container'>
            <NavbarBrand href='/'>Vivo Steakhouse</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelected(dishId)} />
        <DishDetail dishSelected={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
      </div>
    );
  }
}

export default Main;
