import * as ActionTypes from './ActionTypes';

export const initialFeedback = (state = { errMess: null, feedbacks: [] }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_FEEDBACKS:
      return {
        ...state,
        errMess: null,
        feedbacks: action.payload,
      };
    case ActionTypes.FEEDBACKS_FAILED:
      return {
        ...state,
        errMess: action.payload,
      };
    case ActionTypes.ADD_FEEDBACK:
      var feedback = action.payload;
      console.log(`HIT FEEDBACK ${JSON.stringify(feedback)}`);
      console.log(`WHAT IS ${JSON.stringify(state.feedbacks)}`);
      return { ...state, feedbacks: state.feedbacks.concat(feedback) };

    default:
      return state;
  }
};
