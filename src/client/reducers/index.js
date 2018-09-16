import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import tableNumberReducer from './table_number_reducer';
import deviceUuidReducer from './device_uuid_reducer';

const rootReducer = combineReducers({
  tableNumber: tableNumberReducer,
  device_uuid: deviceUuidReducer,
  form: formReducer
});

export default rootReducer;
