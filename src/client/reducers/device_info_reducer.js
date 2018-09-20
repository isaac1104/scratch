import { SAVE_USER_ID, SAVE_DEVICE_UUID, SAVE_TABLE_NUMBER, SAVE_LOCATION_ID, SET_KITCHEN_VIEW } from '../actions/types';

const INITIAL_STATE = {
  user_id: '',
  uuid: '',
  table_number: '',
  kitchen_view: false,
  set_type: '',
  location_id: 0
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
        uuid: action.payload
      };
    case SAVE_TABLE_NUMBER:
      return {
        ...state,
        table_number: action.payload
      };
    case SAVE_LOCATION_ID:
      return {
        ...state,
        location_id: action.payload
      };
    case SET_KITCHEN_VIEW:
      return {
        ...state,
        kitchen_view: action.payload
      };
    default:
      return state;
  }
};

export default deviceInfoReducer;
