import { SAVE_ITEM_TYPE } from '../actions/types';

const INITIAL_STATE = {
  item_type: '',
  item_id: '',
  meal_id: '',
  extras: []
};

function orderItemsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SAVE_ITEM_TYPE:
      return {
        ...state,
        item_type: action.payload
      };
    default:
      return state;
  }
};

export default orderItemsReducer;
