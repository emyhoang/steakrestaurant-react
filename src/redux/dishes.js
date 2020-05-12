// import { DISHES } from '../shared/dishes';
import * as ActionTypes from './ActionTypes';

export const Dishes = (state = { isLoading: true, errMess: null, dishes: [] }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_DISHES:
      return { ...state, isLoading: false, errMess: null, dishes: action.payload };

    case ActionTypes.DISHES_LOADING:
      return { ...state, isLoading: true, errMess: null, dishes: [] };

    case ActionTypes.DISHES_FAILED:
      // console.log('@@HIT Error Dishes Failed Fetch');
      return { ...state, isLoading: false, errMess: action.payload, dishes: [] };

    default:
      return state;
  }
};
