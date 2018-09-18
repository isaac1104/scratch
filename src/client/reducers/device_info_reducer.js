import { SAVE_USER_ID, SAVE_DEVICE_UUID, SAVE_TABLE_NUMBER, SET_KITCHEN_VIEW } from '../actions/types';

const INITIAL_STATE = {
  user_id: '',
  device_uuid: '',
  table_number: '',
  isKitchenView: false
};

function deviceInfoReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SAVE_USER_ID:
      return {
        ...state,
        user_id: action.payload
      };
    case SAVE_DEVICE_UUID:
      return {
        ...state,
        device_uuid: action.payload
      };
    case SAVE_TABLE_NUMBER:
      return {
        ...state,
        table_number: action.payload
      };
    case SET_KITCHEN_VIEW:
      return {
        ...state,
        isKitchenView: action.payload
      };
    default:
      return state;
  }
};

export default deviceInfoReducer;
