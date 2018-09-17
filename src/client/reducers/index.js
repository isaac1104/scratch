import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import tableNumberReducer from './table_number_reducer';
import deviceUuidReducer from './device_uuid_reducer';
import userAuthReducer from './user_auth_reducer';

const rootReducer = combineReducers({
  tableNumber: tableNumberReducer,
  device_uuid: deviceUuidReducer,
  user: userAuthReducer,
  form: formReducer
});

export default rootReducer;
