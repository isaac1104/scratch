import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import userAuthReducer from './user_auth_reducer';
import deviceInfoReducer from './device_info_reducer';

const rootReducer = combineReducers({
  deviceInfo: deviceInfoReducer,
  user: userAuthReducer,
  form: formReducer
});

export default rootReducer;
