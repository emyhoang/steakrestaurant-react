import React from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import {
  postComment,
  fetchDishes,
  fetchPromos,
  fetchComments,
  fetchLeaders,
  fetchFeedbacks,
  postFeedback,
} from '../redux/ActionCreators';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
    fetchDishes: () => {
      dispatch(fetchDishes());
    },
    resetFeedbackForm: () => {
      dispatch(actions.reset('feedbacks'));
    },
    fetchComments: () => {
      dispatch(fetchComments());
    },
    fetchPromos: () => {
      dispatch(fetchPromos());
    },
    fetchLeaders: () => {
      dispatch(fetchLeaders());
    },
    fetchFeedbacks: () => {
      dispatch(fetchFeedbacks());
    },
    postFeedback: (data) => {
      dispatch(
        postFeedback(data.firstname, data.lastname, data.telnum, data.email, data.agree, data.contactType, data.message)
      );
    },
  };
};

class Main extends React.Component {
  onDishSelected(dishId) {
    this.setState({ selectedDish: dishId });
  }

  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchLeaders();
    this.props.fetchFeedbacks();
  }

  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
          dishesLoading={this.props.dishes.isLoading}
          dishesErrMess={this.props.dishes.errMess}
          promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
          promoLoading={this.props.promotions.isLoading}
          promoErrMess={this.props.promotions.errMess}
          leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
          leaderLoading={this.props.leaders.isLoading}
          leaderErrMess={this.props.leaders.ErrMess}
        />
      );
    };

    const DishWithId = ({ match }) => {
      return (
        <DishDetail
          dishSelected={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
          isLoading={this.props.dishes.isLoading}
          errMess={this.props.dishes.errMess}
          comments={this.props.comments.comments.filter(
            (comment) => comment.dishId === parseInt(match.params.dishId, 10)
          )}
          commentsErrMess={this.props.comments.errMess}
          postComment={this.props.postComment}
        />
      );
    };

    const AboutPage = () => {
      return <About leaders={this.props.leaders} />;
    };

    return (
      <div className='page-container'>
        <div className='content-wrapper'>
          <Header />
          <TransitionGroup>
            <CSSTransition key={this.props.location.key} classNames='page' timeout={300}>
              <Switch>
                <Route path='/home' component={HomePage} />
                <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
                <Route path='/menu/:dishId' component={DishWithId} />
                <Route
                  exact
                  path='/contactus'
                  component={() => (
                    <Contact postFeedback={this.props.postFeedback} resetFeedbackForm={this.props.resetFeedbackForm} />
                  )}
                />
                <Route exact path='/aboutus' component={AboutPage} />
                <Redirect to='/home' />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </div>
          <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
