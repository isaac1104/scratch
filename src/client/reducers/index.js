import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import tableNumberReducer from './table_number_reducer';
import deviceUuidReducer from './device_uuid_reducer';
import userAuthReducer from './user_auth_reducer';
import kitchenViewReducer from './kitchen_view_reducer';

const rootReducer = combineReducers({
  tableNumber: tableNumberReducer,
  device_uuid: deviceUuidReducer,
  isKitchenView: kitchenViewReducer,
  user: userAuthReducer,
  form: formReducer
});

export default rootReducer;
