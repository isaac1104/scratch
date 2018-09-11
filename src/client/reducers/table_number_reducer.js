import { SAVE_TABLE_NUMBER } from '../actions/types';

function tableNumberReducer(state = '', action) {
  switch (action.type) {
    case SAVE_TABLE_NUMBER:
      return action.payload;
    default:
      return state;
  }
}

export default tableNumberReducer;
