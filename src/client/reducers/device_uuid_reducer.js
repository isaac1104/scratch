import { SAVE_DEVICE_UUID } from '../actions/types';

function deviceUuidReducer(state = '', action) {
  switch (action.type) {
    case SAVE_DEVICE_UUID:
      return action.payload;
    default:
      return state;
  }
};

export default deviceUuidReducer;
