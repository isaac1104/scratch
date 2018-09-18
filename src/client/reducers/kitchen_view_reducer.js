import { SET_KITCHEN_VIEW } from '../actions/types';

function kitchenViewReducer(state = false, action) {
  switch (action.type) {
    case SET_KITCHEN_VIEW:
      return action.payload;
    default:
      return state;
  }
};

export default kitchenViewReducer;
