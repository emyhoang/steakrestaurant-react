// import { LEADERS } from '../shared/leaders';
import * as ActionType from './ActionTypes';

export const Leaders = (state = { isLoading: true, errMess: null, leaders: [] }, action) => {
  switch (action.type) {
    case ActionType.ADD_LEADERS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        leaders: action.payload,
      };
    case ActionType.LEADERS_FAILED:
      return {
        ...state,
        errMess: action.payload,
      };
    case ActionType.LEADERS_LOADING:
      return {
        ...state,
        isLoading: true,
        errMess: null,
        leaders: [],
      };
    default:
      return state;
  }
};
