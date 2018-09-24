import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import userAuthReducer from './user_auth_reducer';
import deviceInfoReducer from './device_info_reducer';
import orderItemsReducer from './order_items_reducer';

const rootReducer = combineReducers({
  deviceInfo: deviceInfoReducer,
  user: userAuthReducer,
  form: formReducer,
  orderItems: orderItemsReducer
});

export default rootReducer;
